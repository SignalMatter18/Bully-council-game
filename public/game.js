
const source = {
  iran: {
    name: "U.S. Department of State — FRUS, Iran 1951–1954",
    url: "https://history.state.gov/historicaldocuments/frus1951-54Iran/d192"
  },
  guatemala: {
    name: "U.S. Department of State — FRUS, Guatemala",
    url: "https://history.state.gov/historicaldocuments/frus1952-54Guat/d51"
  },
  guatemalaOps: {
    name: "U.S. Department of State — Guatemala operational records",
    url: "https://history.state.gov/historicaldocuments/frus1952-54Guat/d61"
  },
  guatemalaBudget: {
    name: "U.S. Department of State — Guatemala project records",
    url: "https://history.state.gov/historicaldocuments/frus1952-54Guat/d75"
  },
  church: {
    name: "U.S. Senate — Church Committee",
    url: "https://www.senate.gov/about/powers-procedures/investigations/church-committee.htm"
  },
  king: {
    name: "Stanford King Institute — FBI",
    url: "https://kinginstitute.stanford.edu/federal-bureau-investigation-fbi"
  },
  pclos: {
    name: "Privacy and Civil Liberties Oversight Board",
    url: "https://www.pclob.gov/Oversight"
  },
  tuskegee: {
    name: "CDC — Tuskegee Study",
    url: "https://www.cdc.gov/tuskegee/about/index.html"
  },
  tuskegeeTimeline: {
    name: "CDC — Tuskegee historical timeline",
    url: "https://www.cdc.gov/tuskegee/about/timeline.html"
  },
  ihs: {
    name: "U.S. Government Accountability Office — HRD-77-3",
    url: "https://www.gao.gov/products/hrd-77-3"
  },
  wra: {
    name: "National Archives — Japanese American incarceration",
    url: "https://www.archives.gov/research/aapi/ww2/genealogy"
  },
  eo9066: {
    name: "National Archives — Executive Order 9066",
    url: "https://www.archives.gov/milestone-documents/executive-order-9066"
  },
  dhs: {
    name: "HHS Office of Inspector General — Zero Tolerance",
    url: "https://oig.hhs.gov/reports/all/2020/communication-and-management-challenges-impeded-hhss-response-to-the-zero-tolerance-policy/"
  },
  eichmann: {
    name: "Yad Vashem — Operation Eichmann",
    url: "https://wwv.yadvashem.org/yv/en/exhibitions/eichmann/operation-eichmann.asp"
  },
  eichmannUSHMM: {
    name: "United States Holocaust Memorial Museum — Eichmann Trial",
    url: "https://encyclopedia.ushmm.org/content/en/article/eichmann-trial"
  },
  lillehammer: {
    name: "Norwegian Government — Lillehammer Investigation, NOU 2000:6",
    url: "https://www.regjeringen.no/no/dokumenter/nou-2000-6/id142668/?ch=6"
  },
  mossadResearch: {
    name: "Oxford Academic — English Historical Review, 2025",
    url: "https://academic.oup.com/ehr/article/140/604-605/777/8140798"
  }
};

function makeQuestion(agency, topic, question, choices, answer, fact, ref) {
  return {
    agency,
    topic,
    question,
    choices,
    answer,
    fact,
    source: ref.name,
    url: ref.url
  };
}

