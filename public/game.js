const source = {
  iran: {
    name: "U.S. Department of State historical record",
    url: "https://history.state.gov/historicaldocuments/frus1951-54Iran/d192"
  },
  guatemala: {
    name: "U.S. Department of State historical record",
    url: "https://history.state.gov/historicaldocuments/frus1952-54Guat/d51"
  },
  guatemalaOps: {
    name: "U.S. Department of State historical record",
    url: "https://history.state.gov/historicaldocuments/frus1952-54Guat/d61"
  },
  guatemalaBudget: {
    name: "U.S. Department of State historical record",
    url: "https://history.state.gov/historicaldocuments/frus1952-54Guat/d75"
  },
  church: {
    name: "U.S. Senate Church Committee history",
    url: "https://www.senate.gov/about/powers-procedures/investigations/church-committee.htm"
  },
  king: {
    name: "Stanford Martin Luther King, Jr. Research and Education Institute",
    url: "https://kinginstitute.stanford.edu/federal-bureau-investigation-fbi"
  },
  pclos: {
    name: "Privacy and Civil Liberties Oversight Board",
    url: "https://www.pclob.gov/Oversight"
  },
  tuskegee: {
    name: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tuskegee/about/index.html"
  },
  tuskegeeTimeline: {
    name: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tuskegee/about/timeline.html"
  },
  ihs: {
    name: "U.S. Government Accountability Office",
    url: "https://www.gao.gov/products/hrd-77-3"
  },
  wra: {
    name: "National Archives and Records Administration",
    url: "https://www.archives.gov/research/aapi/ww2/genealogy"
  },
  eo9066: {
    name: "National Archives and Records Administration",
    url: "https://www.archives.gov/milestone-documents/executive-order-9066"
  },
  dhs: {
    name: "Department of Health and Human Services Office of Inspector General",
    url: "https://oig.hhs.gov/reports/all/2020/communication-and-management-challenges-impeded-hhss-response-to-the-zero-tolerance-policy/"
  }
};

function makeQuestion(agency, topic, question, choices, answer, fact, ref) {
  return { agency, topic, question, choices, answer, fact, source: ref.name, url: ref.url };
}

