const questionBank = [
  // CIA
  {
    agency: "CIA",
    topic: "Covert action",
    question: "What action did a 1953 CIA memorandum discuss planning in Iran?",
    choices: [
      "Overthrowing Prime Minister Mohammad Mosaddeq",
      "Starting a public health program",
      "Building a national parliament",
      "Ending the monarchy"
    ],
    answer: 0,
    fact: "The declassified memorandum is titled “Factors Involved in the Overthrow of Mossadeq.” It discusses factors related to a planned overthrow of Iran’s prime minister.",
    source: "U.S. Department of State historical record",
    url: "https://history.state.gov/historicaldocuments/frus1951-54Iran/d192"
  },
  {
    agency: "CIA",
    topic: "Covert action",
    question: "In Guatemala in 1953, the CIA took responsibility for operations against which government?",
    choices: [
      "Jacobo Árbenz’s government",
      "The government of Costa Rica",
      "The government of Canada",
      "The government of Sweden"
    ],
    answer: 0,
    fact: "A declassified U.S. government memorandum describes CIA responsibility for operations against the government of Guatemalan president Jacobo Árbenz.",
    source: "U.S. Department of State historical record",
    url: "https://history.state.gov/historicaldocuments/frus1952-54Guat/d287"
  },
  {
    agency: "CIA",
    topic: "Political disruption",
    question: "What did a declassified account say about propaganda used during the Guatemala operation?",
    choices: [
      "Reports about Soviet arms deliveries were fabricated, and a planted arms cache was publicized",
      "All CIA plans were publicly announced before the operation",
      "Only neutral weather reports were broadcast",
      "A correction was broadcast before the reports"
    ],
    answer: 0,
    fact: "The account describes fabricated reports about Soviet arms deliveries and a planted arms cache used in the propaganda effort. This question refers to the account’s description, not an independent claim about every event in the operation.",
    source: "U.S. Department of State historical record",
    url: "https://history.state.gov/historicaldocuments/frus1952-54Guat/d287"
  },
  {
    agency: "CIA",
    topic: "Covert action",
    question: "Where did the CIA account say members of Castillo Armas’s group were trained?",
    choices: [
      "Nicaragua",
      "Guatemala City",
      "Panama",
      "Cuba"
    ],
    answer: 0,
    fact: "The declassified memorandum says approximately 85 members of the Castillo Armas group received training in Nicaragua.",
    source: "U.S. Department of State historical record",
    url: "https://history.state.gov/historicaldocuments/frus1952-54Guat/d287"
  },
  {
    agency: "CIA",
    topic: "Human research",
    question: "What kind of research did the title of the 1977 Senate hearing say MKULTRA involved?",
    choices: [
      "Research in behavioral modification",
      "Public housing research",
      "Weather forecasting",
      "Election administration"
    ],
    answer: 0,
    fact: "The Senate hearing identifies MKULTRA as a CIA program of research in behavioral modification. The hearing is an official record of congressional oversight.",
    source: "U.S. Senate Intelligence Committee hearing",
    url: "https://www.intelligence.senate.gov/1977/08/03/hearings-joint-hearing-subcommittee-health-and-scientific-research-committee-human-resources-project/"
  },

  // FBI
  {
    agency: "FBI",
    topic: "Political disruption",
    question: "What was COINTELPRO, according to the Senate Church Committee?",
    choices: [
      "A covert FBI program intended to disrupt and discredit groups and individuals",
      "A public library digitization project",
      "A wildlife protection program",
      "A system for counting election ballots"
    ],
    answer: 0,
    fact: "The Senate’s Church Committee history describes COINTELPRO as a covert FBI program intended to disrupt and discredit groups and individuals.",
    source: "U.S. Senate Church Committee history",
    url: "https://www.senate.gov/about/powers-procedures/investigations/church-committee.htm"
  },
  {
    agency: "FBI",
    topic: "Political disruption",
    question: "Which movement did the Senate list among COINTELPRO targets?",
    choices: [
      "The anti-Vietnam War movement",
      "Professional baseball",
      "International shipping companies",
      "Local gardening clubs"
    ],
    answer: 0,
    fact: "The Senate’s account lists the anti-Vietnam War movement among groups targeted by FBI counterintelligence programs.",
    source: "U.S. Senate Church Committee history",
    url: "https://www.senate.gov/about/powers-procedures/investigations/church-committee.htm"
  },
  {
    agency: "FBI",
    topic: "Political disruption",
    question: "Which civil-rights organization did the Senate list among groups targeted by COINTELPRO?",
    choices: [
      "The Southern Christian Leadership Conference",
      "The American Red Cross",
      "The National Park Service",
      "The League of Women Voters"
    ],
    answer: 0,
    fact: "The Senate’s Church Committee history lists the Southern Christian Leadership Conference among organizations targeted by FBI counterintelligence programs.",
    source: "U.S. Senate Church Committee history",
    url: "https://www.senate.gov/about/powers-procedures/investigations/church-committee.htm"
  },
  {
    agency: "FBI",
    topic: "Surveillance",
    question: "When did FBI monitoring of Martin Luther King Jr. begin, according to Stanford’s King Institute?",
    choices: [
      "During the Montgomery bus boycott in December 1955",
      "After he received the Nobel Peace Prize",
      "In the 1980s",
      "Only after his assassination"
    ],
    answer: 0,
    fact: "Stanford’s Martin Luther King, Jr. Research and Education Institute says FBI monitoring began in December 1955, during the Montgomery bus boycott.",
    source: "Stanford Martin Luther King, Jr. Research and Education Institute",
    url: "https://kinginstitute.stanford.edu/federal-bureau-investigation-fbi"
  },
  {
    agency: "FBI",
    topic: "Surveillance",
    question: "Which person is documented by Stanford’s King Institute as a target of FBI surveillance?",
    choices: [
      "Martin Luther King Jr.",
      "Cesar Chavez",
      "Rosa Parks",
      "John Lewis"
    ],
    answer: 0,
    fact: "The King Institute documents FBI surveillance of Martin Luther King Jr. and describes the agency’s efforts to investigate and discredit him.",
    source: "Stanford Martin Luther King, Jr. Research and Education Institute",
    url: "https://kinginstitute.stanford.edu/federal-bureau-investigation-fbi"
  },

  // NSA
  {
    agency: "NSA",
    topic: "Surveillance",
    question: "Which two NSA projects did the Senate Church Committee identify in its investigation of domestic surveillance?",
    choices: [
      "SHAMROCK and MINARET",
      "MKULTRA and COINTELPRO",
      "PBSUCCESS and TPAJAX",
      "Apollo and Mercury"
    ],
    answer: 0,
    fact: "The Senate Church Committee’s account discusses NSA Projects SHAMROCK and MINARET in its investigation of government surveillance.",
    source: "U.S. Senate Church Committee history",
    url: "https://www.senate.gov/about/powers-procedures/investigations/church-committee.htm"
  },
  {
    agency: "NSA",
    topic: "Surveillance",
    question: "What kind of information did the NSA’s Section 215 bulk telephony program collect?",
    choices: [
      "Telephone call records, or metadata",
      "The spoken contents of every call",
      "Printed books from public libraries",
      "Only international television broadcasts"
    ],
    answer: 0,
    fact: "The program collected telephone metadata—records about calls, rather than the audio contents of calls. The oversight board reviewed the program and its legal basis.",
    source: "Privacy and Civil Liberties Oversight Board",
    url: "https://www.pclob.gov/Oversight"
  },
  {
    agency: "NSA",
    topic: "Records and oversight",
    question: "What concern did the oversight board raise about the Section 215 bulk phone-records program?",
    choices: [
      "It found little evidence the program produced unique, material counterterrorism results",
      "It said the program had solved every terrorism case",
      "It said the program collected no phone records",
      "It said the program was run by local police"
    ],
    answer: 0,
    fact: "The Privacy and Civil Liberties Oversight Board reported little evidence that the bulk collection program had produced unique, material counterterrorism results.",
    source: "Privacy and Civil Liberties Oversight Board",
    url: "https://www.pclob.gov/Oversight"
  },
  {
    agency: "NSA",
    topic: "Records and oversight",
    question: "What did the USA FREEDOM Act of 2015 do to bulk collection under Section 215?",
    choices: [
      "Ended bulk collection under that authority and created a new provider-records process",
      "Required every phone call to be recorded",
      "Transferred the program to the FBI",
      "Created Project SHAMROCK"
    ],
    answer: 0,
    fact: "The 2015 government statement describes the USA FREEDOM Act as ending bulk collection under Section 215 and establishing a new process involving records held by providers.",
    source: "U.S. Department of Justice statement",
    url: "https://www.justice.gov/archives/opa/pr/joint-statement-department-justice-and-office-director-national-intelligence-declassificati-1"
  },
  {
    agency: "NSA",
    topic: "Records and oversight",
    question: "Under the new Section 215 process described in the government’s 2015 statement, where did phone records remain?",
    choices: [
      "With telephone companies",
      "On a public website",
      "In a public library",
      "At the Federal Election Commission"
    ],
    answer: 0,
    fact: "The government’s statement says phone records remained with telephone companies, with access handled through the new legal process.",
    source: "U.S. Department of Justice statement",
    url: "https://www.justice.gov/archives/opa/pr/joint-statement-department-justice-and-office-director-national-intelligence-declassificati-1"
  }
];