const questionBank = [

  // =====================================================
  // CIA — IRAN AND GUATEMALA
  // =====================================================

  makeQuestion(
    "CIA", "Covert action",
    "What was the central political objective discussed in the CIA's 1953 memorandum concerning Iran?",
    [
      "Removing Prime Minister Mohammad Mosaddeq from power and replacing his government",
      "Negotiating a permanent constitutional settlement between Iran's parliament and monarchy",
      "Supporting the nationalization of Iranian petroleum through an internationally supervised agreement",
      "Establishing a multilateral economic development program independent of the Iranian government"
    ],
    0,
    "The memorandum is titled 'Factors Involved in the Overthrow of Mossadeq.' It concerns planning associated with the removal of Iran's prime minister. The historical record is part of the U.S. State Department's Foreign Relations of the United States collection.",
    source.iran
  ),

  makeQuestion(
    "CIA", "Covert action",
    "What was the codename of the CIA's covert operation against the government of Jacobo Árbenz in Guatemala?",
    [
      "PBSUCCESS",
      "TPAJAX",
      "MKULTRA",
      "MONGOOSE"
    ],
    0,
    "PBSUCCESS was the codename associated with the CIA's Guatemala operation in 1954. TPAJAX was associated with the 1953 Iran operation, while MKULTRA and MONGOOSE concerned different CIA programs.",
    source.guatemalaBudget
  ),

  makeQuestion(
    "CIA", "Political intervention",
    "Which political leader was the principal target of Project PBSUCCESS?",
    [
      "President Jacobo Árbenz Guzmán",
      "Former president Juan José Arévalo",
      "President Jorge Ubico Castañeda",
      "President Miguel Ydígoras Fuentes"
    ],
    0,
    "PBSUCCESS targeted the government of Jacobo Árbenz, whose presidency ended following the 1954 coup.",
    source.guatemala
  ),

  makeQuestion(
    "CIA", "Propaganda and information",
    "What did a CIA planning document indicate could be used during the Guatemala campaign?",
    [
      "Real or, when necessary, fabricated evidence intended to influence international opinion",
      "Only independently verified findings issued by international judicial authorities",
      "A publicly supervised referendum conducted by the Organization of American States",
      "An internationally negotiated treaty requiring prior approval from Guatemala's parliament"
    ],
    0,
    "A 1953 planning document discussed the possible use of real or fabricated evidence at an Organization of American States conference. This is a documented example of information manipulation being considered in covert political planning.",
    source.guatemala
  ),

  makeQuestion(
    "CIA", "Propaganda and information",
    "Which combination of activities appears in records concerning the Guatemala operation?",
    [
      "Covert media activity, propaganda distribution, and political influence",
      "Independent election monitoring, judicial reform, and public financial auditing",
      "International peacekeeping, refugee resettlement, and parliamentary mediation",
      "Public diplomacy restricted to officially identified U.S. government statements"
    ],
    0,
    "The declassified records discuss covert media, pamphlets, and propaganda as elements of the operation.",
    source.guatemalaOps
  ),

  // =====================================================
  // FBI — COINTELPRO AND MARTIN LUTHER KING JR.
  // =====================================================

  makeQuestion(
    "FBI", "Political disruption",
    "How did the Senate Church Committee characterize the purpose of COINTELPRO?",
    [
      "A covert program intended to disrupt and discredit targeted organizations and individuals",
      "A judicial oversight program intended to investigate allegations of corruption within Congress",
      "A public intelligence-sharing initiative intended to improve communication with civil rights organizations",
      "A domestic emergency response program restricted to investigating foreign espionage"
    ],
    0,
    "The Senate described COINTELPRO as a covert FBI program designed to disrupt and discredit groups and individuals considered threats to the established social order.",
    source.church
  ),

  makeQuestion(
    "FBI", "Civil rights surveillance",
    "Which organization was among those identified by the Senate as a target of FBI counterintelligence activity?",
    [
      "The Southern Christian Leadership Conference",
      "The National Association of Attorneys General",
      "The American Civil Liberties Union's national legal department",
      "The National Association of State Universities"
    ],
    0,
    "The Senate's historical account identifies the Southern Christian Leadership Conference among organizations targeted by FBI counterintelligence programs.",
    source.church
  ),

  makeQuestion(
    "FBI", "Political disruption",
    "Which broader political movement was included among the targets of FBI counterintelligence programs?",
    [
      "The anti-Vietnam War movement",
      "The international movement for postwar economic reconstruction",
      "The American environmental conservation movement exclusively",
      "The federal campaign for interstate highway development"
    ],
    0,
    "The Senate identifies the anti-Vietnam War movement among the groups targeted by FBI counterintelligence programs.",
    source.church
  ),

  makeQuestion(
    "FBI", "Surveillance",
    "According to Stanford's King Institute, when did FBI monitoring of Martin Luther King Jr. begin?",
    [
      "December 1955, during the Montgomery bus boycott",
      "January 1964, following the passage of the Civil Rights Act",
      "October 1967, during opposition to the Vietnam War",
      "April 1968, following his assassination"
    ],
    0,
    "Stanford's King Institute dates the beginning of FBI monitoring to December 1955, during the Montgomery bus boycott.",
    source.king
  ),

  makeQuestion(
    "FBI", "Political surveillance",
    "Which category of public officials did the Senate identify among FBI counterintelligence targets?",
    [
      "Local, state, and federal elected officials",
      "Only foreign diplomats stationed in Washington",
      "Only appointed officials within the federal intelligence community",
      "Only elected officials serving on congressional intelligence committees"
    ],
    0,
    "The Senate's account identifies local, state, and federal elected officials among the targets of FBI counterintelligence activity.",
    source.church
  ),

  // =====================================================
  // NSA — SHAMROCK, MINARET AND SECTION 215
  // =====================================================

  makeQuestion(
    "NSA", "Surveillance",
    "Which two NSA intelligence projects were identified in the Senate Church Committee's investigation?",
    [
      "SHAMROCK and MINARET",
      "COINTELPRO and MKULTRA",
      "PBSUCCESS and TPAJAX",
      "ECHELON and PRISM"
    ],
    0,
    "The Senate's historical account identifies SHAMROCK and MINARET as NSA projects examined during its investigation of intelligence abuses.",
    source.church
  ),

  makeQuestion(
    "NSA", "Communications surveillance",
    "What type of communications did the Senate associate with SHAMROCK and MINARET?",
    [
      "Wire communications entering and leaving the United States",
      "Only publicly broadcast radio and television programming",
      "Encrypted military communications exclusively between foreign governments",
      "Telephone conversations recorded only after individual criminal convictions"
    ],
    0,
    "The Senate's account describes the monitoring of wire communications to and from the United States.",
    source.church
  ),

  makeQuestion(
    "NSA", "Interagency information sharing",
    "What happened to some information collected through the NSA projects identified by the Church Committee?",
    [
      "Some information was shared with other intelligence agencies",
      "All collected information was automatically published in the Congressional Record",
      "Information was provided exclusively to state and municipal governments",
      "Collected information was destroyed before any other agency could examine it"
    ],
    0,
    "The Senate's investigation describes information from these projects being shared with other intelligence agencies.",
    source.church
  ),

  makeQuestion(
    "NSA", "Bulk data collection",
    "What information did the NSA's former Section 215 bulk telephone records program principally concern?",
    [
      "Telephone metadata, including records about calls rather than the audio of conversations",
      "Complete audio recordings of every domestic telephone conversation",
      "Private messages stored exclusively on personal computers",
      "The contents of every email exchanged by American citizens"
    ],
    0,
    "The Section 215 program concerned bulk telephone metadata. Metadata describes information about communications, rather than the actual spoken contents of telephone calls.",
    source.pclos
  ),

  makeQuestion(
    "NSA", "Oversight",
    "What was the subject of the Privacy and Civil Liberties Oversight Board's Section 215 report?",
    [
      "The bulk telephone records program and the operation of the Foreign Intelligence Surveillance Court",
      "The historical development of military signals intelligence during World War II",
      "The legal authority of the FBI to investigate organized crime",
      "The regulation of public telecommunications companies by state governments"
    ],
    0,
    "The oversight board published an analysis of the Section 215 telephone records program and the Foreign Intelligence Surveillance Court.",
    source.pclos
  ),

  // =====================================================
  // U.S. PUBLIC HEALTH SERVICE — TUSKEGEE
  // =====================================================

  makeQuestion(
    "U.S. Public Health Service", "Human research",
    "In which year did the U.S. Public Health Service begin the Tuskegee Study?",
    [
      "1932",
      "1936",
      "1943",
      "1951"
    ],
    0,
    "The CDC identifies 1932 as the beginning of the study, conducted in cooperation with the Tuskegee Institute.",
    source.tuskegeeTimeline
  ),

  makeQuestion(
    "U.S. Public Health Service", "Human research",
    "How many men were initially enrolled in the Tuskegee Study, according to the CDC?",
    [
      "600 men, including 399 with syphilis and 201 without it",
      "399 men, all of whom had received an established diagnosis",
      "201 men, divided equally between treatment and control groups",
      "1,200 men, including 600 participants from neighboring states"
    ],
    0,
    "The CDC reports that the study initially involved 600 Black men: 399 with syphilis and 201 who did not have the disease.",
    source.tuskegeeTimeline
  ),

  makeQuestion(
    "U.S. Public Health Service", "Informed consent",
    "What does the CDC report about informed consent in the Tuskegee Study?",
    [
      "Researchers did not collect participants' informed consent and misrepresented the nature of the study",
      "Participants received complete explanations of the research objectives before enrollment",
      "Consent was collected through an independent judicial review process",
      "Participants were informed that the study was exclusively designed to test a new antibiotic"
    ],
    0,
    "The CDC states that participants' informed consent was not collected. Researchers told the men that they were being treated for 'bad blood.'",
    source.tuskegee
  ),

  makeQuestion(
    "U.S. Public Health Service", "Medical ethics",
    "What happened after penicillin became widely available as an effective treatment for syphilis?",
    [
      "The participants were not offered the treatment as part of the study",
      "The entire study was immediately converted into a penicillin treatment trial",
      "Every participant was transferred to a separate federal hospital for treatment",
      "The study was formally discontinued and all participants received the treatment"
    ],
    0,
    "The CDC states that the men were not offered treatment even after penicillin became widely available.",
    source.tuskegeeTimeline
  ),

  makeQuestion(
    "U.S. Public Health Service", "Government accountability",
    "In which year did the Tuskegee Study officially end?",
    [
      "1972",
      "1964",
      "1976",
      "1981"
    ],
    0,
    "The CDC states that the study ended in 1972 following news coverage and an advisory-panel review.",
    source.tuskegee
  ),

  // =====================================================
  // INDIAN HEALTH SERVICE — GAO INVESTIGATION
  // =====================================================

  makeQuestion(
    "Indian Health Service", "Human research and medical consent",
    "What was the subject of the 1976 GAO investigation of Indian Health Service facilities?",
    [
      "Permanent sterilization procedures and the associated consent practices",
      "The administration of federal vaccination programs in rural communities",
      "The distribution of federal grants to tribal educational institutions",
      "The regulation of private hospitals operating under federal contracts"
    ],
    0,
    "The GAO reviewed permanent sterilization procedures at Indian Health Service and contract facilities.",
    source.ihs
  ),

  makeQuestion(
    "Indian Health Service", "Government oversight",
    "What conclusion did the GAO reach about the sterilization procedures in the areas it reviewed?",
    [
      "They were generally not in compliance with Indian Health Service regulations",
      "They consistently exceeded every applicable federal consent requirement",
      "They were conducted exclusively by independent state medical authorities",
      "They were fully compliant except for administrative filing delays"
    ],
    0,
    "The GAO reported that the areas it reviewed were generally not in compliance with Indian Health Service regulations.",
    source.ihs
  ),

  makeQuestion(
    "Indian Health Service", "Informed consent",
    "What did the GAO discover when examining sterilization consent forms?",
    [
      "Although forms were present in the records reviewed, most did not comply with IHS requirements",
      "All reviewed facilities used a single federally approved consent form",
      "Consent documentation was absent from every medical file examined",
      "Forms were reviewed and approved individually by congressional committees"
    ],
    0,
    "The GAO found that although consent forms were present in the medical files it reviewed, most did not comply with IHS requirements.",
    source.ihs
  ),

  makeQuestion(
    "Indian Health Service", "Patient protections",
    "Which groups did the GAO specifically identify when discussing problems with sterilization regulations?",
    [
      "People under 21 and people who were mentally incompetent",
      "People over 65 and people receiving federal retirement benefits",
      "People who had recently moved between state jurisdictions",
      "Federal employees and members of the armed forces"
    ],
    0,
    "The GAO recommended training on requirements involving people under 21 and people who were mentally incompetent, alongside informed-consent requirements.",
    source.ihs
  ),

  makeQuestion(
    "Indian Health Service", "Government accountability",
    "What did the GAO recommend to improve informed consent for sterilization procedures?",
    [
      "A standard form providing required information and additional staff training",
      "Replacing written consent with a general verbal explanation",
      "Allowing hospital administrators to waive consent requirements",
      "Transferring all consent decisions to state legislatures"
    ],
    0,
    "The GAO recommended a standard consent form providing the required information and training for physicians and administrators.",
    source.ihs
  ),

  // =====================================================
  // WAR RELOCATION AUTHORITY — JAPANESE AMERICAN
  // INCARCERATION
  // =====================================================

  makeQuestion(
    "War Relocation Authority", "Mass incarceration",
    "What was the War Relocation Authority's principal responsibility during World War II?",
    [
      "Administering the federal incarceration program for Japanese Americans",
      "Managing the relocation of European refugees under the Marshall Plan",
      "Coordinating the internment of German military prisoners overseas",
      "Supervising the removal of American military personnel from Pacific bases"
    ],
    0,
    "The National Archives documents the WRA as the federal agency responsible for administering the major World War II incarceration program for Japanese Americans.",
    source.wra
  ),

  makeQuestion(
    "War Relocation Authority", "Mass incarceration",
    "How many major WRA incarceration camps does the National Archives identify?",
    [
      "Ten",
      "Seven",
      "Twelve",
      "Twenty"
    ],
    0,
    "The National Archives identifies ten WRA incarceration camps.",
    source.wra
  ),

  makeQuestion(
    "War Relocation Authority", "Forced removal",
    "From which areas were Japanese Americans forcibly removed under the wartime exclusion system?",
    [
      "Designated military areas in parts of California, Oregon, Washington, and Arizona",
      "Only military installations in Hawaii and the Aleutian Islands",
      "All coastal areas of the eastern United States",
      "Every state west of the Mississippi River without exception"
    ],
    0,
    "The National Archives documents forced removal from designated military areas in parts of California, Oregon, Washington, and Arizona.",
    source.wra
  ),

  makeQuestion(
    "War Relocation Authority", "Civil rights",
    "Did wartime incarceration affect Japanese Americans who held U.S. citizenship?",
    [
      "Yes. U.S. citizens of Japanese ancestry were also incarcerated",
      "No. The exclusion system applied only to Japanese nationals without citizenship",
      "Only citizens serving in the U.S. military were subject to incarceration",
      "Only people who had recently immigrated from Japan were affected"
    ],
    0,
    "The National Archives documents the incarceration of Japanese Americans, including U.S. citizens, as well as Japanese immigrants.",
    source.wra
  ),

  makeQuestion(
    "War Relocation Authority", "Executive authority",
    "What did Executive Order 9066 authorize military authorities to do?",
    [
      "Designate military areas and exclude people from those areas",
      "Create a permanent federal criminal court for wartime immigration cases",
      "Transfer the authority over all Japanese American citizens to state governments",
      "Authorize the WRA to conduct national elections in designated military districts"
    ],
    0,
    "Executive Order 9066 authorized military commanders to designate military areas and exclude people from them. Its implementation led to Japanese American incarceration.",
    source.eo9066
  ),

  // =====================================================
  // DEPARTMENT OF HOMELAND SECURITY — ZERO TOLERANCE
  // =====================================================

  makeQuestion(
    "Department of Homeland Security", "Family separation",
    "Which federal policy adopted in spring 2018 was associated with widespread family separations at the U.S. border?",
    [
      "The zero-tolerance immigration prosecution policy",
      "The 2002 Homeland Security Act",
      "The Immigration Reform and Control Act of 1986",
      "The postwar Refugee Act of 1980"
    ],
    0,
    "The HHS Inspector General reports that DHS and DOJ adopted a zero-tolerance policy in spring 2018, under which large numbers of families were separated.",
    source.dhs
  ),

  makeQuestion(
    "Department of Homeland Security", "Interagency responsibility",
    "Under the family separation process described by the HHS Inspector General, what generally happened to parents and children?",
    [
      "Adults were held in federal detention while children entered HHS custody",
      "Both parents and children were automatically transferred into state foster care",
      "Children remained in the same federal detention facilities as their parents",
      "Adults were transferred to immigration courts while children were placed under DHS prosecution"
    ],
    0,
    "The report says adults were typically held in federal detention while children were placed in HHS custody.",
    source.dhs
  ),

  makeQuestion(
    "Department of Homeland Security", "Interagency coordination",
    "What did the HHS Inspector General report about advance communication concerning the zero-tolerance policy?",
    [
      "HHS was not notified in advance through established interagency channels",
      "HHS received complete family-tracking records before the policy was announced",
      "HHS independently designed the policy and directed DHS implementation",
      "HHS was formally excluded from all responsibilities involving separated children"
    ],
    0,
    "The Inspector General found that established interagency channels were not used to notify HHS of the zero-tolerance policy in advance.",
    source.dhs
  ),

  makeQuestion(
    "Department of Homeland Security", "Records and accountability",
    "What major administrative weakness complicated the identification and reunification of separated families?",
    [
      "There were no established systems to track separated families across DHS and HHS",
      "All family records were maintained in a single centralized database",
      "The children were automatically assigned permanent federal identification records",
      "The National Archives had exclusive authority over all active immigration files"
    ],
    0,
    "The Inspector General found that systems and procedures had not been established to track separated families across DHS and HHS for later reunification.",
    source.dhs
  ),

  makeQuestion(
    "Department of Homeland Security", "Administrative accountability",
    "What concern did the HHS Inspector General identify about later improvements to family tracking?",
    [
      "Some procedures still relied on manual processes vulnerable to error",
      "The government had completely abandoned all family reunification procedures",
      "The systems had been transferred entirely to private immigration contractors",
      "The procedures were automated but prohibited from recording family relationships"
    ],
    0,
    "The report states that HHS took steps to improve tracking, but procedures still included manual processes vulnerable to error.",
    source.dhs
  ),

  // =====================================================
  // MOSSAD — ISRAELI FOREIGN INTELLIGENCE SERVICE
  // =====================================================

  makeQuestion(
    "Mossad", "International operations",
    "Which historical operation is associated with Mossad agents capturing Adolf Eichmann in Argentina in 1960?",
    [
      "The operation to locate and capture Eichmann for transfer to Israel to face trial",
      "Operation Wrath of God, launched after the 1972 Munich Olympics",
      "The 1953 CIA operation against Iran's Prime Minister Mosaddeq",
      "The 1954 CIA operation against Guatemala's President Jacobo Árbenz"
    ],
    0,
    "Yad Vashem documents the Mossad operation that located and captured Adolf Eichmann in Argentina on May 11, 1960. Eichmann was subsequently taken to Israel and tried for his role in the Holocaust.",
    source.eichmann
  ),

  makeQuestion(
    "Mossad", "International law and sovereignty",
    "What diplomatic controversy followed the capture of Adolf Eichmann in Argentina?",
    [
      "Argentina protested that Israel had violated its sovereignty by taking Eichmann from its territory",
      "Argentina requested that the United Nations authorize an Israeli military administration",
      "Israel formally transferred the case to the International Court of Justice before the capture",
      "Argentina accused the United States of conducting the operation under CIA authority"
    ],
    0,
    "The Eichmann capture caused a diplomatic dispute. Argentina protested to the United Nations Security Council over the violation of its sovereignty. The USHMM documents the international controversy.",
    source.eichmannUSHMM
  ),

  makeQuestion(
    "Mossad", "Historical accountability",
    "Which individual was mistakenly identified during the 1973 Lillehammer affair?",
    [
      "Ahmed Bouchikhi, a Moroccan waiter living in Norway",
      "Adolf Eichmann, a former Nazi official living in Argentina",
      "Jacobo Árbenz, the former president of Guatemala",
      "Wael Zwaiter, a Palestinian intellectual living in Italy"
    ],
    0,
    "The Norwegian government's investigation documents the killing of Ahmed Bouchikhi in Lillehammer in July 1973. Historical research identifies the incident as a case of mistaken identity during an operation associated with Mossad.",
    source.lillehammer
  ),

  makeQuestion(
    "Mossad", "International operations and accountability",
    "What was the central historical failure of the 1973 Lillehammer operation?",
    [
      "The operation targeted the wrong individual, resulting in the death of Ahmed Bouchikhi",
      "The operation failed to capture Adolf Eichmann before his trial in Israel",
      "The operation accidentally exposed the CIA's Guatemala project to the United Nations",
      "The operation resulted in the dissolution of Norway's national police service"
    ],
    0,
    "Research published in the English Historical Review in 2025 discusses the Lillehammer affair and the killing of an innocent man who was mistaken for a suspected Palestinian militant. The Norwegian government investigation provides additional documentation of the case.",
    source.mossadResearch
  ),

  makeQuestion(
    "Mossad", "International accountability",
    "What was the legal outcome for members of the Israeli team arrested in connection with the Lillehammer affair?",
    [
      "Five of the six arrested Israeli operatives were convicted by a Norwegian court",
      "All six were convicted by an Israeli military court and imprisoned for life",
      "The Norwegian authorities dismissed every case without a trial",
      "The United Nations Security Council directly sentenced the entire team"
    ],
    0,
    "Historical research describes the Norwegian court's 1974 convictions of five of the six arrested Israeli operatives, with prison sentences ranging from one to five and a half years. The case became a major diplomatic controversy.",
    source.mossadResearch
  )
];

