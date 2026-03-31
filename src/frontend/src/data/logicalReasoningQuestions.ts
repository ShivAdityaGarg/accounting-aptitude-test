import type { Question } from "./accountingQuestions";

export const LOGICAL_REASONING_BANK: Question[] = [
  // --- NUMBER SERIES ---
  {
    questionText:
      "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
    options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
    options: ["7", "10", "12", "13"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
    options: ["20", "22", "23", "26"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?",
    options: ["22", "24", "25", "26"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?",
    options: ["12", "14", "27", "53"],
    correctAnswerIndex: 1,
  },

  // --- MATCHING DEFINITIONS ---
  {
    questionText:
      "Applying for Seasonal Employment occurs when a person requests to be considered for a job that is dependent on a particular season or time of year. Which situation below is the best example of Applying for Seasonal Employment?",
    options: [
      "The ski instructors at Top of the Peak Ski School work from December through March.",
      "Matthew prefers jobs that allow him to work outdoors.",
      "Lucinda makes an appointment with the beach resort restaurant manager to interview for the summer waitressing position that was advertised in the newspaper.",
      "Doug's ice cream shop stays open until 11 p.m. during the summer months.",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Violating an Apartment Lease occurs when a tenant does something prohibited by the legally binding document that he or she has signed with a landlord. Which situation below is the best example of Violating an Apartment Lease?",
    options: [
      "Tim has decided to move to another city, so he calls his landlord to tell him that he is not interested in renewing his lease when it expires next month.",
      "Valerie recently lost her job and, for the last three months, has neglected to pay her landlord the monthly rent they agreed upon in writing when she moved into her apartment eight months ago.",
      "Mark writes a letter to his landlord that lists numerous complaints about the apartment he has agreed to rent for two years.",
      "Leslie thinks that her landlord is neglecting the building in which she rents an apartment. She calls her attorney to ask for advice.",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "An Informal Gathering occurs when a group of people get together in a casual, relaxed manner. Which situation below is the best example of an Informal Gathering?",
    options: [
      "The book club meets on the first Thursday evening of every month.",
      "After finding out about his promotion, Jeremy and a few coworkers decide to go out for a quick drink after work.",
      "Mary sends out 25 invitations for the bridal shower she is giving for her sister.",
      "Whenever she eats at the Mexican restaurant, Clara seems to run into Peter.",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "People speculate when they consider a situation and assume something to be true based on inconclusive evidence. Which situation below is the best example of Speculation?",
    options: [
      "Francine decides that it would be appropriate to wear jeans to her new office on Friday after reading about 'Casual Fridays' in her employee handbook.",
      "Mary spends thirty minutes sitting in traffic and wishes that she took the train instead of driving.",
      "After consulting several guidebooks and her travel agent, Jennifer feels confident that the hotel she has chosen is first-rate.",
      "When Emily opens the door in tears, Theo guesses that she's had a death in her family.",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Posthumous Publication occurs when a book is published after the author's death. Which situation below is the best example of Posthumous Publication?",
    options: [
      "Richard's illness took his life before he was able to enjoy the amazing early reviews of his novel.",
      "Melissa's publisher cancels her book contract after she fails to deliver the manuscript on time.",
      "Clarence never thought he'd live to see the third book in his trilogy published.",
      "Elizabeth is honored with a prestigious literary award for her writing career and her daughter accepts the award on behalf of her deceased mother.",
    ],
    correctAnswerIndex: 0,
  },

  // --- VERBAL REASONING ---
  {
    questionText:
      "Vincent has a paper route. Each morning, he delivers 37 newspapers to customers in his neighborhood. It takes Vincent 50 minutes to deliver all the papers. If Vincent is sick or has other plans, his friend Thomas, who lives on the same street, will sometimes deliver the papers for him. Which of the following must be true?",
    options: [
      "Vincent and Thomas live in the same neighborhood.",
      "It takes Thomas more than 50 minutes to deliver the papers.",
      "It is dark outside when Vincent begins his deliveries.",
      "Thomas would like to have his own paper route.",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "The Pacific yew is an evergreen tree that grows in the Pacific Northwest. The Pacific yew has a fleshy, poisonous fruit. Recently, taxol, a substance found in the bark of the Pacific yew, was discovered to be a promising new anticancer drug. Which of the following must be true?",
    options: [
      "Taxol is poisonous when taken by healthy people.",
      "Taxol has cured people from various diseases.",
      "People should not eat the fruit of the Pacific yew.",
      "The Pacific yew was considered worthless until taxol was discovered.",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Erin is twelve years old. For three years, she has been asking her parents for a dog. Her parents have told her that they believe a dog would not be happy in an apartment, but they have given her permission to have a bird. Erin has not yet decided what kind of bird she would like to have. Which of the following must be true?",
    options: [
      "Erin's parents like birds better than they like dogs.",
      "Erin does not like birds.",
      "Erin and her parents live in an apartment.",
      "Erin and her parents would like to move.",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Tim's commute never bothered him because there were always seats available on the train and he was able to spend his 40 minutes comfortably reading the newspaper or catching up on paperwork. Ever since the train schedule changed, the train has been extremely crowded, and by the time the doors open at his station, there isn't a seat to be found. Which of the following must be true?",
    options: [
      "Tim would be better off taking the bus to work.",
      "Tim's commute is less comfortable since the train schedule changed.",
      "Many commuters will complain about the new train schedule.",
      "Tim will likely look for a new job closer to home.",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "When they heard news of the hurricane, Maya and Julian decided to change their vacation plans. Instead of traveling to the island beach resort, they booked a room at a fancy new spa in the mountains. Their plans were a bit more expensive, but they'd heard wonderful things about the spa and they were relieved to find availability on such short notice. Which of the following must be true?",
    options: [
      "Maya and Julian take beach vacations every year.",
      "The spa is overpriced.",
      "It is usually necessary to book at least six months in advance at the spa.",
      "Maya and Julian decided to change their vacation plans because of the hurricane.",
    ],
    correctAnswerIndex: 3,
  },

  // --- CAUSE AND EFFECT SECTION 1 ---
  {
    questionText:
      "Statements:\nI: The prices of petrol and diesel in the domestic market have remained unchanged for the past few months.\nII: The crude oil prices in the international market have gone up substantially in the last few months.\n\nWhich of the following correctly describes the relationship?",
    options: [
      "Statement I is the cause and statement II is its effect",
      "Statement II is the cause and statement I is its effect",
      "Both the statements I and II are independent causes",
      "Both the statements I and II are effects of independent causes",
      "Both the statements I and II are effects of some common cause",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Statements:\nI: The government has recently fixed the fees for professional courses offered by the unaided institutions which are much lower than the fees charged last year.\nII: The parents of the aspiring students launched a severe agitation last year protesting against the high fees charged by the unaided institutions.\n\nWhich of the following correctly describes the relationship?",
    options: [
      "Statement I is the cause and statement II is its effect",
      "Statement II is the cause and statement I is its effect",
      "Both the statements I and II are independent causes",
      "Both the statements I and II are effects of independent causes",
      "Both the statements I and II are effects of some common cause",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Statements:\nI: The Reserve Bank of India has recently put restrictions on few small banks in the country.\nII: The small banks in the private and co-operative sector in India are not in a position to withstand the competition of the bigger banks in the public sector.\n\nWhich of the following correctly describes the relationship?",
    options: [
      "Statement I is the cause and statement II is its effect",
      "Statement II is the cause and statement I is its effect",
      "Both the statements I and II are independent causes",
      "Both the statements I and II are effects of independent causes",
      "Both the statements I and II are effects of some common cause",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Statements:\nI: All the schools in the area had to be kept closed for most part of the week.\nII: Many parents have withdrawn their children from the local schools.\n\nWhich of the following correctly describes the relationship?",
    options: [
      "Statement I is the cause and statement II is its effect",
      "Statement II is the cause and statement I is its effect",
      "Both the statements I and II are independent causes",
      "Both the statements I and II are effects of independent causes",
      "Both the statements I and II are effects of some common cause",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Statements:\nI: India has surpassed the value of tea exports this year over all the earlier years due to an increase in demand for quality tea in the European market.\nII: There is an increase in demand of coffee in the domestic market during the last two years.\n\nWhich of the following correctly describes the relationship?",
    options: [
      "Statement I is the cause and statement II is its effect",
      "Statement II is the cause and statement I is its effect",
      "Both the statements I and II are independent causes",
      "Both the statements I and II are effects of independent causes",
      "Both the statements I and II are effects of some common cause",
    ],
    correctAnswerIndex: 2,
  },

  // --- ARTIFICIAL LANGUAGE TYPE 1 ---
  {
    questionText:
      "Here are some words translated from an artificial language.\ngorblflur means fan belt\npixngorbl means ceiling fan\narthtusl means tile roof\nWhich word could mean 'ceiling tile'?",
    options: ["gorbltusl", "flurgorbl", "arthflur", "pixnarth"],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Here are some words translated from an artificial language.\nhapllesh means cloudburst\nsrenchoch means pinball\nresbosrench means ninepin\nWhich word could mean 'cloud nine'?",
    options: ["leshsrench", "ochhapl", "haploch", "haplresbo"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Here are some words translated from an artificial language.\nagnoscrenia means poisonous spider\ndelanocrenia means poisonous snake\nagnosdeery means brown spider\nWhich word could mean 'black widow spider'?",
    options: [
      "deeryclostagnos",
      "agnosdelano",
      "agnosvitriblunin",
      "trymuttiagnos",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Here are some words translated from an artificial language.\nmoolokarn means blue sky\nwilkospadi means bicycle race\nmoolowilko means blue bicycle\nWhich word could mean 'racecar'?",
    options: ["wilkozwet", "spadivilko", "moolobreil", "spadivolo"],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Here are some words translated from an artificial language.\nmigenlasan means cupboard\nlasanpoen means boardwalk\ncuopdansa means pullman\nWhich word could mean 'walkway'?",
    options: ["poenmigen", "cuopeisel", "lasandansa", "poenforc"],
    correctAnswerIndex: 0,
  },

  // --- ARTIFICIAL LANGUAGE TYPE 2 ---
  {
    questionText:
      "Here are some words translated from an artificial language.\ngemolinea means fair warning\ngerimitu means report card\ngilageri means weather report\nWhich word could mean 'fair weather'?",
    options: ["gemogila", "gerigeme", "gemomitu", "gerimita"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Here are some words translated from an artificial language.\nslar means jump\nslary means jumping\nslarend means jumped\nWhich word could mean 'playing'?",
    options: ["clargslarend", "clargy", "ellaclarg", "slarmont"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Here are some words translated from an artificial language.\njalkamofti means happy birthday\nmoftihoze means birthday party\nmentogunn means goodness\nWhich word could mean 'happiness'?",
    options: ["jalkagunn", "mentohoze", "moftihoze", "hozemento"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Here are some words translated from an artificial language.\nplekapaki means fruitcake\npakishillen means cakewalk\ntreftalan means buttercup\nWhich word could mean 'cupcake'?",
    options: ["shillenalan", "treftpleka", "pakitreft", "alanpaki"],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Here are some words translated from an artificial language.\nmalgauper means peach cobbler\nmalgaport means peach juice\nmoggagrop means apple jelly\nWhich word could mean 'apple juice'?",
    options: ["moggaport", "malgaauper", "gropport", "moggagrop"],
    correctAnswerIndex: 0,
  },

  // --- LOGICAL PROBLEMS TYPE 1 ---
  {
    questionText:
      "Tanya is older than Eric. Cliff is older than Tanya. Eric is older than Cliff. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Blueberries cost more than strawberries. Blueberries cost less than raspberries. Raspberries cost more than strawberries and blueberries. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "All the trees in the park are flowering trees. Some of the trees in the park are dogwoods. All dogwoods in the park are flowering trees. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Mara runs faster than Gail. Lily runs faster than Mara. Gail runs faster than Lily. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Apartments in the Riverdale Manor cost less than apartments in The Gaslight Commons. Apartments in the Livingston Gate cost more than apartments in The Gaslight Commons. Of the three apartment buildings, the Livingston Gate costs the most. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 0,
  },

  // --- LOGICAL PROBLEMS TYPE 2 ---
  {
    questionText:
      "A fruit basket contains more apples than lemons. There are more lemons in the basket than there are oranges. The basket contains more apples than oranges. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "The Shop and Save Grocery is south of Greenwood Pharmacy. Rebecca's house is northeast of Greenwood Pharmacy. Rebecca's house is west of the Shop and Save Grocery. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Joe is younger than Kathy. Mark was born after Joe. Kathy is older than Mark. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "On the day the Barton triplets are born, Jenna weighs more than Jason. Jason weighs less than Jasmine. Of the three babies, Jasmine weighs the most. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "The temperature on Monday was lower than on Tuesday. The temperature on Wednesday was lower than on Tuesday. The temperature on Monday was higher than on Wednesday. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 2,
  },

  // --- LOGICAL PROBLEMS TYPE 3 ---
  {
    questionText:
      "All Lamels are Signots with buttons. No yellow Signots have buttons. No Lamels are yellow. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "The hotel is two blocks east of the drugstore. The market is one block west of the hotel. The drugstore is west of the market. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "A toothpick is useful. Useful things are valuable. A toothpick is valuable. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Tom puts on his socks before he puts on his shoes. He puts on his shirt before he puts on his jacket. Tom puts on his shoes before he puts on his shirt. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Three pencils cost the same as two erasers. Four erasers cost the same as one ruler. Pencils are more expensive than rulers. If the first two statements are true, the third statement is:",
    options: ["True", "False", "Uncertain"],
    correctAnswerIndex: 1,
  },

  // --- LOGICAL PROBLEMS TYPE 4 ---
  {
    questionText:
      "Fact 1: All dogs like to run. Fact 2: Some dogs like to swim. Fact 3: Some dogs look like their masters. If the first three statements are facts, which of the following statements must also be a fact?\n\nI: All dogs who like to swim look like their masters.\nII: Dogs who like to swim also like to run.\nIII: Dogs who like to run do not look like their masters.",
    options: [
      "I only",
      "II only",
      "II and III only",
      "None of the statements is a known fact",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Fact 1: Jessica has four children. Fact 2: Two of the children have blue eyes and two of the children have brown eyes. Fact 3: Half of the children are girls. If the first three statements are facts, which of the following statements must also be a fact?\n\nI: At least one girl has blue eyes.\nII: Two of the children are boys.\nIII: The boys have brown eyes.",
    options: [
      "I only",
      "II only",
      "II and III only",
      "None of the statements is a known fact",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Fact 1: All drink mixes are beverages. Fact 2: All beverages are drinkable. Fact 3: Some beverages are red. If the first three statements are facts, which of the following statements must also be a fact?\n\nI: Some drink mixes are red.\nII: All beverages are drink mixes.\nIII: All red drink mixes are drinkable.",
    options: ["I and II only", "II only", "I and III only", "III only"],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Fact 1: All chickens are birds. Fact 2: Some chickens are hens. Fact 3: Female birds lay eggs. If the first three statements are facts, which of the following statements must also be a fact?\n\nI: All birds lay eggs.\nII: Some Hens are birds.\nIII: Some chickens are not hens.",
    options: [
      "I only",
      "II only",
      "II and III only",
      "None of the statements is a known fact",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Fact 1: All hats have brims. Fact 2: There are black hats and blue hats. Fact 3: Baseball caps are hats. If the first three statements are facts, which of the following statements must also be a fact?\n\nI: All caps have brims.\nII: Some baseball caps are blue.\nIII: Baseball caps have no brims.",
    options: [
      "I only",
      "II only",
      "II and III only",
      "None of the statements is a known fact",
    ],
    correctAnswerIndex: 3,
  },

  // --- LOGICAL PROBLEMS TYPE 5 ---
  {
    questionText:
      "Four defensive football players are chasing the opposing wide receiver, who has the ball. Calvin is directly behind the ball carrier. Jenkins and Burton are side by side behind Calvin. Zeller is behind Jenkins and Burton. Calvin tries for the tackle but misses and falls. Burton trips. Which defensive player tackles the receiver?",
    options: ["Burton", "Zeller", "Jenkins", "Calvin"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "A four-person crew from Classic Colors is painting Mr. Field's house. Michael is painting the front of the house. Ross is in the alley behind the house painting the back. Jed is painting the window frames on the north side, Shawn is on the south. If Michael switches places with Jed, and Jed then switches places with Shawn, where is Shawn?",
    options: [
      "In the alley behind the house",
      "On the north side of the house",
      "In front of the house",
      "On the south side of the house",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "In a four-day period Monday through Thursday each of the following temporary office workers worked only one day, each a different day. Ms. Johnson was scheduled to work on Monday, but she traded with Mr. Carter, who was originally scheduled to work on Wednesday. Ms. Falk traded with Mr. Kirk, who was originally scheduled to work on Thursday. After all the switching was done, who worked on Tuesday?",
    options: ["Mr. Carter", "Ms. Falk", "Ms. Johnson", "Mr. Kirk"],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Four people witnessed a mugging. Each gave a different description of the mugger. Which description is most likely to be correct?\nWitness 1: Average height, thin, middle-aged.\nWitness 2: Tall, thin, middle-aged.\nWitness 3: Tall, thin, young.\nWitness 4: Tall, average weight, middle-aged.",
    options: [
      "Average height, thin, and middle-aged",
      "Tall, thin, and middle-aged",
      "Tall, thin, and young",
      "Tall, of average weight, and middle-aged",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Ms. Forest likes to let her students choose who their partners will be; however, no pair of students may work together more than seven class periods in a row. Adam and Baxter have studied together seven class periods in a row. Carter and Dennis have worked together three class periods in a row. Carter does not want to work with Adam. Who should be assigned to work with Baxter?",
    options: ["Carter", "Adam", "Dennis", "Forest"],
    correctAnswerIndex: 0,
  },

  // --- COURSE OF ACTION SECTION 1 ---
  {
    questionText:
      "Statement: A large number of people in ward X of the city are diagnosed to be suffering from a fatal malaria type.\n\nCourses of Action:\nI: The city municipal authority should take immediate steps to carry out extensive fumigation in ward X.\nII: The people in the area should be advised to take steps to avoid mosquito bites.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 4,
  },
  {
    questionText:
      "Statement: Severe drought is reported to have set in several parts of the country.\n\nCourses of Action:\nI: Government should immediately make arrangement for providing financial assistance to those affected.\nII: Food, water and fodder should immediately be sent to all these areas to save the people and cattle.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Statement: Since its launching in 1981, Vayudoot has so far accumulated losses amounting to Rs 153 crore.\n\nCourses of Action:\nI: Vayudoot should be directed to reduce wasteful expenditure and to increase passenger fare.\nII: An amount of about Rs 300 crore should be provided to Vayudoot to make the airliner economically viable.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Statement: Exporters in the capital are alleging that commercial banks are violating a Reserve Bank of India directive to operate a post shipment export credit denominated in foreign currency at international rates from January this year.\n\nCourses of Action:\nI: The officers concerned in the commercial banks are to be suspended.\nII: The RBI should be asked to stop giving such directives to commercial banks.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Statement: A large number of people die every year due to drinking polluted water during the summer.\n\nCourses of Action:\nI: The government should make adequate arrangements to provide safe drinking water to all its citizens.\nII: The people should be educated about the dangers of drinking polluted water.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 4,
  },

  // --- COURSE OF ACTION SECTION 2 ---
  {
    questionText:
      "Statement: The Secretary lamented that the electronic media was losing its credibility and that it should try to regain it by establishing better communications with the listeners and the viewers. He also emphasised the need for training to improve the functioning.\n\nCourses of Action:\nI: Efforts should be made to get organised feedback on the programme.\nII: The critical areas in which the staff requires training should be identified.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 4,
  },
  {
    questionText:
      "Statement: Courts take too long in deciding important disputes of various departments.\n\nCourses of Action:\nI: Courts should be ordered to speed up matters.\nII: Special powers should be granted to officers to settle disputes concerning their department.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 4,
  },
  {
    questionText:
      "Statement: Certain mining industries in Gujarat may come to a standstill because of the notification issued by the Department of Environment and Forest banning mining operations and industries alike within 25 kms of National Park, the game sanctuary and reserve forest areas.\n\nCourses of Action:\nI: The Department should be asked to immediately withdraw the notification.\nII: The Government should make effort to shift the parks, sanctuaries and reserve forests to other non-mining areas.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Statement: There have been many instances of derailment of trains due to landslide in the hilly areas which caused loss of many lives.\n\nCourses of Action:\nI: The railway authority should arrange to deploy pilot engines before the movement of passenger trains in the hilly areas to alert the trains in case of any landslide.\nII: The railway authority should strengthen the hill slopes by putting iron meshes so that the loose boulders do not fall on the track.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Statement: India today is midstream in its demographic transaction. In the last 60 years there has been an almost continuous decline in mortality; while fertility has declined over the last 20 years. The consequence is that there has been a rapid growth in population over the last 50 years.\n\nCourses of Action:\nI: India should immediately revitalise its family planning programme.\nII: The Government should immediately launch a massive education programme through mass media highlighting the implication of population growth at the present rate.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow",
    ],
    correctAnswerIndex: 4,
  },

  // --- COURSE OF ACTION SECTION 3 ---
  {
    questionText:
      "Statement: The weather bureau has through a recent bulletin forecast heavy rainfall during the next week which may cause water logging in several parts of the city.\n\nCourses of Action:\nI: The bulletin should be given wide publicity through the mass media.\nII: The civic authority should keep in readiness the pumping system for removal of water from these parts.\nIII: The people should be advised to stay indoors during the period.\n\nWhich course(s) of action follow?",
    options: [
      "None follows",
      "Only I and II follow",
      "Only II follows",
      "Only II and III follow",
      "None of these",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Statement: A train derailed near a station while moving over a bridge and fell into a river, resulting in the death of 65 people.\n\nCourses of Action:\nI: The Railway Authorities should clarify the reason of the accident to the Government.\nII: The Government should allocate funds to compensate the destruction caused.\nIII: The protection walls of the bridge should be made strong enough to avoid such accidents.\n\nWhich course(s) of action follow?",
    options: [
      "Only I and II follow",
      "Only II and III follow",
      "Only III follows",
      "All follow",
      "None of these",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Statement: Poverty is increasing because the people, who are deciding how to tackle it, know absolutely nothing about the poor.\n\nCourses of Action:\nI: The decision makers should go to the grass root levels.\nII: The decision makers should come from the poorer sections of the society.\nIII: A new set of decision makers should replace the existing one.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Only either I or III follows",
      "All follow",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Statement: Besides looks and appearances, it is also important to develop oneself from within.\n\nCourses of Action:\nI: One should not pay attention to fashion.\nII: One should pay attention to fashion.\nIII: Books on self-development should be encouraged.\n\nWhich course(s) of action follow?",
    options: [
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only I and III follow",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Statement: There is an unprecedented increase in the production of wheat this kharif season in most parts of the country.\n\nCourses of Action:\nI: The government should immediately lower down the procurement price of wheat.\nII: The farmers should be asked to store the excess produces with themselves to be used for future.\nIII: The government should make its best efforts to export wheat to augment its presence in international market.\n\nWhich course(s) of action follow?",
    options: [
      "Only I and II follow",
      "Only II and III follow",
      "Only I and III follow",
      "All follow",
      "None of these",
    ],
    correctAnswerIndex: 4,
  },

  // --- NON-VERBAL REASONING - SECTION 1 ---
  {
    questionText:
      "Find out which of the figures (1), (2), (3) and (4) can be formed from the pieces given in figure (X).",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/2.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Find out which of the figures (1), (2), (3) and (4) can be formed from the pieces given in figure (X).",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/11.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Find out which of the figures (1), (2), (3) and (4) can be formed from the pieces given in figure (X).",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/12.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Find out which of the figures (1), (2), (3) and (4) can be formed from the pieces given in figure (X).",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/3.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Find out which of the figures (1), (2), (3) and (4) can be formed from the pieces given in figure (X).",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/4.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 0,
  },

  // --- NON-VERBAL REASONING - SECTION 2 ---
  {
    questionText:
      "Select the alternative in which the specified components of the key figure (X) are found.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/32.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Select the alternative in which the specified components of the key figure (X) are found.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/25.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Select the alternative in which the specified components of the key figure (X) are found.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/29.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Select the alternative in which the specified components of the key figure (X) are found.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/30.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Select the alternative in which the specified components of the key figure (X) are found.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/27.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1,
  },

  // --- NON-VERBAL REASONING - SECTION 3 ---
  {
    questionText:
      "Find out how will the key figure (X) look like after rotation.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/44.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Find out how will the key figure (X) look like after rotation.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/47.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Find out how will the key figure (X) look like after rotation.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/42.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Find out how will the key figure (X) look like after rotation.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/36.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Find out how will the key figure (X) look like after rotation.",
    imageUrl:
      "https://www.indiabix.com/_files/images/non-verbal-reasoning/image-analysis/37.png",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 0,
  },
];

export function pickRandomLogicalQuestions(count: number): Question[] {
  const pool = [...LOGICAL_REASONING_BANK];
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