const $ = (id) => document.getElementById(id);
const agencies = ["CIA", "FBI", "NSA"];
const BOARD_KEY = "bully-council-board-v2";

let score = 0;
let round = 1;
let questionIndex = 0;
let roundQuestions = [];
let hasAnswered = false;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildRound() {
  // Shuffle agency order, then shuffle five questions within each agency.
  // This keeps the five-question agency blocks intact.
  const agencyOrder = shuffle(agencies);
  roundQuestions = [];

  for (const agency of agencyOrder) {
    const agencyQuestions = shuffle(
      questionBank.filter((item) => item.agency === agency)
    );
    roundQuestions.push(...agencyQuestions);
  }
}

function renderQuestion() {
  if (questionIndex >= roundQuestions.length) {
    showRoundComplete();
    return;
  }

  hasAnswered = false;
  const item = roundQuestions[questionIndex];

  $("round-label").textContent = `Round ${round}`;
  $("progress").textContent = `Question ${questionIndex + 1} of 15`;
  $("agency").textContent = item.agency;
  $("question").textContent = item.question;
  $("feedback").innerHTML = "";
  $("feedback").classList.remove("visible");
  $("next").hidden = true;

  const choices = shuffle(
    item.choices.map((text, index) => ({
      text,
      correct: index === item.answer
    }))
  );

  const choicesBox = $("choices");
  choicesBox.innerHTML = "";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice.text;
    button.addEventListener("click", () => answerQuestion(choice, item));
    choicesBox.appendChild(button);
  });
}