// =====================================================
// GAME CONFIGURATION
// =====================================================

const $ = (id) => document.getElementById(id);

const agencyNames = [
  ...new Set(questionBank.map(item => item.agency))
];

const BOARD_KEY = "bully-council-board-v3";

let score = 0;
let round = 1;
let questionIndex = 0;
let roundQuestions = [];
let previousAgencies = [];
let answered = false;

// =====================================================
// VALIDATION
// =====================================================

function validateQuestionBank() {
  const errors = [];

  questionBank.forEach((item, index) => {
    if (!item.agency || !item.topic || !item.question) {
      errors.push(`Question ${index + 1}: Missing basic information.`);
    }

    if (!Array.isArray(item.choices) || item.choices.length !== 4) {
      errors.push(`Question ${index + 1}: Must have four choices.`);
    }

    if (new Set(item.choices).size !== item.choices.length) {
      errors.push(`Question ${index + 1}: Duplicate answer choices.`);
    }

    if (!Number.isInteger(item.answer) ||
        item.answer < 0 ||
        item.answer >= item.choices.length) {
      errors.push(`Question ${index + 1}: Invalid correct answer index.`);
    }

    if (!item.fact || !item.source || !item.url) {
      errors.push(`Question ${index + 1}: Missing evidence information.`);
    }

    try {
      const url = new URL(item.url);
      if (url.protocol !== "https:") {
        errors.push(`Question ${index + 1}: Source must use HTTPS.`);
      }
    } catch {
      errors.push(`Question ${index + 1}: Invalid source URL.`);
    }
  });

  for (const agency of agencyNames) {
    const count = questionBank.filter(
      item => item.agency === agency
    ).length;

    if (count < 5) {
      errors.push(`${agency}: Needs at least five questions.`);
    }
  }

  if (errors.length) {
    console.error("Question bank validation failed:", errors);
    throw new Error("Please correct the question bank before starting.");
  }

  console.info(
    `Question bank verified structurally: ${questionBank.length} questions, ${agencyNames.length} agencies.`
  );
}

