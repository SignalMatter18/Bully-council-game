"use strict";

(() => {
  const SAVE\_KEY = "bully-council-game-save-v1";
  const MAX\_OFFLINE\_SECONDS = 8 * 60 * 60;

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

  const numberFormat = new Intl.NumberFormat(undefined, {
    notation: "compact",
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

  function finiteNonNegative(value, fallback) {
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? number : fallback;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function loadGame() {
    try {
      const raw = localStorage.getItem(SAVE\_KEY);
      if (!raw) return freshGame();

      const saved = JSON.parse(raw);
      const game = freshGame();

      game.points = finiteNonNegative(saved.points, 10);
      game.totalEarned = finiteNonNegative(saved.totalEarned, 0);
      game.heat = clamp(finiteNonNegative(saved.heat, 0), 0, 100);

      for (const item of CREW) {
        game.inventory[item.id] = Math.floor(
          finiteNonNegative(saved.inventory?.[item.id], 0)
        );
      }

      const savedAt = finiteNonNegative(saved.savedAt, Date.now());
      const offlineSeconds = clamp(
        (Date.now() - savedAt) / 1000,
        0,
        MAX\_OFFLINE\_SECONDS
      );
      const offlineGain = incomePerSecondFor(game) \* offlineSeconds;

      game.points += offlineGain;
      game.totalEarned += offlineGain;

      return game;
    } catch (error) {
      console.warn("Could not load the saved game. Starting a new game.", error);
      return freshGame();
    }
  }

  function formatNumber(value) {
    if (!Number.isFinite(value)) return "Too high";
    if (value < 1000) {
      return new Intl.NumberFormat(undefined, {
        maximumFractionDigits: value < 10 ? 1 : 0
      }).format(value);
    }
    return numberFormat.format(value);
  }

  function formatRate(value) {
    return `${numberFormat.format(value)} / sec`;
  }

  function ownedCount(itemId, game = state) {
    return Math.max(0, Math.floor(game.inventory[itemId] || 0));
  }

  function getCost(item, game = state) {
    const owned = ownedCount(item.id, game);
    const multiplier = item.costMode === "tier"
      ? Math.pow(5, owned)
      : Math.pow(item.growth, owned);

    const cost = item.baseCost * multiplier;
    return Number.isFinite(cost) ? Math.ceil(cost) : Infinity;
  }

  function rawIncomeFor(game) {
    return CREW.reduce((sum, item) => {
      return sum + ownedCount(item.id, game) * item.income;
    }, 0);
  }

  function incomeMultiplierFor(game) {
    if (game.heat >= 70) return 0.75;
    if (game.heat >= 40) return 0.9;
    return 1;
  }

  function incomePerSecondFor(game) {
    return rawIncomeFor(game) * incomeMultiplierFor(game);
  }

  function totalCrew() {
    return CREW.reduce((sum, item) => sum + ownedCount(item.id), 0);
  }

  function heatDescription() {
    if (state.heat >= 70) return "The whole school is watching. Income is reduced.";
    if (state.heat >= 40) return "People are noticing. Income is slightly reduced.";
    if (state.heat >= 15) return "A few people are starting to notice.";
    return "Nobody’s paying much attention.";
  }

  function renderStats() {
    const income = incomePerSecondFor(state);

    elements.points.textContent = formatNumber(state.points);
    elements.income.textContent = formatRate(income);
    elements.incomeNote.textContent = income === 0
      ? "Hire your first crew member"
      : `${formatNumber(state.totalEarned)} points earned so far`;

    elements.heatValue.textContent = `${Math.round(state.heat)}%`;
    elements.heatFill.style.width = `${state.heat}%`;
    elements.heatMeter.setAttribute("aria-valuenow", String(Math.round(state.heat)));
    elements.heatNote.textContent = heatDescription();
  }

  function renderCrew() {
    elements.crewCount.textContent = `${formatNumber(totalCrew())} hired`;

    elements.crewList.innerHTML = CREW.map((item) => {
      const count = ownedCount(item.id);
      const cost = getCost(item);
      const canBuy = state.points >= cost;
      const nextIncome = item.income * incomeMultiplierFor(state);

      return \`
        <article class="crew-item">
          <div>
            <h3>\${item.name} <span class="crew-count">×\${formatNumber(count)}</span></h3>
            <p class="crew-description">\${item.description}</p>
            <div class="crew-meta">
              <span class="rate">+\${formatNumber(item.income)} / sec each</span>
              <span>Next: \${formatNumber(cost)} points</span>
            </div>
          </div>
          <button
            class="button buy-button"
            type="button"
            data-buy="\${item.id}"
            \${canBuy ? "" : "disabled"}
            aria-label="Hire \${item.name} for \${formatNumber(cost)} Bully Points"
          >
            Hire · \${formatNumber(cost)}
          </button>
        </article>
      \`;
    }).join("");

    // Keep the effective rate visible when Heat has reduced production.
    if (state.heat >= 40) {
      const rateSpans = elements.crewList.querySelectorAll(".rate");
      rateSpans.forEach((span, index) => {
        const item = CREW[index];
        span.textContent =
          `+${formatNumber(item.income * incomeMultiplierFor(state))} / sec each now`;
      });
    }
  }

  function chooseSituation() {
    if (SITUATIONS.length === 1) return SITUATIONS[0];

    let next;
    do {
      next = SITUATIONS[Math.floor(Math.random() * SITUATIONS.length)];
    } while (next === currentSituation);

    return next;
  }

  function renderSituation() {
    if (!currentSituation) {
      elements.situation.innerHTML = \`
        <div class="situation-card">
          <p class="eyebrow">Situation handled</p>
          <h3 class="situation-title">The hallway moves on</h3>
          <p class="situation-copy">\${lastOutcome}</p>
          <button class="button button-primary next-situation" type="button" data-next>
            Get another situation
          </button>
        </div>
      \`;
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

      const rewardClass = choice.points < 0 ? "choice-reward cost" : "choice-reward";
      const pointsText = choice.points >= 0
        ? `+${choice.points} points`
        : `${choice.points} points`;

      return \`
        <button class="choice-button" type="button" data-choice="\${index}">
          <span class="choice-text">\${choice.label}</span>
          <span class="\${rewardClass}">\${pointsText}\${heatText}</span>
        </button>
      \`;
    }).join("");

    elements.situation.innerHTML = \`
      <div class="situation-card">
        <div class="character-row">
          <div class="character-avatar" aria-hidden="true">\${initials}</div>
          <div>
            <p class="character-name">\${currentSituation.character}</p>
            <p class="character-role">\${currentSituation.role}</p>
          </div>
        </div>
        <h3 class="situation-title">\${currentSituation.title}</h3>
        <p class="situation-copy">\${currentSituation.text}</p>
        <div class="choices">\${choices}</div>
      </div>
    \`;
  }

  function renderAll() {
    renderStats();
    renderCrew();
    renderSituation();
  }

  function saveGame() {
    try {
      state.savedAt = Date.now();
      localStorage.setItem(SAVE\_KEY, JSON.stringify(state));
      elements.saveStatus.textContent = "Progress saved in this browser";
      lastSave = Date.now();
    } catch (error) {
      elements.saveStatus.textContent = "Could not save progress";
      console.warn("Could not save the game.", error);
    }
  }

  function buyCrew(itemId) {
    const item = CREW.find((candidate) => candidate.id === itemId);
    if (!item) return;

    const cost = getCost(item);
    if (!Number.isFinite(cost) || state.points < cost) return;

    state.points -= cost;
    state.inventory[item.id] += 1;

    renderStats();
    renderCrew();
    saveGame();
  }

  function handleChoice(index) {
    if (!currentSituation) return;

    const choice = currentSituation.choices[index];
    if (!choice) return;

    const before = state.points;
    state.points = Math.max(0, state.points + choice.points);
    state.totalEarned += Math.max(0, state.points - before);
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

    const earned = incomePerSecondFor(state) * elapsedSeconds;
    if (earned > 0) {
      state.points += earned;
      state.totalEarned += earned;
    }

    renderStats();
    renderCrew();

    if (now - lastSave >= 5000) {
      saveGame();
    }
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
      currentSituation = chooseSituation();
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

  function resetGame() {
    state = freshGame();
    currentSituation = chooseSituation();
    lastOutcome = "";
    lastTick = Date.now();

    try {
      localStorage.removeItem(SAVE\_KEY);
    } catch (error) {
      console.warn("Could not clear the saved game.", error);
    }

    renderAll();
    saveGame();
  }

  elements.confirmReset.addEventListener("click", resetGame);

  window.addEventListener("beforeunload", saveGame);

  currentSituation = chooseSituation();
  renderAll();
  window.setInterval(tick, 250);
})();