function answerQuestion(choice, item) {
  if (hasAnswered) return;
  hasAnswered = true;

  const buttons = [...$("choices").querySelectorAll("button")];
  buttons.forEach((button) => {
    button.disabled = true;
    const correctChoice = item.choices[item.answer];
    if (button.textContent === correctChoice) {
      button.classList.add("correct");
    }
  });

  if (choice.correct) {
    score += 1;
    $("score").textContent = score;
  } else {
    const selected = buttons.find((button) => button.textContent === choice.text);
    if (selected) selected.classList.add("wrong");
  }

  const feedback = $("feedback");
  feedback.classList.add("visible");

  const result = document.createElement("p");
  result.textContent = choice.correct
    ? "Correct — +1 Timelord Point."
    : "Not quite. The correct answer is highlighted above.";
  feedback.appendChild(result);

  const fact = document.createElement("p");
  fact.textContent = item.fact;
  feedback.appendChild(fact);

  const source = document.createElement("a");
  source.href = item.url;
  source.target = "_blank";
  source.rel = "noopener noreferrer";
  source.textContent = `Open source: ${item.source}`;
  feedback.appendChild(source);

  const tag = document.createElement("div");
  tag.className = "fact-tag";
  tag.textContent = item.topic;
  feedback.appendChild(tag);

  addPin({
    text: item.fact,
    topic: item.topic,
    source: item.source,
    url: item.url
  });

  $("next").hidden = false;
}