validateQuestionBank();

// =====================================================
// SHUFFLE
// =====================================================

function shuffle(items) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

// =====================================================
// ROUND GENERATION
// =====================================================

function buildRound() {
  let available = agencyNames.filter(
    name => !previousAgencies.includes(name)
  );

  if (available.length < 3) {
    available = agencyNames;
  }

  const selectedAgencies = shuffle(available).slice(0, 3);

  previousAgencies = selectedAgencies;

  roundQuestions = [];

  for (const agency of selectedAgencies) {
    const agencyQuestions = shuffle(
      questionBank.filter(item => item.agency === agency)
    ).slice(0, 5);

    roundQuestions.push(...agencyQuestions);
  }

  roundQuestions = shuffle(roundQuestions);
}

// =====================================================
// RENDER QUESTION
// =====================================================

function renderQuestion() {
  if (questionIndex >= roundQuestions.length) {
    showRoundComplete();
    return;
  }

  answered = false;

  const item = roundQuestions[questionIndex];

  $("round-label").textContent = `Round ${round}`;

  $("progress").textContent =
    `Question ${questionIndex + 1} of ${roundQuestions.length}`;

  $("agency").textContent = item.agency;
  $("question").textContent = item.question;

  $("feedback").replaceChildren();
  $("feedback").classList.remove("visible");

  $("next").hidden = true;

  const choices = shuffle(
    item.choices.map((text, index) => ({
      text,
      correct: index === item.answer
    }))
  );

  const box = $("choices");
  box.replaceChildren();

  choices.forEach(choice => {
    const button = document.createElement("button");

    button.className = "choice";
    button.textContent = choice.text;

    button.addEventListener("click", () => {
      answerQuestion(button, choice, item);
    });

    box.appendChild(button);
  });
}

