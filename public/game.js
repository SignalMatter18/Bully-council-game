"use strict";

(() => {
  const SAVE_KEY = "bully-council-game-save-v1";
  const MAX_OFFLINE_SECONDS = 8 * 60 * 60;

  const CREW = [
    {
      id: "friend",
      name: "Bully Friend",
      description: "Your first questionable council recruit.",
      baseCost: 50,
      growth: 5,
      income: 1,
      costMode: "tier"
    },
    {
      id: "whispers",
      name: "Whisper Network",
      description: "A rumor mill that mostly creates extra paperwork.",
      baseCost: 120,
      growth: 1.75,
      income: 2,
      costMode: "scaled"
    },
    {
      id: "megaphone",
      name: "Hallway Megaphone",
      description: "Makes the council louder, not necessarily wiser.",
      baseCost: 600,
      growth: 1.8,
      income: 8,
      costMode: "scaled"
    },
    {
      id: "hallpass",
      name: "Hall Pass Crew",
      description: "A squad of helpers who seem to know every corridor.",
      baseCost: 2500,
      growth: 1.75,
      income: 25,
      costMode: "scaled"
    }
  ];

  const SITUATIONS = [
    {
      character: "Maya",
      role: "A new student",
      title: "A seat at lunch",
      text: "Maya is looking for somewhere to sit. Your usual table has an empty chair.",
      choices: [
        {
          label: "Make room and introduce her",
          points: 2,
          heat: -8,
          result: "The table gets a little friendlier. Even the council seems surprised."
        },
        {
          label: "Make a mean joke to impress the crew",
          points: 5,
          heat: 12,
          result: "The crew laughs for a moment. A few nearby students noticed."
        },
        {
          label: "Let the crew decide what to do",
          points: 1,
          heat: 2,
          result: "The moment passes, but nobody feels especially welcome."
        }
      ]
    },
    {
      character: "Jordan",
      role: "A classmate",
      title: "The group project",
      text: "Jordan’s project idea gets a little tangled while the group is planning.",
      choices: [
        {
          label: "Help Jordan explain the idea",
          points: 2,
          heat: -7,
          result: "The group gets back on track. Jordan remembers who helped."
        },
        {
          label: "Join in when someone makes fun of it",
          points: 5,
          heat: 13,
          result: "The council gets a short-lived boost, but the room goes quiet."
        },
        {
          label: "Change the subject and move on",
          points: 1,
          heat: -2,
          result: "The awkward moment fades without becoming a bigger scene."
        }
      ]
    },
    {
      character: "Riley",
      role: "A student from another class",
      title: "A dropped stack of books",
      text: "Riley drops a stack of books in the hallway as the bell rings.",
      choices: [
        {
          label: "Help pick them up",
          points: 2,
          heat: -9,
          result: "You help Riley get to class. The hallway notices the decent move."
        },
        {
          label: "Turn it into a joke for the council",
          points: 5,
          heat: 14,
          result: "The council gets its laugh, but Riley looks embarrassed."
        },
        {
          label: "Keep walking and stay out of it",
          points: 1,
          heat: 0,
          result: "You move on. The council has no new story to tell."
        }
      ]
    },
    {
      character: "Sam",
      role: "A teammate",
      title: "The wrong answer",
      text: "Sam gives a wrong answer in class. A couple of students start whispering.",
      choices: [
        {
          label: "Back Sam up and keep the class moving",
          points: 2,
          heat: -8,
          result: "The whispering stops. Sam gets another chance to answer."
        },
        {
          label: "Add a snarky comment",
          points: 5,
          heat: 15,
          result: "The council scores a laugh, but the teacher is watching now."
        },
        {
          label: "Say nothing and focus on class",
          points: 1,
          heat: -1,
          result: "Class continues. The moment doesn’t grow into a pile-on."
        }
      ]
    },
    {
      character: "Alex",
      role: "A neighbor in the hallway",
      title: "The unkind group chat",
      text: "A few students are passing around an unkind message about Alex.",
      choices: [
        {
          label: "Ask the group to stop and check on Alex",
          points: 2,
          heat: -10,
          result: "The message stops spreading. Alex knows someone noticed."
        },
        {
          label: "Pass it along to the council",
          points: 5,
          heat: 16,
          result: "The council gets a quick boost, and the situation gets more public."
        },
        {
          label: "Leave the chat and change the topic",
          points: 1,
          heat: -3,
          result: "You don’t add to the pile-on, and the chat moves on."
        }
      ]
    }
  ];

  const elements = {
    points: document.querySelector("#points"),
    income: document.querySelector("#income"),
    incomeNote: document.querySelector("#income-note"),
    heatValue: document.querySelector("#heat-value"),
    heatMeter: document.querySelector("#heat-meter"),
    heatFill: document.querySelector("#heat-fill"),
    heatNote: document.querySelector("#heat-note"),
    situation: document.querySelector("#situation-content"),
    crewList: document.querySelector("#crew-list"),
    crewCount: document.querySelector("#crew-count"),
    saveStatus: document.querySelector("#save-status"),
    resetButton: document.querySelector("#reset-button"),
    resetDialog: document.querySelector("#reset-dialog"),
    confirmReset: document.querySelector("#confirm-reset")
  };

  const compactFormat = new Intl.NumberFormat(undefined, {
    notation: "compact",
    maximumFractionDigits: 1
  });

  const normalFormat = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 1
  });

  let state = loadGame();
  let currentSituation = null;
  let lastOutcome = "";
  let lastTick = Date.now();
  let lastSave = 0;

  function freshGame() {
    return {
      points: 10,
      totalEarned: 0,
      heat: 0,
      inventory: Object.fromEntries(CREW.map((item) => [item.id, 0])),
      savedAt: Date.now()
    };
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function validNumber(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? number : fallback;
  }

  function loadGame() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return freshGame();

      const saved = JSON.parse(raw);
      const game = freshGame();

      game.points = validNumber(saved.points, 10);
      game.totalEarned = validNumber(saved.totalEarned);
      game.heat = clamp(validNumber(saved.heat), 0, 100);

      for (const item of CREW) {
        game.inventory[item.id] = Math.floor(
          validNumber(saved.inventory?.[item.id])
        );
      }

      const savedAt = validNumber(saved.savedAt, Date.now());
      const offlineSeconds = clamp(
        (Date.now() - savedAt) / 1000,
        0,
        MAX_OFFLINE_SECONDS
      );
      const offlineGain = incomePerSecondFor(game) * offlineSeconds;

      game.points += offlineGain;
      game.totalEarned += offlineGain;

      return game;
    } catch (error) {
      console.warn("Could not load saved progress; starting a new game.", error);
      return freshGame();
    }
  }

  function formatNumber(value) {
    if (!Number.isFinite(value)) return "Too high";
    return value >= 1000 ? compactFormat.format(value) : normalFormat.format(value);
  }

  function countOwned(id) {
    return Math.max(0, Math.floor(state.inventory[id] || 0));
  }

  function costFor(item) {
    const count = countOwned(item.id);
    const multiplier = item.costMode === "tier"
      ? Math.pow(5, count)
      : Math.pow(item.growth, count);
    const cost = item.baseCost * multiplier;

    return Number.isFinite(cost) ? Math.ceil(cost) : Infinity;
  }

  function rawIncomeFor(game = state) {
    return CREW.reduce(
      (total, item) => total + (game.inventory[item.id] || 0) * item.income,
      0
    );
  }

  function incomeMultiplierFor(game = state) {
    if (game.heat >= 70) return 0.75;
    if (game.heat >= 40) return 0.9;
    return 1;
  }

  function incomePerSecondFor(game = state) {
    return rawIncomeFor(game) * incomeMultiplierFor(game);
  }

  function renderStats() {
    const income = incomePerSecondFor();

    elements.points.textContent = formatNumber(state.points);
    elements.income.textContent = `${formatNumber(income)} / sec`;
    elements.incomeNote.textContent = income === 0
      ? "Hire your first crew member"
      : `${formatNumber(state.totalEarned)} points earned so far`;

    elements.heatValue.textContent = `${Math.round(state.heat)}%`;
    elements.heatFill.style.width = `${state.heat}%`;
    elements.heatMeter.setAttribute(
      "aria-valuenow",
      String(Math.round(state.heat))
    );

    if (state.heat >= 70) {
      elements.heatNote.textContent = "The whole school is watching. Income is reduced.";
    } else if (state.heat >= 40) {
      elements.heatNote.textContent = "People are noticing. Income is slightly reduced.";
    } else if (state.heat >= 15) {
      elements.heatNote.textContent = "A few people are starting to notice.";
    } else {
      elements.heatNote.textContent = "Nobody’s paying much attention.";
    }
  }

  function renderCrew() {
    const total = CREW.reduce((sum, item) => sum + countOwned(item.id), 0);
    elements.crewCount.textContent = `${formatNumber(total)} hired`;

    elements.crewList.innerHTML = CREW.map((item) => {
      const count = countOwned(item.id);
      const cost = costFor(item);
      const currentRate = item.income * incomeMultiplierFor();

      return `
        <article class="crew-item">
          <div>
            <h3>${item.name} <span class="crew-count">×${formatNumber(count)}</span></h3>
            <p class="crew-description">${item.description}</p>
            <div class="crew-meta">
              <span class="rate">+${formatNumber(currentRate)} / sec each</span>
              <span>Next: ${formatNumber(cost)} points</span>
            </div>
          </div>
          <button
            class="button buy-button"
            type="button"
            data-buy="${item.id}"
            aria-label="Hire ${item.name} for ${formatNumber(cost)} Bully Points"
          >
            Hire · ${formatNumber(cost)}
          </button>
        </article>
      `;
    }).join("");

    updateBuyButtons();
  }

  // Update existing buttons instead of rebuilding them on every game tick.
  function updateBuyButtons() {
    elements.crewList.querySelectorAll("[data-buy]").forEach((button) => {
      const item = CREW.find((candidate) => candidate.id === button.dataset.buy);
      button.disabled = !item || state.points < costFor(item);
    });
  }

  function pickSituation() {
    if (SITUATIONS.length === 1) return SITUATIONS[0];

    let next;
    do {
      next = SITUATIONS[Math.floor(Math.random() * SITUATIONS.length)];
    } while (next === currentSituation);

    return next;
  }

  function renderSituation() {
    if (!currentSituation) {
      elements.situation.innerHTML = `
        <div class="situation-card">
          <p class="eyebrow">Situation handled</p>
          <h3 class="situation-title">The hallway moves on</h3>
          <p class="situation-copy">${lastOutcome}</p>
          <button class="button button-primary next-situation" type="button" data-next>
            Get another situation
          </button>
        </div>
      `;
      return;
    }

    const initials = currentSituation.character
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const choices = currentSituation.choices.map((choice, index) => {
      const heatText = choice.heat > 0
        ? ` · +${choice.heat}% Heat`
        : choice.heat < 0
          ? ` · ${choice.heat}% Heat`
          : "";

      return `
        <button class="choice-button" type="button" data-choice="${index}">
          <span class="choice-text">${choice.label}</span>
          <span class="choice-reward">+${choice.points} points${heatText}</span>
        </button>
      `;
    }).join("");

    elements.situation.innerHTML = `
      <div class="situation-card">
        <div class="character-row">
          <div class="character-avatar" aria-hidden="true">${initials}</div>
          <div>
            <p class="character-name">${currentSituation.character}</p>
            <p class="character-role">${currentSituation.role}</p>
          </div>
        </div>
        <h3 class="situation-title">${currentSituation.title}</h3>
        <p class="situation-copy">${currentSituation.text}</p>
        <div class="choices">${choices}</div>
      </div>
    `;
  }

  function renderAll() {
    renderStats();
    renderCrew();
    renderSituation();
  }

  function saveGame() {
    try {
      state.savedAt = Date.now();
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      elements.saveStatus.textContent = "Progress saved in this browser";
      lastSave = Date.now();
    } catch (error) {
      elements.saveStatus.textContent = "Could not save progress";
      console.warn("Could not save the game.", error);
    }
  }

  function buyCrew(id) {
    const item = CREW.find((candidate) => candidate.id === id);
    if (!item) return;

    const cost = costFor(item);
    if (!Number.isFinite(cost) || state.points < cost) return;

    state.points -= cost;
    state.inventory[id] += 1;

    renderStats();
    renderCrew();
    saveGame();
  }

  function handleChoice(index) {
    if (!currentSituation) return;

    const choice = currentSituation.choices[index];
    if (!choice) return;

    const oldPoints = state.points;
    state.points = Math.max(0, state.points + choice.points);
    state.totalEarned += Math.max(0, state.points - oldPoints);
    state.heat = clamp(state.heat + choice.heat, 0, 100);

    lastOutcome = choice.result;
    currentSituation = null;

    renderAll();
    saveGame();
  }

  function tick() {
    const now = Date.now();
    const elapsedSeconds = Math.max(0, (now - lastTick) / 1000);
    lastTick = now;

    const earned = incomePerSecondFor() * elapsedSeconds;
    if (earned > 0) {
      state.points += earned;
      state.totalEarned += earned;
    }

    renderStats();
    updateBuyButtons();

    if (now - lastSave >= 5000) {
      saveGame();
    }
  }

  function resetGame() {
    state = freshGame();
    currentSituation = pickSituation();
    lastOutcome = "";
    lastTick = Date.now();

    try {
      localStorage.removeItem(SAVE_KEY);
    } catch (error) {
      console.warn("Could not clear saved progress.", error);
    }

    renderAll();
    saveGame();
  }

  elements.crewList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-buy]");
    if (button) buyCrew(button.dataset.buy);
  });

  elements.situation.addEventListener("click", (event) => {
    const choiceButton = event.target.closest("[data-choice]");

    if (choiceButton) {
      handleChoice(Number(choiceButton.dataset.choice));
      return;
    }

    if (event.target.closest("[data-next]")) {
      currentSituation = pickSituation();
      lastOutcome = "";
      renderSituation();
    }
  });

  elements.resetButton.addEventListener("click", () => {
    if (typeof elements.resetDialog.showModal === "function") {
      elements.resetDialog.showModal();
    } else if (window.confirm("Reset all game progress in this browser?")) {
      resetGame();
    }
  });

  elements.confirmReset.addEventListener("click", resetGame);
  window.addEventListener("beforeunload", saveGame);

  currentSituation = pickSituation();
  renderAll();

  window.setInterval(tick, 250);
})();