function showRoundComplete() {
  $("game").hidden = true;
  $("round-complete").hidden = false;
  $("complete-title").textContent = `Round ${round} complete`;
  $("complete-text").textContent =
    `You have ${score} Timelord Point${score === 1 ? "" : "s"} total.`;
}

function startNextRound() {
  round += 1;
  questionIndex = 0;
  $("round-complete").hidden = true;
  $("game").hidden = false;
  buildRound();
  renderQuestion();
}

$("next").addEventListener("click", () => {
  questionIndex += 1;
  renderQuestion();
});

$("next-round").addEventListener("click", startNextRound);

function loadPins() {
  try {
    return JSON.parse(localStorage.getItem(BOARD_KEY) || "[]");
  } catch {
    return [];
  }
}

function savePins(pins) {
  localStorage.setItem(BOARD_KEY, JSON.stringify(pins));
}

function addPin(pin) {
  const pins = loadPins();
  pins.push(pin);
  savePins(pins);
  renderPins();
}

$("add-pin").addEventListener("click", () => {
  const input = $("pin-input");
  const text = input.value.trim();
  if (!text) return;

  addPin({
    text,
    topic: $("pin-topic").value
  });
  input.value = "";
});

$("pin-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") $("add-pin").click();
});

$("clear-board").addEventListener("click", () => {
  if (!confirm("Clear every note from the evidence board?")) return;
  savePins([]);
  renderPins();
});

function renderPins() {
  const pins = loadPins();
  const container = $("pins");
  const svg = $("lines");

  container.innerHTML = "";
  svg.innerHTML = "";

  pins.forEach((pin, index) => {
    const card = document.createElement("article");
    card.className = "pin";
    card.dataset.topic = pin.topic;

    const remove = document.createElement("button");
    remove.className = "pin-remove";
    remove.textContent = "x";
    remove.title = "Remove this pin";
    remove.addEventListener("click", () => {
      const updated = loadPins();
      updated.splice(index, 1);
      savePins(updated);
      renderPins();
    });

    const text = document.createElement("div");
    text.textContent = pin.text;

    const topic = document.createElement("span");
    topic.className = "pin-topic";
    topic.textContent = pin.topic;

    card.append(remove, text, topic);

    if (pin.url) {
      const link = document.createElement("a");
      link.href = pin.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `Source: ${pin.source}`;
      card.appendChild(link);
    }

    container.appendChild(card);
  });

  requestAnimationFrame(drawConnections);
}

function drawConnections() {
  const board = $("board");
  const svg = $("lines");
  const boardRect = board.getBoundingClientRect();
  const cards = [...document.querySelectorAll(".pin")];

  svg.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);
  svg.setAttribute("width", boardRect.width);
  svg.setAttribute("height", boardRect.height);
  svg.innerHTML = "";

  const lastCardByTopic = new Map();

  cards.forEach((card) => {
    const topic = card.dataset.topic;
    const previous = lastCardByTopic.get(topic);

    if (previous) {
      const a = previous.getBoundingClientRect();
      const b = card.getBoundingClientRect();
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

      line.setAttribute("x1", a.left + a.width / 2 - boardRect.left);
      line.setAttribute("y1", a.top + a.height / 2 - boardRect.top);
      line.setAttribute("x2", b.left + b.width / 2 - boardRect.left);
      line.setAttribute("y2", b.top + b.height / 2 - boardRect.top);
      line.setAttribute("stroke", "#ad795b");
      line.setAttribute("stroke-width", "2");
      svg.appendChild(line);
    }

    lastCardByTopic.set(topic, card);
  });
}

window.addEventListener("resize", drawConnections);

buildRound();
renderQuestion();
renderPins();