// =====================================================
// ANSWER HANDLING
// =====================================================

function answerQuestion(selectedButton, choice, item) {
  if (answered) return;

  answered = true;

  const buttons = [
    ...$("choices").querySelectorAll("button")
  ];

  buttons.forEach(button => {
    button.disabled = true;
  });

  const correctButton = buttons.find(button => {
    return button !== selectedButton &&
      button.textContent === item.choices[item.answer] &&
      !button.classList.contains("wrong");
  });

  // Use the choice data rather than relying on answer text.
  // This also handles identical-looking UI states safely.
  buttons.forEach(button => {
    const isCorrect = button.textContent === item.choices[item.answer];

    if (isCorrect) {
      button.classList.add("correct");
    }
  });

  if (choice.correct) {
    score += 1;
    $("score").textContent = score;
  } else {
    selectedButton.classList.add("wrong");
  }

  const feedback = $("feedback");
  feedback.replaceChildren();
  feedback.classList.add("visible");

  const result = document.createElement("p");

  result.textContent = choice.correct
    ? "Correct — +1 Timelord Point."
    : "Incorrect. The historically supported answer is highlighted above.";

  feedback.appendChild(result);

  const fact = document.createElement("p");
  fact.textContent = item.fact;
  feedback.appendChild(fact);

  const link = document.createElement("a");

  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = `Open primary/reference source: ${item.source}`;

  feedback.appendChild(link);

  const tag = document.createElement("div");

  tag.className = "fact-tag";
  tag.textContent = `${item.agency} | ${item.topic}`;

  feedback.appendChild(tag);

  addPin({
    text: item.fact,
    topic: item.topic,
    agency: item.agency,
    source: item.source,
    url: item.url
  });

  $("next").hidden = false;
}

