// src/fiaData.js - FIA UDC/LDC Past Papers (231 MCQs)
const quizData = {
  title: "FIA UDC / LDC Preparation - Past Papers",
  description: "Most Repeated MCQs from FIA UDC/LDC & Federal Exams (231 Questions)",
  questions: [
    // ============ PAPER SET 1 — STYLE OF 2023 PAPER ============
    {
      question: "Who is the founder of Pakistan?",
      options: ["Iqbal", "Liaquat", "Quaid-e-Azam", "Sir Syed"],
      correctAnswer: 2,
      explanation: "Quaid-e-Azam Muhammad Ali Jinnah is the founder of Pakistan."
    },
    {
      question: "When did Pakistan come into being?",
      options: ["23 Mar 1940", "15 Aug 1947", "14 Aug 1947", "11 Sep 1948"],
      correctAnswer: 2,
      explanation: "Pakistan came into being on 14 August 1947."
    },
    {
      question: "Who was the first PM of Pakistan?",
      options: ["Nazimuddin", "Bogra", "Liaquat Ali Khan", "Ali"],
      correctAnswer: 2,
      explanation: "Liaquat Ali Khan was the first Prime Minister of Pakistan."
    },
    {
      question: "Currency of Saudi Arabia is:",
      options: ["Dirham", "Dinar", "Riyal", "Pound"],
      correctAnswer: 2,
      explanation: "The currency of Saudi Arabia is Riyal."
    },
    {
      question: "Capital of Australia:",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: 2,
      explanation: "Canberra is the capital of Australia."
    },
    {
      question: "Synonym of ABATE:",
      options: ["Increase", "Continue", "Decrease", "Maintain"],
      correctAnswer: 2,
      explanation: "Abate means to decrease or reduce in intensity."
    },
    {
      question: "Antonym of CONCEAL:",
      options: ["Hide", "Cover", "Reveal", "Mask"],
      correctAnswer: 2,
      explanation: "Conceal means to hide; its antonym is reveal."
    },
    {
      question: "I have been working ____ morning.",
      options: ["for", "from", "since", "by"],
      correctAnswer: 2,
      explanation: "'Since' is used with a specific point in time."
    },
    {
      question: "Plural of 'crisis':",
      options: ["crisises", "crisi", "crises", "crisis"],
      correctAnswer: 2,
      explanation: "The plural of 'crisis' is 'crises'."
    },
    {
      question: "Pakistan's national flower:",
      options: ["Rose", "Tulip", "Jasmine", "Sunflower"],
      correctAnswer: 2,
      explanation: "Jasmine is the national flower of Pakistan."
    },
    {
      question: "First Caliph of Islam:",
      options: ["Umar", "Usman", "Abu Bakr", "Ali"],
      correctAnswer: 2,
      explanation: "Hazrat Abu Bakr (RA) was the first Caliph of Islam."
    },
    {
      question: "Total Surahs in Holy Quran:",
      options: ["100", "110", "114", "120"],
      correctAnswer: 2,
      explanation: "The Holy Quran has 114 Surahs."
    },
    {
      question: "Salat is mentioned in Quran ___ times:",
      options: ["50", "100", "500", "more than 700"],
      correctAnswer: 3,
      explanation: "Salat is mentioned more than 700 times in the Quran."
    },
    {
      question: "FIA was established in:",
      options: ["1971", "1973", "1974", "1976"],
      correctAnswer: 2,
      explanation: "FIA (Federal Investigation Agency) was established in 1974."
    },
    {
      question: "FIA stands for:",
      options: ["Federal Inquiry Agency", "Federation Investigators", "Federal Investigation Agency", "Federal Internal Agency"],
      correctAnswer: 2,
      explanation: "FIA stands for Federal Investigation Agency."
    },
    {
      question: "PECA stands for:",
      options: ["Pak Electronic Crime Act", "Public Electronic Cyber Act", "Prevention of Electronic Crimes Act", "None"],
      correctAnswer: 2,
      explanation: "PECA stands for Prevention of Electronic Crimes Act."
    },
    {
      question: "PECA was passed in:",
      options: ["2014", "2018", "2016", "2020"],
      correctAnswer: 2,
      explanation: "PECA was passed in 2016."
    },
    {
      question: "Cyber crime wing of FIA is:",
      options: ["NACTA", "ANF", "NR3C", "IB"],
      correctAnswer: 2,
      explanation: "NR3C is the cyber crime wing of FIA."
    },
    {
      question: "20% of 200 =",
      options: ["20", "30", "40", "50"],
      correctAnswer: 2,
      explanation: "20% of 200 = 200 × 20/100 = 40."
    },
    {
      question: "If CP=100, SP=120, profit% =",
      options: ["10%", "15%", "20%", "25%"],
      correctAnswer: 2,
      explanation: "Profit% = (SP-CP)/CP × 100 = (120-100)/100 × 100 = 20%."
    },
    {
      question: "Average of 5,10,15:",
      options: ["8", "12", "10", "15"],
      correctAnswer: 2,
      explanation: "Average = (5+10+15)/3 = 30/3 = 10."
    },
    {
      question: "Square root of 144:",
      options: ["10", "14", "12", "16"],
      correctAnswer: 2,
      explanation: "√144 = 12."
    },
    {
      question: "CPU stands for:",
      options: ["Computer Personal Unit", "Central Print Unit", "Central Processing Unit", "Computer Power Unit"],
      correctAnswer: 2,
      explanation: "CPU stands for Central Processing Unit."
    },
    {
      question: "1 Byte = ___ bits:",
      options: ["4", "16", "8", "32"],
      correctAnswer: 2,
      explanation: "1 Byte = 8 bits."
    },
    {
      question: "WWW invented by:",
      options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"],
      correctAnswer: 2,
      explanation: "Tim Berners-Lee invented the World Wide Web."
    },
    {
      question: "Father of computer:",
      options: ["Bill Gates", "Newton", "Charles Babbage", "Einstein"],
      correctAnswer: 2,
      explanation: "Charles Babbage is known as the father of computer."
    },
    {
      question: "Vitamin C deficiency causes:",
      options: ["Night blindness", "Rickets", "Scurvy", "Beriberi"],
      correctAnswer: 2,
      explanation: "Vitamin C deficiency causes scurvy."
    },
    {
      question: "Number of bones in adult human:",
      options: ["200", "210", "206", "220"],
      correctAnswer: 2,
      explanation: "An adult human has 206 bones."
    },
    {
      question: "Speed of light:",
      options: ["3×10^6 m/s", "3×10^5 km/s", "3×10^8 m/s", "Both A and C"],
      correctAnswer: 3,
      explanation: "Speed of light is 3×10^8 m/s and also 3×10^5 km/s."
    },
    {
      question: "Symbol of gold:",
      options: ["Go", "Ag", "Au", "Gd"],
      correctAnswer: 2,
      explanation: "The chemical symbol of gold is Au."
    },
    // ============ PAPER SET 2 — STYLE OF 2022 PAPER ============
    {
      question: "Capital of Pakistan:",
      options: ["Karachi", "Lahore", "Islamabad", "Pindi"],
      correctAnswer: 2,
      explanation: "Islamabad is the capital of Pakistan."
    },
    {
      question: "Pakistan's national language:",
      options: ["Punjabi", "English", "Urdu", "Sindhi"],
      correctAnswer: 2,
      explanation: "Urdu is the national language of Pakistan."
    },
    {
      question: "Largest province by area:",
      options: ["Punjab", "Sindh", "Balochistan", "KP"],
      correctAnswer: 2,
      explanation: "Balochistan is the largest province by area."
    },
    {
      question: "Most populous province:",
      options: ["Sindh", "KP", "Punjab", "Balochistan"],
      correctAnswer: 2,
      explanation: "Punjab is the most populous province of Pakistan."
    },
    {
      question: "Highest peak in Pakistan:",
      options: ["Nanga Parbat", "Tirich Mir", "K2", "Rakaposhi"],
      correctAnswer: 2,
      explanation: "K2 is the highest peak in Pakistan (8,611 m)."
    },
    {
      question: "Longest river of Pakistan:",
      options: ["Jhelum", "Chenab", "Indus", "Ravi"],
      correctAnswer: 2,
      explanation: "The Indus River is the longest river of Pakistan."
    },
    {
      question: "Quaid-e-Azam was born on:",
      options: ["11 Sep 1876", "14 Aug 1876", "25 Dec 1876", "23 Mar 1876"],
      correctAnswer: 2,
      explanation: "Quaid-e-Azam was born on 25 December 1876."
    },
    {
      question: "Allama Iqbal was born in:",
      options: ["Lahore", "Karachi", "Sialkot", "Multan"],
      correctAnswer: 2,
      explanation: "Allama Iqbal was born in Sialkot."
    },
    {
      question: "Lahore Resolution passed on:",
      options: ["14 Aug 1940", "23 Mar 1947", "23 Mar 1940", "23 Mar 1956"],
      correctAnswer: 2,
      explanation: "The Lahore Resolution was passed on 23 March 1940."
    },
    {
      question: "First Constitution of Pakistan:",
      options: ["1962", "1973", "1956", "1947"],
      correctAnswer: 2,
      explanation: "The first Constitution of Pakistan was promulgated in 1956."
    },
    {
      question: "Synonym of BENEVOLENT:",
      options: ["Cruel", "Selfish", "Kind", "Greedy"],
      correctAnswer: 2,
      explanation: "Benevolent means kind and generous."
    },
    {
      question: "Antonym of HUMBLE:",
      options: ["Modest", "Shy", "Proud", "Low"],
      correctAnswer: 2,
      explanation: "Humble means modest; its antonym is proud."
    },
    {
      question: "He died ____ cholera:",
      options: ["from", "by", "of", "with"],
      correctAnswer: 2,
      explanation: "'Died of' is used for diseases."
    },
    {
      question: "'A bolt from the blue' means:",
      options: ["Expected", "Cloudy", "Sudden surprise", "Bright"],
      correctAnswer: 2,
      explanation: "'A bolt from the blue' means a sudden and unexpected event."
    },
    {
      question: "Total Pillars of Islam:",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
      explanation: "There are 5 pillars of Islam."
    },
    {
      question: "Total daily prayers:",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
      explanation: "There are 5 daily prayers in Islam."
    },
    {
      question: "Number of Rakats in Fajr (Farz):",
      options: ["3", "4", "2", "5"],
      correctAnswer: 2,
      explanation: "Fajr has 2 Farz Rakats."
    },
    {
      question: "Hijrat to Madina took place in:",
      options: ["620", "625", "622", "630"],
      correctAnswer: 2,
      explanation: "The Hijrat to Madina took place in 622 AD."
    },
    {
      question: "Battle of Badr was fought in:",
      options: ["3 AH", "5 AH", "2 AH", "8 AH"],
      correctAnswer: 2,
      explanation: "The Battle of Badr was fought in 2 AH."
    },
    {
      question: "Capital of Turkey:",
      options: ["Istanbul", "Izmir", "Ankara", "Bursa"],
      correctAnswer: 2,
      explanation: "Ankara is the capital of Turkey."
    },
    {
      question: "Currency of Japan:",
      options: ["Won", "Yuan", "Yen", "Ringgit"],
      correctAnswer: 2,
      explanation: "The currency of Japan is Yen."
    },
    {
      question: "UN HQ is located in:",
      options: ["Geneva", "Paris", "New York", "London"],
      correctAnswer: 2,
      explanation: "The UN headquarters is in New York, USA."
    },
    {
      question: "OIC HQ is in:",
      options: ["Riyadh", "Cairo", "Jeddah", "Tehran"],
      correctAnswer: 2,
      explanation: "The OIC headquarters is in Jeddah, Saudi Arabia."
    },
    {
      question: "SAARC HQ is in:",
      options: ["Dhaka", "Islamabad", "Kathmandu", "Delhi"],
      correctAnswer: 2,
      explanation: "The SAARC headquarters is in Kathmandu, Nepal."
    },
    {
      question: "Father of nuclear program of Pakistan:",
      options: ["Munir Khan", "Dr Samar", "Dr A.Q. Khan", "Salam"],
      correctAnswer: 2,
      explanation: "Dr. Abdul Qadeer Khan is the father of Pakistan's nuclear program."
    },
    {
      question: "Pakistan conducted nuclear tests on:",
      options: ["30 May 1998", "11 May 1998", "28 May 1998", "14 Aug 1998"],
      correctAnswer: 2,
      explanation: "Pakistan conducted nuclear tests on 28 May 1998."
    },
    {
      question: "RAM stands for:",
      options: ["Read Access Memory", "Run Access Memory", "Random Access Memory", "Rapid Access"],
      correctAnswer: 2,
      explanation: "RAM stands for Random Access Memory."
    },
    {
      question: "Ctrl+C shortcut is used to:",
      options: ["Cut", "Paste", "Copy", "Save"],
      correctAnswer: 2,
      explanation: "Ctrl+C is used to copy selected content."
    },
    {
      question: "1 KB = ___ bytes:",
      options: ["100", "1000", "1024", "2048"],
      correctAnswer: 2,
      explanation: "1 KB = 1024 bytes."
    },
    {
      question: "Distance = Speed ×",
      options: ["force", "mass", "time", "weight"],
      correctAnswer: 2,
      explanation: "Distance = Speed × Time."
    },
    // ============ PAPER SET 3 — STYLE OF 2021 PAPER ============
    {
      question: "First Governor General of Pakistan:",
      options: ["Liaquat", "Nazimuddin", "Quaid-e-Azam", "Iskander"],
      correctAnswer: 2,
      explanation: "Quaid-e-Azam was the first Governor General of Pakistan."
    },
    {
      question: "Pakistan's capital before Islamabad:",
      options: ["Lahore", "Pindi", "Karachi", "Dhaka"],
      correctAnswer: 2,
      explanation: "Karachi was the first capital of Pakistan."
    },
    {
      question: "Capital shifted to Islamabad in:",
      options: ["1959", "1962", "1960", "1967"],
      correctAnswer: 2,
      explanation: "The capital was shifted to Islamabad in 1960."
    },
    {
      question: "Mother of the Nation:",
      options: ["Benazir", "Begum Liaquat", "Fatima Jinnah", "Begum Wali"],
      correctAnswer: 2,
      explanation: "Fatima Jinnah is known as the Mother of the Nation."
    },
    {
      question: "National poet of Pakistan:",
      options: ["Faiz", "Faraz", "Allama Iqbal", "Ghalib"],
      correctAnswer: 2,
      explanation: "Allama Iqbal is the national poet of Pakistan."
    },
    {
      question: "Highest civil award:",
      options: ["Hilal-e-Pakistan", "Sitara", "Nishan-e-Pakistan", "Tamgha"],
      correctAnswer: 2,
      explanation: "Nishan-e-Pakistan is the highest civil award."
    },
    {
      question: "Highest military award:",
      options: ["Hilal-e-Jurat", "Sitara", "Nishan-e-Haider", "Tamgha"],
      correctAnswer: 2,
      explanation: "Nishan-e-Haider is the highest military award."
    },
    {
      question: "Total Nishan-e-Haider awarded:",
      options: ["8", "10", "11", "15"],
      correctAnswer: 2,
      explanation: "Nishan-e-Haider has been awarded 11 times."
    },
    {
      question: "First Nishan-e-Haider recipient:",
      options: ["Aziz Bhatti", "Rashid Minhas", "Capt M. Sarwar", "Tufail"],
      correctAnswer: 2,
      explanation: "Captain Muhammad Sarwar was the first recipient of Nishan-e-Haider."
    },
    {
      question: "Synonym of ELOQUENT:",
      options: ["Silent", "Boring", "Fluent", "Quiet"],
      correctAnswer: 2,
      explanation: "Eloquent means fluent or persuasive in speaking."
    },
    {
      question: "Synonym of DILIGENT:",
      options: ["Lazy", "Careless", "Hardworking", "Slow"],
      correctAnswer: 2,
      explanation: "Diligent means hardworking and careful."
    },
    {
      question: "Antonym of GENUINE:",
      options: ["True", "Real", "Fake", "Honest"],
      correctAnswer: 2,
      explanation: "Genuine means real; its antonym is fake."
    },
    {
      question: "He is junior ____ me:",
      options: ["than", "from", "to", "of"],
      correctAnswer: 2,
      explanation: "Junior is followed by 'to'."
    },
    {
      question: "If I ____ a bird, I would fly:",
      options: ["am", "was", "were", "be"],
      correctAnswer: 2,
      explanation: "'Were' is used in hypothetical/subjunctive sentences."
    },
    {
      question: "Quran was first compiled by:",
      options: ["Umar", "Usman", "Abu Bakr", "Ali"],
      correctAnswer: 2,
      explanation: "Hazrat Abu Bakr (RA) first compiled the Quran."
    },
    {
      question: "Standardized Quran was finalized by:",
      options: ["Abu Bakr", "Umar", "Usman", "Ali"],
      correctAnswer: 2,
      explanation: "Hazrat Usman (RA) finalized the standardized version of the Quran."
    },
    {
      question: "Hijri calendar started by:",
      options: ["Prophet", "Abu Bakr", "Umar", "Usman"],
      correctAnswer: 2,
      explanation: "Hazrat Umar (RA) started the Hijri calendar."
    },
    {
      question: "Battle of Khandaq was suggested by:",
      options: ["Bilal", "Umar", "Salman Farsi", "Ali"],
      correctAnswer: 2,
      explanation: "Hazrat Salman Farsi suggested the Battle of Khandaq (Trench)."
    },
    {
      question: "First Mosque in Islam:",
      options: ["Nabwi", "Haram", "Quba", "Aqsa"],
      correctAnswer: 2,
      explanation: "Masjid-e-Quba was the first mosque built in Islam."
    },
    {
      question: "Largest country by area:",
      options: ["USA", "Canada", "Russia", "China"],
      correctAnswer: 2,
      explanation: "Russia is the largest country by area."
    },
    {
      question: "Smallest country in world:",
      options: ["Monaco", "Nauru", "Vatican City", "Maldives"],
      correctAnswer: 2,
      explanation: "Vatican City is the smallest country in the world."
    },
    {
      question: "Longest river in world:",
      options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
      correctAnswer: 2,
      explanation: "The Nile River is the longest river in the world."
    },
    {
      question: "Highest mountain in world:",
      options: ["K2", "Kanchenjunga", "Mount Everest", "Nanga Parbat"],
      correctAnswer: 2,
      explanation: "Mount Everest is the highest mountain in the world."
    },
    {
      question: "Suez Canal connects:",
      options: ["Atlantic-Pacific", "Black-Caspian", "Mediterranean-Red Sea", "Indian-Pacific"],
      correctAnswer: 2,
      explanation: "The Suez Canal connects the Mediterranean Sea to the Red Sea."
    },
    {
      question: "Currency of UAE:",
      options: ["Riyal", "Dinar", "Dirham", "Pound"],
      correctAnswer: 2,
      explanation: "The currency of UAE is Dirham."
    },
    {
      question: "Capital of Iran:",
      options: ["Mashad", "Isfahan", "Tehran", "Shiraz"],
      correctAnswer: 2,
      explanation: "Tehran is the capital of Iran."
    },
    {
      question: "USB stands for:",
      options: ["Universal System Bus", "Uniform Serial Bus", "Universal Serial Bus", "Unified Serial Bus"],
      correctAnswer: 2,
      explanation: "USB stands for Universal Serial Bus."
    },
    {
      question: "HTTP stands for:",
      options: ["HyperText Transfer Process", "High Transfer Tool", "HyperText Transfer Protocol", "None"],
      correctAnswer: 2,
      explanation: "HTTP stands for HyperText Transfer Protocol."
    },
    {
      question: "First electronic computer:",
      options: ["UNIVAC", "EDVAC", "ENIAC", "ABC"],
      correctAnswer: 2,
      explanation: "ENIAC was the first electronic computer."
    },
    // ============ PAPER SET 4 — STYLE OF 2020 PAPER ============
    {
      question: "Pakistan joined UN in:",
      options: ["1948", "1949", "1947", "1950"],
      correctAnswer: 2,
      explanation: "Pakistan joined the UN in 1947."
    },
    {
      question: "Objectives Resolution passed in:",
      options: ["1947", "1956", "1949", "1962"],
      correctAnswer: 2,
      explanation: "The Objectives Resolution was passed in 1949."
    },
    {
      question: "Z.A. Bhutto became PM in:",
      options: ["1971", "1977", "1973", "1979"],
      correctAnswer: 2,
      explanation: "Z.A. Bhutto became Prime Minister in 1973."
    },
    {
      question: "1973 Constitution enforced on:",
      options: ["23 Mar 1973", "10 Apr 1973", "14 Aug 1973", "1 Jan 1973"],
      correctAnswer: 2,
      explanation: "The 1973 Constitution was enforced on 14 August 1973."
    },
    {
      question: "Tashkent Declaration year:",
      options: ["1965", "1971", "1966", "1972"],
      correctAnswer: 2,
      explanation: "The Tashkent Declaration was signed in 1966."
    },
    {
      question: "Simla Agreement signed in:",
      options: ["1971", "1973", "1972", "1974"],
      correctAnswer: 2,
      explanation: "The Simla Agreement was signed in 1972."
    },
    {
      question: "Indus Waters Treaty signed in:",
      options: ["1962", "1965", "1960", "1971"],
      correctAnswer: 2,
      explanation: "The Indus Waters Treaty was signed in 1960."
    },
    {
      question: "Total seats in National Assembly:",
      options: ["272", "342", "336", "350"],
      correctAnswer: 2,
      explanation: "The National Assembly has 336 seats."
    },
    {
      question: "Total seats in Senate:",
      options: ["96", "104", "100", "108"],
      correctAnswer: 2,
      explanation: "The Senate has 104 seats."
    },
    {
      question: "Term of National Assembly:",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
      explanation: "The National Assembly term is 5 years."
    },
    {
      question: "Synonym of CANDID:",
      options: ["Hidden", "Shy", "Frank", "Rude"],
      correctAnswer: 2,
      explanation: "Candid means frank and honest."
    },
    {
      question: "Antonym of EXPAND:",
      options: ["Grow", "Stretch", "Shrink", "Open"],
      correctAnswer: 2,
      explanation: "Expand means to grow; its antonym is shrink."
    },
    {
      question: "He as well as his brothers ____ guilty:",
      options: ["are", "were", "is", "have"],
      correctAnswer: 2,
      explanation: "'As well as' follows the subject of the first noun."
    },
    {
      question: "Plural of 'mouse' (animal):",
      options: ["mouses", "mises", "mice", "mousies"],
      correctAnswer: 2,
      explanation: "The plural of 'mouse' is 'mice'."
    },
    {
      question: "'Once in a blue moon' means:",
      options: ["Often", "Always", "Rarely", "Never"],
      correctAnswer: 2,
      explanation: "'Once in a blue moon' means rarely."
    },
    {
      question: "Total Parahs in Quran:",
      options: ["20", "25", "30", "40"],
      correctAnswer: 2,
      explanation: "The Quran has 30 Parahs."
    },
    {
      question: "Longest Surah of Quran:",
      options: ["Imran", "Maidah", "Al-Baqarah", "Fatiha"],
      correctAnswer: 2,
      explanation: "Surah Al-Baqarah is the longest Surah of the Quran."
    },
    {
      question: "Heart of Quran:",
      options: ["Fatiha", "Baqarah", "Yaseen", "Rahman"],
      correctAnswer: 2,
      explanation: "Surah Yaseen is known as the heart of the Quran."
    },
    {
      question: "First revealed Surah:",
      options: ["Fatiha", "Baqarah", "Al-Alaq", "Mudassir"],
      correctAnswer: 2,
      explanation: "Surah Al-Alaq was the first revealed Surah."
    },
    {
      question: "Surah without Bismillah:",
      options: ["Fatiha", "Yaseen", "At-Tawbah", "Mulk"],
      correctAnswer: 2,
      explanation: "Surah At-Tawbah does not begin with Bismillah."
    },
    {
      question: "Capital of Indonesia:",
      options: ["Bali", "Bandung", "Jakarta", "Surabaya"],
      correctAnswer: 2,
      explanation: "Jakarta is the capital of Indonesia."
    },
    {
      question: "Capital of Bangladesh:",
      options: ["Chittagong", "Sylhet", "Dhaka", "Khulna"],
      correctAnswer: 2,
      explanation: "Dhaka is the capital of Bangladesh."
    },
    {
      question: "Currency of China:",
      options: ["Yen", "Won", "Yuan", "Ringgit"],
      correctAnswer: 2,
      explanation: "The currency of China is Yuan."
    },
    {
      question: "WHO HQ is in:",
      options: ["New York", "Vienna", "Geneva", "Rome"],
      correctAnswer: 2,
      explanation: "The WHO headquarters is in Geneva, Switzerland."
    },
    {
      question: "NATO HQ is in:",
      options: ["Paris", "London", "Brussels", "Geneva"],
      correctAnswer: 2,
      explanation: "The NATO headquarters is in Brussels, Belgium."
    },
    {
      question: "ROM stands for:",
      options: ["Random Only Memory", "Run Only Memory", "Read Only Memory", "Read Open Memory"],
      correctAnswer: 2,
      explanation: "ROM stands for Read Only Memory."
    },
    {
      question: "Ctrl+V shortcut:",
      options: ["Cut", "Copy", "Paste", "Save"],
      correctAnswer: 2,
      explanation: "Ctrl+V is used to paste content."
    },
    {
      question: "Ctrl+S shortcut:",
      options: ["Send", "Search", "Save", "Select"],
      correctAnswer: 2,
      explanation: "Ctrl+S is used to save a document."
    },
    {
      question: "GUI stands for:",
      options: ["Graphic User Input", "General User Interface", "Graphical User Interface", "None"],
      correctAnswer: 2,
      explanation: "GUI stands for Graphical User Interface."
    },
    {
      question: "1 MB = ___ KB:",
      options: ["100", "1000", "1024", "2048"],
      correctAnswer: 2,
      explanation: "1 MB = 1024 KB."
    },
    // ============ PAPER SET 5 — STYLE OF 2019 PAPER ============
    {
      question: "Two Nation Theory was first presented by:",
      options: ["Iqbal", "Quaid", "Sir Syed Ahmad Khan", "Liaquat"],
      correctAnswer: 2,
      explanation: "Sir Syed Ahmad Khan first presented the Two Nation Theory."
    },
    {
      question: "Allahabad Address by Iqbal year:",
      options: ["1929", "1940", "1930", "1928"],
      correctAnswer: 2,
      explanation: "Allama Iqbal delivered his Allahabad Address in 1930."
    },
    {
      question: "All India Muslim League founded in:",
      options: ["1900", "1857", "1906", "1916"],
      correctAnswer: 2,
      explanation: "The All India Muslim League was founded in 1906."
    },
    {
      question: "AIML founded in which city?",
      options: ["Lahore", "Aligarh", "Dhaka", "Delhi"],
      correctAnswer: 2,
      explanation: "The All India Muslim League was founded in Dhaka."
    },
    {
      question: "First president of AIML:",
      options: ["Salimullah", "Quaid", "Aga Khan III", "Iqbal"],
      correctAnswer: 2,
      explanation: "Sir Aga Khan III was the first president of AIML."
    },
    {
      question: "War of Independence took place in:",
      options: ["1858", "1860", "1857", "1862"],
      correctAnswer: 2,
      explanation: "The War of Independence took place in 1857."
    },
    {
      question: "Last Mughal emperor:",
      options: ["Aurangzeb", "Akbar II", "Bahadur Shah Zafar", "Shah Alam"],
      correctAnswer: 2,
      explanation: "Bahadur Shah Zafar was the last Mughal emperor."
    },
    {
      question: "Tarbela Dam is on river:",
      options: ["Jhelum", "Chenab", "Indus", "Ravi"],
      correctAnswer: 2,
      explanation: "Tarbela Dam is built on the Indus River."
    },
    {
      question: "Mangla Dam is on river:",
      options: ["Indus", "Chenab", "Jhelum", "Kabul"],
      correctAnswer: 2,
      explanation: "Mangla Dam is built on the Jhelum River."
    },
    {
      question: "Khewra Salt Mine is in:",
      options: ["Sindh", "KP", "Punjab", "Balochistan"],
      correctAnswer: 2,
      explanation: "Khewra Salt Mine is located in Punjab."
    },
    {
      question: "Synonym of FRUGAL:",
      options: ["Wasteful", "Rich", "Economical", "Generous"],
      correctAnswer: 2,
      explanation: "Frugal means economical and not wasteful."
    },
    {
      question: "Antonym of ABUNDANT:",
      options: ["Plenty", "Rich", "Scarce", "Full"],
      correctAnswer: 2,
      explanation: "Abundant means plentiful; its antonym is scarce."
    },
    {
      question: "She has been waiting ____ two hours:",
      options: ["since", "from", "for", "by"],
      correctAnswer: 2,
      explanation: "'For' is used with a duration of time."
    },
    {
      question: "Neither of the boys ____ present:",
      options: ["are", "were", "is", "have"],
      correctAnswer: 2,
      explanation: "'Neither' is followed by a singular verb."
    },
    {
      question: "'To bury the hatchet' means:",
      options: ["Start fight", "Dig hole", "Make peace", "Hide weapon"],
      correctAnswer: 2,
      explanation: "To bury the hatchet means to make peace."
    },
    {
      question: "First Hafiz of Quran:",
      options: ["Abu Bakr", "Umar", "Holy Prophet (PBUH)", "Ali"],
      correctAnswer: 2,
      explanation: "The Holy Prophet (PBUH) was the first Hafiz of the Quran."
    },
    {
      question: "First Adhan called by:",
      options: ["Zaid", "Suhaib", "Bilal", "Salman"],
      correctAnswer: 2,
      explanation: "Hazrat Bilal (RA) was the first to call Adhan."
    },
    {
      question: "Treaty of Hudaybiyyah year:",
      options: ["5 AH", "7 AH", "6 AH", "8 AH"],
      correctAnswer: 2,
      explanation: "The Treaty of Hudaybiyyah was signed in 6 AH."
    },
    {
      question: "Conquest of Makkah took place in:",
      options: ["6 AH", "7 AH", "8 AH", "10 AH"],
      correctAnswer: 2,
      explanation: "The Conquest of Makkah took place in 8 AH."
    },
    {
      question: "Hazrat Umar Caliphate years:",
      options: ["8", "12", "10", "15"],
      correctAnswer: 2,
      explanation: "Hazrat Umar's Caliphate lasted 10 years."
    },
    {
      question: "Largest desert in the world:",
      options: ["Sahara", "Gobi", "Antarctic Desert", "Arabian"],
      correctAnswer: 2,
      explanation: "The Antarctic Desert is the largest desert in the world."
    },
    {
      question: "Largest hot desert:",
      options: ["Gobi", "Kalahari", "Sahara", "Thar"],
      correctAnswer: 2,
      explanation: "The Sahara is the largest hot desert."
    },
    {
      question: "Mt Everest height:",
      options: ["8611 m", "9000 m", "8848 m", "8126 m"],
      correctAnswer: 2,
      explanation: "Mount Everest is 8,848 meters high."
    },
    {
      question: "K2 height:",
      options: ["8848 m", "8126 m", "8611 m", "7925 m"],
      correctAnswer: 2,
      explanation: "K2 is 8,611 meters high."
    },
    {
      question: "K2 is in mountain range:",
      options: ["Himalaya", "Hindukush", "Karakoram", "Suleman"],
      correctAnswer: 2,
      explanation: "K2 is in the Karakoram mountain range."
    },
    {
      question: "Aeroplane invented by:",
      options: ["Edison", "Bell", "Wright Brothers", "Watt"],
      correctAnswer: 2,
      explanation: "The Wright Brothers invented the aeroplane."
    },
    {
      question: "Telephone invented by:",
      options: ["Edison", "Marconi", "Alexander Graham Bell", "Tesla"],
      correctAnswer: 2,
      explanation: "Alexander Graham Bell invented the telephone."
    },
    {
      question: "Bulb invented by:",
      options: ["Bell", "Marconi", "Edison", "Tesla"],
      correctAnswer: 2,
      explanation: "Thomas Edison invented the bulb."
    },
    {
      question: "Penicillin discovered by:",
      options: ["Newton", "Pasteur", "Alexander Fleming", "Curie"],
      correctAnswer: 2,
      explanation: "Alexander Fleming discovered penicillin."
    },
    {
      question: "Theory of Relativity given by:",
      options: ["Newton", "Galileo", "Einstein", "Bohr"],
      correctAnswer: 2,
      explanation: "Albert Einstein gave the Theory of Relativity."
    },
    // ============ PAPER SET 6 — STYLE OF 2018 PAPER ============
    {
      question: "Pakistan won Cricket World Cup in:",
      options: ["1996", "1999", "1992", "2003"],
      correctAnswer: 2,
      explanation: "Pakistan won the Cricket World Cup in 1992."
    },
    {
      question: "Pakistan won T20 World Cup in:",
      options: ["2007", "2012", "2009", "2016"],
      correctAnswer: 2,
      explanation: "Pakistan won the T20 World Cup in 2009."
    },
    {
      question: "First woman PM of Pakistan:",
      options: ["Fatima Jinnah", "Begum Liaquat", "Benazir Bhutto", "Hina"],
      correctAnswer: 2,
      explanation: "Benazir Bhutto was the first woman Prime Minister of Pakistan."
    },
    {
      question: "Edhi Foundation founded by:",
      options: ["Ruth Pfau", "Imran", "Abdul Sattar Edhi", "Bilquis"],
      correctAnswer: 2,
      explanation: "Abdul Sattar Edhi founded the Edhi Foundation."
    },
    {
      question: "Malala won Nobel Peace Prize in:",
      options: ["2012", "2016", "2014", "2018"],
      correctAnswer: 2,
      explanation: "Malala Yousafzai won the Nobel Peace Prize in 2014."
    },
    {
      question: "Dr Abdus Salam won Nobel Prize in:",
      options: ["1969", "1989", "1979", "1999"],
      correctAnswer: 2,
      explanation: "Dr. Abdus Salam won the Nobel Prize in 1979."
    },
    {
      question: "Dr Salam Nobel was in:",
      options: ["Chemistry", "Medicine", "Physics", "Peace"],
      correctAnswer: 2,
      explanation: "Dr. Abdus Salam won the Nobel Prize in Physics."
    },
    {
      question: "Faisal Mosque is in:",
      options: ["Lahore", "Karachi", "Islamabad", "Pindi"],
      correctAnswer: 2,
      explanation: "Faisal Mosque is located in Islamabad."
    },
    {
      question: "Faisal Mosque built with help from:",
      options: ["UAE", "Iran", "Saudi Arabia", "Turkey"],
      correctAnswer: 2,
      explanation: "Faisal Mosque was built with help from Saudi Arabia."
    },
    {
      question: "Badshahi Mosque built by:",
      options: ["Shah Jahan", "Akbar", "Aurangzeb", "Babur"],
      correctAnswer: 2,
      explanation: "Badshahi Mosque was built by Aurangzeb."
    },
    {
      question: "Synonym of MEAGER:",
      options: ["Plenty", "Rich", "Scanty", "Full"],
      correctAnswer: 2,
      explanation: "Meager means scanty or inadequate."
    },
    {
      question: "Antonym of NOBLE:",
      options: ["Honorable", "Royal", "Mean", "Kind"],
      correctAnswer: 2,
      explanation: "Noble means honorable; its antonym is mean."
    },
    {
      question: "Hardly had I reached ____ the train left:",
      options: ["than", "then", "when", "that"],
      correctAnswer: 2,
      explanation: "'When' is used with 'hardly...when'."
    },
    {
      question: "I prefer tea ____ coffee:",
      options: ["than", "over", "to", "from"],
      correctAnswer: 2,
      explanation: "Prefer is followed by 'to'."
    },
    {
      question: "'A piece of cake' means:",
      options: ["Difficult", "Food", "Easy task", "Party"],
      correctAnswer: 2,
      explanation: "'A piece of cake' means an easy task."
    },
    {
      question: "Number of Sajdas in Quran:",
      options: ["10", "12", "14", "15"],
      correctAnswer: 2,
      explanation: "There are 14 Sajdas in the Quran."
    },
    {
      question: "Lailatul Qadr is in:",
      options: ["First 10 of Ramadan", "Mid Shawwal", "Last 10 of Ramadan", "Zilhaj"],
      correctAnswer: 2,
      explanation: "Lailatul Qadr is in the last 10 nights of Ramadan."
    },
    {
      question: "Hazrat Hussain (RA) martyred at:",
      options: ["Madina", "Makkah", "Karbala", "Damascus"],
      correctAnswer: 2,
      explanation: "Hazrat Hussain (RA) was martyred at Karbala."
    },
    {
      question: "Karbala incident in:",
      options: ["60 AH", "65 AH", "61 AH", "70 AH"],
      correctAnswer: 2,
      explanation: "The Karbala incident took place in 61 AH."
    },
    {
      question: "Total Pillars of Iman:",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
      explanation: "There are 7 pillars of Iman."
    },
    {
      question: "Largest mammal:",
      options: ["Elephant", "Giraffe", "Blue whale", "Rhino"],
      correctAnswer: 2,
      explanation: "The Blue whale is the largest mammal."
    },
    {
      question: "Fastest land animal:",
      options: ["Lion", "Tiger", "Cheetah", "Horse"],
      correctAnswer: 2,
      explanation: "The Cheetah is the fastest land animal."
    },
    {
      question: "Body temperature normal:",
      options: ["97°F", "99°F", "98.6°F", "100°F"],
      correctAnswer: 2,
      explanation: "Normal body temperature is 98.6°F."
    },
    {
      question: "Number of teeth in adult:",
      options: ["28", "30", "32", "34"],
      correctAnswer: 2,
      explanation: "An adult has 32 teeth."
    },
    {
      question: "Number of chambers in heart:",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2,
      explanation: "The heart has 4 chambers."
    },
    {
      question: "Universal blood donor:",
      options: ["A", "B", "AB", "O"],
      correctAnswer: 3,
      explanation: "O negative is the universal blood donor."
    },
    {
      question: "Hardest substance in body:",
      options: ["Bone", "Skin", "Tooth Enamel", "Nail"],
      correctAnswer: 2,
      explanation: "Tooth enamel is the hardest substance in the body."
    },
    {
      question: "1 GB = ___ MB:",
      options: ["100", "1000", "1024", "2048"],
      correctAnswer: 2,
      explanation: "1 GB = 1024 MB."
    },
    {
      question: "Founder of Microsoft:",
      options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Larry"],
      correctAnswer: 2,
      explanation: "Bill Gates founded Microsoft."
    },
    // ============ BONUS — MOST REPEATED QUESTIONS ============
    {
      question: "OIC was formed in:",
      options: ["1971", "1973", "1969", "1975"],
      correctAnswer: 2,
      explanation: "The OIC was formed in 1969."
    },
    {
      question: "SAARC was formed in:",
      options: ["1987", "1990", "1985", "1995"],
      correctAnswer: 2,
      explanation: "SAARC was formed in 1985."
    },
    {
      question: "SAARC has how many members:",
      options: ["6", "7", "8", "9"],
      correctAnswer: 2,
      explanation: "SAARC has 8 member states."
    },
    {
      question: "ASEAN HQ is in:",
      options: ["Bangkok", "Manila", "Jakarta", "KL"],
      correctAnswer: 2,
      explanation: "The ASEAN headquarters is in Jakarta, Indonesia."
    },
    {
      question: "OPEC HQ is in:",
      options: ["Riyadh", "Dubai", "Vienna", "Geneva"],
      correctAnswer: 2,
      explanation: "The OPEC headquarters is in Vienna, Austria."
    },
    {
      question: "ECO HQ is in:",
      options: ["Islamabad", "Ankara", "Tehran", "Kabul"],
      correctAnswer: 2,
      explanation: "The ECO headquarters is in Tehran, Iran."
    },
    {
      question: "Pakistan joined SCO in:",
      options: ["2015", "2019", "2017", "2020"],
      correctAnswer: 2,
      explanation: "Pakistan joined the SCO in 2017."
    },
    {
      question: "Pakistan's first satellite:",
      options: ["Paksat-1", "PRSS-1", "Badr-1", "iCube"],
      correctAnswer: 2,
      explanation: "Badr-1 was Pakistan's first satellite."
    },
    {
      question: "Badr-1 launched in:",
      options: ["1995", "2000", "1990", "2011"],
      correctAnswer: 2,
      explanation: "Badr-1 was launched in 1990."
    },
    {
      question: "Pakistan's space agency:",
      options: ["NASA", "ISRO", "SUPARCO", "ESA"],
      correctAnswer: 2,
      explanation: "SUPARCO is Pakistan's space agency."
    },
    {
      question: "Synonym of GREGARIOUS:",
      options: ["Lonely", "Sad", "Sociable", "Quiet"],
      correctAnswer: 2,
      explanation: "Gregarious means sociable or outgoing."
    },
    {
      question: "Synonym of OBSOLETE:",
      options: ["Modern", "New", "Outdated", "Useful"],
      correctAnswer: 2,
      explanation: "Obsolete means outdated."
    },
    {
      question: "Antonym of LIBERAL:",
      options: ["Open", "Free", "Strict", "Generous"],
      correctAnswer: 2,
      explanation: "Liberal means open/free; its antonym is strict."
    },
    {
      question: "Antonym of TRANSPARENT:",
      options: ["Clear", "Open", "Opaque", "Plain"],
      correctAnswer: 2,
      explanation: "Transparent means clear; its antonym is opaque."
    },
    {
      question: "Each of the boys ____ a prize:",
      options: ["get", "are getting", "gets", "have got"],
      correctAnswer: 2,
      explanation: "'Each' is followed by a singular verb."
    },
    {
      question: "The news ____ true:",
      options: ["are", "were", "is", "have"],
      correctAnswer: 2,
      explanation: "'News' is uncountable and takes a singular verb."
    },
    {
      question: "I have no objection ____ his coming:",
      options: ["for", "of", "to", "with"],
      correctAnswer: 2,
      explanation: "Objection is followed by 'to'."
    },
    {
      question: "He is fond ____ music:",
      options: ["with", "for", "of", "at"],
      correctAnswer: 2,
      explanation: "Fond is followed by 'of'."
    },
    {
      question: "'Hit the nail on the head' means:",
      options: ["Miss", "Hammer", "Say exactly right", "Damage"],
      correctAnswer: 2,
      explanation: "'Hit the nail on the head' means to say exactly right."
    },
    {
      question: "'Crocodile tears' means:",
      options: ["Real sadness", "Heavy rain", "False sorrow", "Weeping"],
      correctAnswer: 2,
      explanation: "'Crocodile tears' means false sorrow or fake sadness."
    },
    {
      question: "Number of Rakats in Maghrib (Farz):",
      options: ["2", "4", "3", "5"],
      correctAnswer: 2,
      explanation: "Maghrib has 3 Farz Rakats."
    },
    {
      question: "Total Rakats farz in a day:",
      options: ["15", "20", "17", "25"],
      correctAnswer: 2,
      explanation: "There are 17 Farz Rakats in a day."
    },
    {
      question: "Tawaf around Kaaba is done ___ times:",
      options: ["3", "5", "7", "9"],
      correctAnswer: 2,
      explanation: "Tawaf is done 7 times around the Kaaba."
    },
    {
      question: "Day of Arafah:",
      options: ["8 Zilhaj", "10 Zilhaj", "9 Zilhaj", "11 Zilhaj"],
      correctAnswer: 2,
      explanation: "The Day of Arafah is 9 Zilhaj."
    },
    {
      question: "Zakat rate:",
      options: ["1.5%", "5%", "2.5%", "10%"],
      correctAnswer: 2,
      explanation: "Zakat is 2.5%."
    },
    {
      question: "Capital of Canada:",
      options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
      correctAnswer: 2,
      explanation: "Ottawa is the capital of Canada."
    },
    {
      question: "Capital of Brazil:",
      options: ["Rio", "Sao Paulo", "Brasilia", "Salvador"],
      correctAnswer: 2,
      explanation: "Brasilia is the capital of Brazil."
    },
    {
      question: "Currency of UK:",
      options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
      correctAnswer: 2,
      explanation: "The currency of the UK is the Pound Sterling."
    },
    {
      question: "Currency of Bangladesh:",
      options: ["Rupee", "Dinar", "Taka", "Riyal"],
      correctAnswer: 2,
      explanation: "The currency of Bangladesh is Taka."
    },
    {
      question: "Currency of Afghanistan:",
      options: ["Rupee", "Toman", "Afghani", "Riyal"],
      correctAnswer: 2,
      explanation: "The currency of Afghanistan is Afghani."
    },
    {
      question: "Speed of sound in air:",
      options: ["330 m/s", "300 m/s", "340 m/s", "1500 m/s"],
      correctAnswer: 2,
      explanation: "The speed of sound in air is approximately 340 m/s."
    },
    {
      question: "Acceleration due to gravity:",
      options: ["10 m/s²", "9 m/s²", "9.8 m/s²", "8 m/s²"],
      correctAnswer: 2,
      explanation: "Acceleration due to gravity is 9.8 m/s²."
    },
    {
      question: "Sound cannot travel through:",
      options: ["Solid", "Liquid", "Vacuum", "Gas"],
      correctAnswer: 2,
      explanation: "Sound cannot travel through a vacuum."
    },
    {
      question: "Boiling point of water:",
      options: ["50°C", "150°C", "100°C", "200°C"],
      correctAnswer: 2,
      explanation: "The boiling point of water is 100°C."
    },
    {
      question: "Symbol of silver:",
      options: ["Si", "Au", "Ag", "Sv"],
      correctAnswer: 2,
      explanation: "The chemical symbol of silver is Ag."
    },
    {
      question: "Symbol of iron:",
      options: ["Ir", "In", "Fe", "I"],
      correctAnswer: 2,
      explanation: "The chemical symbol of iron is Fe."
    },
    {
      question: "Symbol of mercury:",
      options: ["Me", "Mr", "Hg", "M"],
      correctAnswer: 2,
      explanation: "The chemical symbol of mercury is Hg."
    },
    {
      question: "Most abundant gas in atmosphere:",
      options: ["O2", "CO2", "N2", "H2"],
      correctAnswer: 2,
      explanation: "Nitrogen (N2) is the most abundant gas in the atmosphere."
    },
    {
      question: "pH of pure water:",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
      explanation: "The pH of pure water is 7."
    },
    {
      question: "Vitamin D deficiency causes:",
      options: ["Night blindness", "Scurvy", "Rickets", "Beriberi"],
      correctAnswer: 2,
      explanation: "Vitamin D deficiency causes rickets."
    },
    {
      question: "Vitamin A deficiency causes:",
      options: ["Scurvy", "Rickets", "Night blindness", "Beriberi"],
      correctAnswer: 2,
      explanation: "Vitamin A deficiency causes night blindness."
    },
    {
      question: "Insulin produced by:",
      options: ["Liver", "Stomach", "Pancreas", "Kidney"],
      correctAnswer: 2,
      explanation: "Insulin is produced by the pancreas."
    },
    {
      question: "Largest organ in body:",
      options: ["Liver", "Lungs", "Skin", "Heart"],
      correctAnswer: 2,
      explanation: "The skin is the largest organ in the body."
    },
    {
      question: "Number of chromosomes in humans:",
      options: ["44", "48", "46", "50"],
      correctAnswer: 2,
      explanation: "Humans have 46 chromosomes."
    },
    {
      question: "Disease caused by mosquito:",
      options: ["TB", "Cholera", "Malaria", "Measles"],
      correctAnswer: 2,
      explanation: "Malaria is caused by mosquitoes."
    },
    {
      question: "TB caused by:",
      options: ["Virus", "Fungus", "Bacteria", "Protozoa"],
      correctAnswer: 2,
      explanation: "Tuberculosis (TB) is caused by bacteria."
    },
    {
      question: "AIDS caused by:",
      options: ["HPV", "HBV", "HIV", "HSV"],
      correctAnswer: 2,
      explanation: "AIDS is caused by HIV."
    },
    {
      question: "Pakistan Day is celebrated on:",
      options: ["14 Aug", "6 Sep", "23 Mar", "11 Sep"],
      correctAnswer: 2,
      explanation: "Pakistan Day is celebrated on 23 March."
    },
    {
      question: "Defence Day of Pakistan:",
      options: ["14 Aug", "23 Mar", "6 Sep", "11 Sep"],
      correctAnswer: 2,
      explanation: "Defence Day is celebrated on 6 September."
    },
    {
      question: "Iqbal Day:",
      options: ["11 Sep", "25 Dec", "9 Nov", "21 Apr"],
      correctAnswer: 2,
      explanation: "Iqbal Day is celebrated on 9 November."
    },
    {
      question: "Labour Day:",
      options: ["5 June", "20 July", "1 May", "1 Sep"],
      correctAnswer: 2,
      explanation: "Labour Day is celebrated on 1 May."
    }
  ]
};

export default quizData;