const questionBank = [
  // CIA — Iran and Guatemala
  makeQuestion(
    "CIA", "Covert action",
    "What action did a 1953 CIA memorandum discuss planning in Iran?",
    ["Overthrowing Prime Minister Mohammad Mosaddeq", "Starting a public health program", "Building a national parliament", "Ending the monarchy"],
    0,
    "The declassified memorandum is titled “Factors Involved in the Overthrow of Mossadeq.” It discusses planning related to the overthrow of Iran’s prime minister.",
    source.iran
  ),
  makeQuestion(
    "CIA", "Covert action",
    "What was the CIA’s Guatemala project called?",
    ["PBSUCCESS", "SHAMROCK", "COINTELPRO", "MINARET"],
    0,
    "Declassified records identify the CIA’s Guatemala operation as Project PBSUCCESS.",
    source.guatemalaBudget
  ),
  makeQuestion(
    "CIA", "Covert action",
    "Which Guatemalan president was the target of the CIA’s PBSUCCESS operation?",
    ["Jacobo Árbenz", "Juan José Arévalo", "Jorge Ubico", "Miguel Ydígoras Fuentes"],
    0,
    "U.S. government records describe PBSUCCESS as an operation directed against the government of President Jacobo Árbenz.",
    source.guatemala
  ),
  makeQuestion(
    "CIA", "Political disruption",
    "What did a CIA planning document say could be used in its Guatemala campaign?",
    ["Real or, when necessary, fabricated evidence", "Only public court judgments", "No information about Guatemala", "Public referendums"],
    0,
    "A 1953 planning document said real or, when necessary, fabricated evidence could be used at an Organization of American States conference.",
    source.guatemala
  ),
  makeQuestion(
    "CIA", "Political disruption",
    "Which method appears in a CIA record about the Guatemala operation?",
    ["Covert media and propaganda distribution", "A public election-monitoring mission", "A humanitarian vaccination drive", "A public release of every operational file"],
    0,
    "CIA records discuss covert media, pamphlets, and other propaganda activities as part of the operation.",
    source.guatemalaOps
  ),

  // FBI — Church Committee and King Institute records
  makeQuestion(
    "FBI", "Political disruption",
    "What did the Senate Church Committee say COINTELPRO was designed to do?",
    ["Disrupt and discredit groups and individuals", "Provide legal services to protest groups", "Register voters", "Investigate only financial fraud"],
    0,
    "The Senate describes COINTELPRO as a covert FBI program designed to disrupt and discredit groups and individuals considered a threat to the social order.",
    source.church
  ),
  makeQuestion(
    "FBI", "Political disruption",
    "Which organization did the Senate list among COINTELPRO targets?",
    ["The Southern Christian Leadership Conference", "The American Red Cross", "The National Park Service", "The Federal Reserve"],
    0,
    "The Senate’s account lists the Southern Christian Leadership Conference among organizations targeted by the FBI program.",
    source.church
  ),
  makeQuestion(
    "FBI", "Political disruption",
    "Which movement did the Senate list among COINTELPRO targets?",
    ["The anti-Vietnam War movement", "The civil aviation industry", "The national park system", "The U.S. Postal Service"],
    0,
    "The Senate lists the anti-Vietnam War movement among the groups targeted by FBI counterintelligence programs.",
    source.church
  ),
  makeQuestion(
    "FBI", "Surveillance",
    "When does Stanford’s King Institute say FBI monitoring of Martin Luther King Jr. began?",
    ["December 1955, during the Montgomery bus boycott", "After he received the Nobel Peace Prize", "In the 1980s", "Only after his assassination"],
    0,
    "Stanford’s King Institute says FBI monitoring began in December 1955, during the Montgomery bus boycott.",
    source.king
  ),
  makeQuestion(
    "FBI", "Political disruption",
    "Which elected officials did the Senate say were among the targets of FBI counterintelligence programs?",
    ["Local, state, and federal officials", "Only foreign officials", "No elected officials", "Only members of the Supreme Court"],
    0,
    "The Senate’s summary says FBI counterintelligence targets included local, state, and federal elected officials.",
    source.church
  ),

  // NSA — Church Committee and oversight-board records
  makeQuestion(
    "NSA", "Surveillance",
    "Which two NSA projects did the Senate Church Committee identify?",
    ["SHAMROCK and MINARET", "MKULTRA and COINTELPRO", "PBSUCCESS and TPAJAX", "Apollo and Mercury"],
    0,
    "The Senate’s account names NSA Projects SHAMROCK and MINARET in its investigation of intelligence abuses.",
    source.church
  ),
  makeQuestion(
    "NSA", "Surveillance",
    "What did the Senate say SHAMROCK and MINARET monitored?",
    ["Wire communications to and from the United States", "Only public radio broadcasts", "Weather satellite images", "Local library records"],
    0,
    "The Senate’s account says the projects monitored wire communications to and from the United States.",
    source.church
  ),
  makeQuestion(
    "NSA", "Surveillance",
    "What did the Senate say happened to some information from SHAMROCK and MINARET?",
    ["Some data was shared with other intelligence agencies", "It was all published in newspapers", "It was deleted before review", "It was sent only to state governments"],
    0,
    "The Senate’s account says some of the data from these programs was shared with other intelligence agencies.",
    source.church
  ),
  makeQuestion(
    "NSA", "Records and oversight",
    "What did the Section 215 bulk telephone records program collect?",
    ["Telephone call records, or metadata", "The spoken contents of every call", "Printed books", "Only television broadcasts"],
    0,
    "The program concerned bulk telephone metadata—records about calls, rather than the audio content of calls.",
    source.pclos
  ),
  makeQuestion(
    "NSA", "Records and oversight",
    "What kind of report did the oversight board publish about Section 215?",
    ["A report on the bulk telephone records program and the FISA Court", "A report on national parks", "A report on airline safety", "A report on public school funding"],
    0,
    "The Privacy and Civil Liberties Oversight Board published a report analyzing the Section 215 telephone records program and the operations of the Foreign Intelligence Surveillance Court.",
    source.pclos
  ),

  // U.S. Public Health Service — Tuskegee study
  makeQuestion(
    "U.S. Public Health Service", "Human research",
    "When did the U.S. Public Health Service study at Tuskegee begin?",
    ["1932", "1945", "1957", "1972"],
    0,
    "The CDC says the U.S. Public Health Service began the study in 1932 with the Tuskegee Institute.",
    source.tuskegeeTimeline
  ),
  makeQuestion(
    "U.S. Public Health Service", "Human research",
    "How many men were initially included in the Tuskegee study, according to the CDC?",
    ["600", "60", "6,000", "12,000"],
    0,
    "The CDC says the study initially involved 600 Black men: 399 with syphilis and 201 who did not have the disease.",
    source.tuskegeeTimeline
  ),
  makeQuestion(
    "U.S. Public Health Service", "Human research",
    "What does the CDC say about informed consent in the Tuskegee study?",
    ["Participants’ informed consent was not collected", "Every participant signed a modern consent form", "The study did not involve human participants", "Consent was collected only after the study ended"],
    0,
    "The CDC states that participants’ informed consent was not collected. Researchers told the men they were being treated for “bad blood.”",
    source.tuskegee
  ),
  makeQuestion(
    "U.S. Public Health Service", "Human research",
    "After penicillin became widely available, what happened to the Tuskegee study participants?",
    ["They were not offered the treatment as part of the study", "They were all given penicillin immediately", "The study changed to a penicillin trial", "The study moved overseas"],
    0,
    "The CDC says participants were not offered treatment even after penicillin became widely available.",
    source.tuskegeeTimeline
  ),
  makeQuestion(
    "U.S. Public Health Service", "Records and oversight",
    "When did the Tuskegee study end?",
    ["1972", "1932", "1943", "1997"],
    0,
    "The CDC says the study ended in 1972 after news coverage and an advisory-panel review.",
    source.tuskegee
  ),

  // Indian Health Service — GAO review
  makeQuestion(
    "Indian Health Service", "Human research",
    "What did the 1976 GAO report review at Indian Health Service facilities?",
    ["Sterilization procedures and consent practices", "School lunch programs", "National park management", "Air traffic control"],
    0,
    "The GAO reviewed permanent sterilization procedures at Indian Health Service and contract facilities, among other topics.",
    source.ihs
  ),
  makeQuestion(
    "Indian Health Service", "Records and oversight",
    "What did GAO find about sterilization procedures in the areas it reviewed?",
    ["They were generally not in compliance with IHS regulations", "Every area exceeded the regulations", "No procedures were reviewed", "The procedures were controlled by state courts"],
    0,
    "GAO reported that the areas it reviewed were generally not in compliance with Indian Health Service regulations.",
    source.ihs
  ),
  makeQuestion(
    "Indian Health Service", "Records and oversight",
    "What did GAO say about many consent forms it reviewed?",
    ["Most did not comply with IHS requirements", "They were all missing from every record", "They were all written by patients", "They were reviewed by Congress before signing"],
    0,
    "GAO found that although consent forms were present in the medical files it reviewed, most did not comply with IHS requirements.",
    source.ihs
  ),
  makeQuestion(
    "Indian Health Service", "Records and oversight",
    "Which groups did GAO specifically mention in its concerns about sterilization rules?",
    ["People under 21 and people who were mentally incompetent", "People who had moved between states", "People over age 65 only", "Federal employees"],
    0,
    "GAO recommended training on requirements involving people under 21 and people who were mentally incompetent, as well as informed consent.",
    source.ihs
  ),
  makeQuestion(
    "Indian Health Service", "Records and oversight",
    "What did GAO recommend improving for sterilization consent?",
    ["Full disclosure on a standard consent form and staff training", "Ending the use of medical records", "Replacing consent with a verbal announcement", "Moving all treatment out of federal facilities"],
    0,
    "GAO recommended a standard form providing the required information and training for physicians and administrators.",
    source.ihs
  ),

  // War Relocation Authority — Japanese American incarceration
  makeQuestion(
    "War Relocation Authority", "Political disruption",
    "What did the War Relocation Authority administer during World War II?",
    ["The largest U.S. incarceration program for Japanese Americans", "The Manhattan Project", "The Marshall Plan", "The national highway system"],
    0,
    "The National Archives describes the WRA as the federal agency that administered the largest World War II incarceration program in the United States.",
    source.wra
  ),
  makeQuestion(
    "War Relocation Authority", "Political disruption",
    "How many WRA incarceration camps does the National Archives identify?",
    ["Ten", "Two", "Thirty", "One hundred"],
    0,
    "The National Archives identifies ten WRA incarceration camps.",
    source.wra
  ),
  makeQuestion(
    "War Relocation Authority", "Political disruption",
    "From which region were Japanese Americans forcibly removed to WRA camps?",
    ["Parts of California, Oregon, Washington, and Arizona designated as military areas", "Only Hawaii", "Only New York City", "Every U.S. state equally"],
    0,
    "The National Archives describes people of Japanese ancestry as forcibly removed from designated military areas in parts of California, Oregon, Washington, and Arizona.",
    source.wra
  ),
  makeQuestion(
    "War Relocation Authority", "Records and oversight",
    "Did incarceration affect only Japanese immigrants who were not U.S. citizens?",
    ["No. Japanese Americans who were U.S. citizens were also incarcerated", "Yes. Only noncitizens were incarcerated", "Yes. Only military personnel were incarcerated", "No Japanese Americans were incarcerated"],
    0,
    "National Archives records cover both Japanese Americans and Japanese immigrants, including U.S. citizens and noncitizens.",
    source.wra
  ),
  makeQuestion(
    "War Relocation Authority", "Records and oversight",
    "What did Executive Order 9066 authorize, according to the National Archives?",
    ["Military authorities to exclude people from designated areas", "The WRA to hold a national election", "The FBI to create COINTELPRO", "The NSA to collect telephone records"],
    0,
    "Executive Order 9066 authorized military commanders to designate military areas and exclude people from them; its implementation resulted in Japanese American incarceration.",
    source.eo9066
  ),

  // Department of Homeland Security — family separation under zero tolerance
  makeQuestion(
    "Department of Homeland Security", "Records and oversight",
    "Which policy did DHS and DOJ adopt in spring 2018 that led to family separations?",
    ["The zero-tolerance policy", "Project MINARET", "PBSUCCESS", "The Tuskegee study"],
    0,
    "The HHS Inspector General says DHS and DOJ adopted a zero-tolerance policy in spring 2018, under which large numbers of families were separated.",
    source.dhs
  ),
  makeQuestion(
    "Department of Homeland Security", "Records and oversight",
    "Under the described policy, what generally happened to separated parents and children?",
    ["Adults were held in federal detention and children entered HHS custody", "Both were immediately released together", "Children were sent to state prisons", "Parents were transferred to the WRA"],
    0,
    "The HHS Inspector General report says adults were typically held in federal detention while children were placed in HHS custody.",
    source.dhs
  ),
  makeQuestion(
    "Department of Homeland Security", "Records and oversight",
    "What did the HHS Inspector General say about advance notice to HHS?",
    ["HHS was not notified in advance through interagency channels", "HHS designed the policy decades earlier", "HHS received complete family records first", "HHS was not involved in caring for children"],
    0,
    "The report says interagency channels were not used to notify HHS of the zero-tolerance policy in advance.",
    source.dhs
  ),
  makeQuestion(
    "Department of Homeland Security", "Records and oversight",
    "What problem made it difficult to identify separated children for reunification?",
    ["There were no established systems to track separated families across DHS and HHS", "The children had no names", "The families were all in one facility", "The records were held by the National Archives"],
    0,
    "The HHS Inspector General found that no procedures or systems had been established to track separated families across HHS and DHS for later reunification.",
    source.dhs
  ),
  makeQuestion(
    "Department of Homeland Security", "Records and oversight",
    "What did the HHS Inspector General say about later tracking procedures?",
    ["They still relied on manual processes vulnerable to error", "They were fully automated and error-proof", "They were never used", "They were managed by the Senate"],
    0,
    "The report says HHS took steps to improve tracking, but the procedures still included manual processes vulnerable to error.",
    source.dhs
  )
];