// =====================================================
// ROUND COMPLETION
// =====================================================

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

// =====================================================
// NEXT BUTTONS
// =====================================================

$("next").addEventListener("click", () => {
  if (!answered) return;

  questionIndex += 1;
  renderQuestion();
});

$("next-round").addEventListener("click", startNextRound);

// =====================================================
// EVIDENCE BOARD STORAGE
// =====================================================

function loadPins() {
  try {
    const stored = localStorage.getItem(BOARD_KEY);
    const parsed = JSON.parse(stored || "[]");

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Could not load evidence board:", error);
    return [];
  }
}

function savePins(pins) {
  try {
    localStorage.setItem(BOARD_KEY, JSON.stringify(pins));
    return true;
  } catch (error) {
    console.error("Could not save evidence board:", error);
    return false;
  }
}

function addPin(pin) {
  const pins = loadPins();

  pins.push({
    ...pin,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  });

  if (savePins(pins)) {
    renderPins();
  }
}

// =====================================================
// MANUAL EVIDENCE BOARD ENTRY
// =====================================================

$("add-pin").addEventListener("click", () => {
  const input = $("pin-input");
  const text = input.value.trim();

  if (!text) return;

  addPin({
    text,
    topic: $("pin-topic").value,
    agency: "User observation"
  });

  input.value = "";
});