const $ = (id) => document.getElementById(id);
const agencyNames = [...new Set(questionBank.map((item) => item.agency))];
const BOARD_KEY = "bully-council-board-v2";

let score = 0;
let round = 1;
let questionIndex = 0;
let roundQuestions = [];
let previousAgencies = [];
let answered = false;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildRound() {
  // Prefer three agencies that were not in the immediately previous round.
  let available = agencyNames.filter((name) => !previousAgencies.includes(name));

  // There are seven agencies, so normally four remain after a round.
  // This fallback keeps the game working if the agency list is later changed.
  if (available.length < 3) available = agencyNames;

  const selectedAgencies = shuffle(available).slice(0, 3);
  previousAgencies = selectedAgencies;
  roundQuestions = [];

  for (const agency of selectedAgencies) {
    const agencyQuestions = shuffle(
      questionBank.filter((item) => item.agency === agency)
    ).slice(0, 5);

    roundQuestions.push(...agencyQuestions);
  }
}

function renderQuestion() {
  if (questionIndex >= roundQuestions.length) {
    showRoundComplete();
    return;
  }

  answered = false;
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

  const box = $("choices");
  box.innerHTML = "";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice.text;
    button.addEventListener("click", () => answerQuestion(choice, item));
    box.appendChild(button);
  });
}

function answerQuestion(choice, item) {
  if (answered) return;
  answered = true;

  const buttons = [...$("choices").querySelectorAll("button")];
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.choices[item.answer]) {
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
  feedback.innerHTML = "";
  feedback.classList.add("visible");

  const result = document.createElement("p");
  result.textContent = choice.correct
    ? "Correct — +1 Timelord Point."
    : "Not quite. The correct answer is highlighted above.";
  feedback.appendChild(result);

  const fact = document.createElement("p");
  fact.textContent = item.fact;
  feedback.appendChild(fact);

  const link = document.createElement("a");
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = `Open source: ${item.source}`;
  feedback.appendChild(link);

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