$("pin-input").addEventListener("keydown", event => {
  if (event.key === "Enter") {
    $("add-pin").click();
  }
});

// =====================================================
// CLEAR EVIDENCE BOARD
// =====================================================

$("clear-board").addEventListener("click", () => {
  if (!confirm("Clear every note from the evidence board?")) {
    return;
  }

  if (savePins([])) {
    renderPins();
  }
});

// =====================================================
// RENDER EVIDENCE BOARD
// =====================================================

function renderPins() {
  const pins = loadPins();

  const container = $("pins");
  const svg = $("lines");

  container.replaceChildren();
  svg.replaceChildren();

  pins.forEach(pin => {
    const card = document.createElement("article");

    card.className = "pin";
    card.dataset.topic = pin.topic || "Uncategorized";

    const remove = document.createElement("button");

    remove.className = "pin-remove";
    remove.textContent = "×";
    remove.title = "Remove this pin";

    remove.addEventListener("click", () => {
      const updated = loadPins().filter(
        item => item.id !== pin.id
      );

      if (savePins(updated)) {
        renderPins();
      }
    });

    const agency = document.createElement("strong");
    agency.textContent = pin.agency || "Observation";

    const text = document.createElement("div");
    text.textContent = pin.text;

    const topic = document.createElement("span");
    topic.className = "pin-topic";
    topic.textContent = pin.topic || "Uncategorized";

    card.append(remove, agency, text, topic);

    if (pin.url) {
      const link = document.createElement("a");

      link.href = pin.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `Source: ${pin.source || "Open reference"}`;

      card.appendChild(link);
    }

    container.appendChild(card);
  });

  requestAnimationFrame(drawConnections);
}

// =====================================================
// EVIDENCE BOARD CONNECTIONS
// =====================================================

function drawConnections() {
  const board = $("board");
  const svg = $("lines");

  if (!board || !svg) return;

  const boardRect = board.getBoundingClientRect();

  const cards = [
    ...document.querySelectorAll(".pin")
  ];

  svg.setAttribute(
    "viewBox",
    `0 0 ${boardRect.width} ${boardRect.height}`
  );

  svg.setAttribute("width", boardRect.width);
  svg.setAttribute("height", boardRect.height);

  svg.replaceChildren();

  const lastCardByTopic = new Map();

  cards.forEach(card => {
    const topic = card.dataset.topic;
    const previous = lastCardByTopic.get(topic);

    if (previous) {
      const a = previous.getBoundingClientRect();
      const b = card.getBoundingClientRect();

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );

      line.setAttribute(
        "x1",
        a.left + a.width / 2 - boardRect.left
      );

      line.setAttribute(
        "y1",
        a.top + a.height / 2 - boardRect.top
      );

      line.setAttribute(
        "x2",
        b.left + b.width / 2 - boardRect.left
      );

      line.setAttribute(
        "y2",
        b.top + b.height / 2 - boardRect.top
      );

      line.setAttribute("stroke", "#ad795b");
      line.setAttribute("stroke-width", "2");

      svg.appendChild(line);
    }

    lastCardByTopic.set(topic, card);
  });
}

// =====================================================
// RESIZE HANDLING
// =====================================================

window.addEventListener("resize", drawConnections);

// =====================================================
// INITIALIZATION
// =====================================================

buildRound();
renderQuestion();
renderPins();

console.info("Historical investigation game initialized.");
console.info("Agencies:", agencyNames);
console.info("Total questions:", questionBank.length);
console.info("Questions per agency:",
  Object.fromEntries(
    agencyNames.map(agency => [
      agency,
      questionBank.filter(q => q.agency === agency).length
    ])
  )
);
