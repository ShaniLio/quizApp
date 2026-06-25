// src/quizData.js - International Organizations Quiz
const quizData = {
  title: "International Organizations Quiz",
  description: "Test your knowledge about major international organizations!",
  questions: [
    // ============ UNITED NATIONS (UNO) ============
    {
      question: "What is the full name of UNO?",
      options: ["United Nations Organization", "United National Organization", "Union of Nations Organization", "United Nations Office"],
      correctAnswer: 0,
      explanation: "UNO stands for United Nations Organization."
    },
    {
      question: "When was the United Nations (UN) founded?",
      options: ["1944", "1945", "1946", "1947"],
      correctAnswer: 1,
      explanation: "The United Nations was founded in 1945."
    },
    {
      question: "Where is the headquarters of the United Nations?",
      options: ["Geneva, Switzerland", "London, UK", "New York, USA", "Paris, France"],
      correctAnswer: 2,
      explanation: "The UN headquarters is located in New York, USA."
    },
    {
      question: "How many member states does the United Nations have?",
      options: ["183", "193", "203", "213"],
      correctAnswer: 1,
      explanation: "The UN has 193 member states."
    },
    {
      question: "Who is the current Secretary-General of the United Nations?",
      options: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Trygve Lie"],
      correctAnswer: 2,
      explanation: "António Guterres of Portugal is the current UN Secretary-General."
    },
    {
      question: "António Guterres, the current UN Secretary-General, belongs to which country?",
      options: ["Spain", "Portugal", "Italy", "France"],
      correctAnswer: 1,
      explanation: "António Guterres is from Portugal."

    },
    // ============ SAARC ============
    {
      question: "When was the South Asian Association for Regional Cooperation (SAARC) founded?",
      options: ["1983", "1984", "1985", "1986"],
      correctAnswer: 2,
      explanation: "SAARC was founded in 1985."
    },
    {
      question: "Where is the headquarters of SAARC?",
      options: ["New Delhi, India", "Dhaka, Bangladesh", "Kathmandu, Nepal", "Colombo, Sri Lanka"],
      correctAnswer: 2,
      explanation: "SAARC headquarters is in Kathmandu, Nepal."
    },
    {
      question: "How many members does SAARC have?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 2,
      explanation: "SAARC has 8 member states."
    },
    {
      question: "Who is the current Secretary General of SAARC?",
      options: ["Golam Sarwar", "Esala Weerakoon", "Amjad Hussain B. Sial", "Arjun Bahadur Thapa"],
      correctAnswer: 0,
      explanation: "Golam Sarwar from Bangladesh is the current Secretary General of SAARC."
    },
    {
      question: "Golam Sarwar, the current SAARC Secretary General, belongs to which country?",
      options: ["India", "Bangladesh", "Pakistan", "Nepal"],
      correctAnswer: 1,
      explanation: "Golam Sarwar is from Bangladesh."
    },
    // ============ NATO ============
    {
      question: "When was NATO (North Atlantic Treaty Organization) founded?",
      options: ["1947", "1948", "1949", "1950"],
      correctAnswer: 2,
      explanation: "NATO was founded in 1949."
    },
    {
      question: "Where is the headquarters of NATO?",
      options: ["Paris, France", "London, UK", "Brussels, Belgium", "Berlin, Germany"],
      correctAnswer: 2,
      explanation: "NATO headquarters is in Brussels, Belgium."
    },
    {
      question: "How many members does NATO currently have?",
      options: ["28", "30", "32", "34"],
      correctAnswer: 2,
      explanation: "NATO currently has 32 member states."
    },
    {
      question: "Who is the current Secretary General of NATO?",
      options: ["Jens Stoltenberg", "Mark Rutte", "Anders Fogh Rasmussen", "Jaap de Hoop Scheffer"],
      correctAnswer: 1,
      explanation: "Mark Rutte from the Netherlands is the current Secretary General of NATO."
    },
    {
      question: "Mark Rutte, the current NATO Secretary General, belongs to which country?",
      options: ["Denmark", "Sweden", "Netherlands", "Germany"],
      correctAnswer: 2,
      explanation: "Mark Rutte is from the Netherlands."
    },
    // ============ OIC ============
    {
      question: "When was the Organization of Islamic Cooperation (OIC) founded?",
      options: ["1967", "1968", "1969", "1970"],
      correctAnswer: 2,
      explanation: "The OIC was founded in 1969."
    },
    {
      question: "Where is the headquarters of the OIC?",
      options: ["Mecca, Saudi Arabia", "Riyadh, Saudi Arabia", "Jeddah, Saudi Arabia", "Medina, Saudi Arabia"],
      correctAnswer: 2,
      explanation: "The OIC headquarters is in Jeddah, Saudi Arabia."
    },
    {
      question: "How many members does the OIC have?",
      options: ["47", "52", "57", "62"],
      correctAnswer: 2,
      explanation: "The OIC has 57 member states."
    },
    {
      question: "Who is the current Secretary General of the OIC?",
      options: ["Ekmeleddin Ihsanoglu", "Hissein Brahim Taha", "Yousef Al-Othaimeen", "Hamid Algabid"],
      correctAnswer: 1,
      explanation: "Hissein Brahim Taha from Chad is the current Secretary General of the OIC."
    },
    {
      question: "Hissein Brahim Taha, the current OIC Secretary General, belongs to which country?",
      options: ["Sudan", "Chad", "Niger", "Mali"],
      correctAnswer: 1,
      explanation: "Hissein Brahim Taha is from Chad."
    },
    // ============ SCO ============
    {
      question: "When was the Shanghai Cooperation Organisation (SCO) founded?",
      options: ["1999", "2000", "2001", "2002"],
      correctAnswer: 2,
      explanation: "The SCO was founded in 2001."
    },
    {
      question: "Where is the headquarters of the SCO?",
      options: ["Shanghai, China", "Beijing, China", "Moscow, Russia", "Tashkent, Uzbekistan"],
      correctAnswer: 1,
      explanation: "The SCO headquarters is in Beijing, China."
    },
    {
      question: "How many members does the SCO have?",
      options: ["6", "8", "10", "12"],
      correctAnswer: 2,
      explanation: "The SCO has 10 member states."
    },
    {
      question: "Who is the current Secretary General of the SCO?",
      options: ["Vladimir Norov", "Rashid Alimov", "Nurlan Yermekbayev", "Dmitry Mezentsev"],
      correctAnswer: 2,
      explanation: "Nurlan Yermekbayev from Kazakhstan is the current Secretary General of the SCO."
    },
    {
      question: "Nurlan Yermekbayev, the current SCO Secretary General, belongs to which country?",
      options: ["Kyrgyzstan", "Kazakhstan", "Uzbekistan", "Tajikistan"],
      correctAnswer: 1,
      explanation: "Nurlan Yermekbayev is from Kazakhstan."
    },
    // ============ ECO ============
    {
      question: "When was the Economic Cooperation Organization (ECO) founded?",
      options: ["1983", "1984", "1985", "1986"],
      correctAnswer: 2,
      explanation: "The ECO was founded in 1985."
    },
    {
      question: "Where is the headquarters of the ECO?",
      options: ["Ankara, Turkey", "Tehran, Iran", "Islamabad, Pakistan", "Tashkent, Uzbekistan"],
      correctAnswer: 1,
      explanation: "The ECO headquarters is in Tehran, Iran."
    },
    {
      question: "How many members does the ECO have?",
      options: ["6", "8", "10", "12"],
      correctAnswer: 2,
      explanation: "The ECO has 10 member states."
    },
    {
      question: "Who is the current Secretary General of the ECO?",
      options: ["Hadi Soleimanpour", "Yahya Maroofi", "Asad Majeed Khan", "Shamshad Ahmad"],
      correctAnswer: 2,
      explanation: "Asad Majeed Khan from Pakistan is the current Secretary General of the ECO."
    },
    {
      question: "Asad Majeed Khan, the current ECO Secretary General, belongs to which country?",
      options: ["Iran", "Turkey", "Pakistan", "Azerbaijan"],
      correctAnswer: 2,
      explanation: "Asad Majeed Khan is from Pakistan."
    },
    // ============ ASEAN ============
    {
      question: "When was ASEAN (Association of Southeast Asian Nations) founded?",
      options: ["1965", "1966", "1967", "1968"],
      correctAnswer: 2,
      explanation: "ASEAN was founded in 1967."
    },
    {
      question: "Where is the headquarters of ASEAN?",
      options: ["Bangkok, Thailand", "Jakarta, Indonesia", "Kuala Lumpur, Malaysia", "Singapore"],
      correctAnswer: 1,
      explanation: "ASEAN headquarters is in Jakarta, Indonesia."
    },
    {
      question: "How many members does ASEAN have?",
      options: ["8", "9", "10", "11"],
      correctAnswer: 2,
      explanation: "ASEAN has 10 member states."
    },
    {
      question: "Who is the current Secretary General of ASEAN?",
      options: ["Lim Jock Hoi", "Kao Kim Hourn", "Le Luong Minh", "Rodolfo Severino Jr."],
      correctAnswer: 1,
      explanation: "Kao Kim Hourn from Cambodia is the current Secretary General of ASEAN."
    },
    {
      question: "Kao Kim Hourn, the current ASEAN Secretary General, belongs to which country?",
      options: ["Thailand", "Vietnam", "Cambodia", "Philippines"],
      correctAnswer: 2,
      explanation: "Kao Kim Hourn is from Cambodia."
    },
    // ============ IMF ============
    {
      question: "When was the International Monetary Fund (IMF) founded?",
      options: ["1944", "1945", "1946", "1947"],
      correctAnswer: 1,
      explanation: "The IMF was founded in 1945."
    },
    {
      question: "Where is the headquarters of the IMF?",
      options: ["New York, USA", "Washington D.C., USA", "London, UK", "Paris, France"],
      correctAnswer: 1,
      explanation: "The IMF headquarters is in Washington D.C., USA."
    },
    {
      question: "How many members does the IMF have?",
      options: ["180", "185", "190", "195"],
      correctAnswer: 2,
      explanation: "The IMF has 190 member states."
    },
    {
      question: "Who is the current Managing Director of the IMF?",
      options: ["Christine Lagarde", "Kristalina Georgieva", "Dominique Strauss-Kahn", "Rodrigo Rato"],
      correctAnswer: 1,
      explanation: "Kristalina Georgieva from Bulgaria is the current Managing Director of the IMF."
    },
    {
      question: "Kristalina Georgieva, the current IMF Managing Director, belongs to which country?",
      options: ["Romania", "Bulgaria", "Poland", "Hungary"],
      correctAnswer: 1,
      explanation: "Kristalina Georgieva is from Bulgaria."
    },
    // ============ World Bank ============
    {
      question: "When was the World Bank founded?",
      options: ["1943", "1944", "1945", "1946"],
      correctAnswer: 1,
      explanation: "The World Bank was founded in 1944."
    },
    {
      question: "Where is the headquarters of the World Bank?",
      options: ["New York, USA", "Washington D.C., USA", "London, UK", "Paris, France"],
      correctAnswer: 1,
      explanation: "The World Bank headquarters is in Washington D.C., USA."
    },
    {
      question: "How many members does the World Bank have?",
      options: ["179", "184", "189", "194"],
      correctAnswer: 2,
      explanation: "The World Bank has 189 member states."
    },
    {
      question: "Who is the current President of the World Bank?",
      options: ["Jim Yong Kim", "David Malpass", "Ajay Banga", "Robert Zoellick"],
      correctAnswer: 2,
      explanation: "Ajay Banga is the current President of the World Bank."
    },
    {
      question: "Ajay Banga, the current World Bank President, belongs to which country?",
      options: ["India/USA", "China", "UK", "Canada"],
      correctAnswer: 0,
      explanation: "Ajay Banga is of Indian origin and is also a US citizen."
    },
    // ============ BRICS ============
    {
      question: "When was BRICS founded?",
      options: ["2007", "2008", "2009", "2010"],
      correctAnswer: 2,
      explanation: "BRICS was founded in 2009."
    },
    {
      question: "Where is the headquarters of BRICS?",
      options: ["Beijing, China", "Moscow, Russia", "No permanent HQ", "New Delhi, India"],
      correctAnswer: 2,
      explanation: "BRICS has no permanent headquarters."
    },
    {
      question: "How many members does BRICS currently have?",
      options: ["5", "7", "10", "12"],
      correctAnswer: 2,
      explanation: "BRICS has 10 member states."
    },
    {
      question: "Which country currently holds the chair of BRICS?",
      options: ["China", "Russia", "Brazil", "India"],
      correctAnswer: 2,
      explanation: "Brazil currently holds the rotational chair of BRICS."
    },
    // ============ WHO ============
    {
      question: "When was the World Health Organization (WHO) founded?",
      options: ["1946", "1947", "1948", "1949"],
      correctAnswer: 2,
      explanation: "WHO was founded in 1948."
    },
    {
      question: "Where is the headquarters of WHO?",
      options: ["Geneva, Switzerland", "London, UK", "New York, USA", "Paris, France"],
      correctAnswer: 0,
      explanation: "WHO headquarters is in Geneva, Switzerland."
    },
    {
      question: "How many members does WHO have?",
      options: ["184", "189", "194", "199"],
      correctAnswer: 2,
      explanation: "WHO has 194 member states."
    },
    {
      question: "Who is the current Director General of WHO?",
      options: ["Margaret Chan", "Tedros Adhanom Ghebreyesus", "Gro Harlem Brundtland", "Lee Jong-wook"],
      correctAnswer: 1,
      explanation: "Tedros Adhanom Ghebreyesus is the current Director General of WHO."
    },
    // ============ WTO ============
    {
      question: "When was the World Trade Organization (WTO) founded?",
      options: ["1993", "1994", "1995", "1996"],
      correctAnswer: 2,
      explanation: "The WTO was founded in 1995."
    },
    {
      question: "Where is the headquarters of the WTO?",
      options: ["Geneva, Switzerland", "London, UK", "New York, USA", "Paris, France"],
      correctAnswer: 0,
      explanation: "WTO headquarters is in Geneva, Switzerland."
    },
    {
      question: "How many members does the WTO have?",
      options: ["156", "161", "166", "171"],
      correctAnswer: 2,
      explanation: "The WTO has 166 member states."
    },
    {
      question: "Who is the current Director General of the WTO?",
      options: ["Roberto Azevêdo", "Pascal Lamy", "Ngozi Okonjo-Iweala", "Mike Moore"],
      correctAnswer: 2,
      explanation: "Ngozi Okonjo-Iweala is the current Director General of the WTO."
    },
    // ============ UNESCO ============
    {
      question: "When was UNESCO founded?",
      options: ["1944", "1945", "1946", "1947"],
      correctAnswer: 1,
      explanation: "UNESCO was founded in 1945."
    },
    {
      question: "Where is the headquarters of UNESCO?",
      options: ["Geneva, Switzerland", "London, UK", "New York, USA", "Paris, France"],
      correctAnswer: 3,
      explanation: "UNESCO headquarters is in Paris, France."
    },
    {
      question: "How many members does UNESCO have?",
      options: ["184", "189", "194", "199"],
      correctAnswer: 2,
      explanation: "UNESCO has 194 member states."
    },
    {
      question: "Who is the current Director General of UNESCO?",
      options: ["Irina Bokova", "Audrey Azoulay", "Koïchiro Matsuura", "Federico Mayor"],
      correctAnswer: 1,
      explanation: "Audrey Azoulay is the current Director General of UNESCO."
    },
    // ============ UNICEF ============
    {
      question: "When was UNICEF founded?",
      options: ["1944", "1945", "1946", "1947"],
      correctAnswer: 2,
      explanation: "UNICEF was founded in 1946."
    },
    {
      question: "Where is the headquarters of UNICEF?",
      options: ["Geneva, Switzerland", "London, UK", "New York, USA", "Paris, France"],
      correctAnswer: 2,
      explanation: "UNICEF headquarters is in New York, USA."
    },
    {
      question: "Who is the current Executive Director of UNICEF?",
      options: ["Anthony Lake", "Catherine Russell", "Henrietta Fore", "Carol Bellamy"],
      correctAnswer: 1,
      explanation: "Catherine Russell is the current Executive Director of UNICEF."
    },
    // ============ FAO ============
    {
      question: "When was the Food and Agriculture Organization (FAO) founded?",
      options: ["1944", "1945", "1946", "1947"],
      correctAnswer: 1,
      explanation: "FAO was founded in 1945."
    },
    {
      question: "Where is the headquarters of FAO?",
      options: ["Geneva, Switzerland", "London, UK", "Rome, Italy", "Paris, France"],
      correctAnswer: 2,
      explanation: "FAO headquarters is in Rome, Italy."
    },
    {
      question: "How many members does FAO have?",
      options: ["184", "189", "194", "199"],
      correctAnswer: 2,
      explanation: "FAO has 194 member states."
    },
    {
      question: "Who is the current Director General of FAO?",
      options: ["José Graziano da Silva", "Qu Dongyu", "Jacques Diouf", "Eduardo Rojas-Briales"],
      correctAnswer: 1,
      explanation: "Qu Dongyu is the current Director General of FAO."
    },
    // ============ ILO ============
    {
      question: "When was the International Labour Organization (ILO) founded?",
      options: ["1917", "1918", "1919", "1920"],
      correctAnswer: 2,
      explanation: "ILO was founded in 1919."
    },
    {
      question: "Where is the headquarters of ILO?",
      options: ["Geneva, Switzerland", "London, UK", "New York, USA", "Paris, France"],
      correctAnswer: 0,
      explanation: "ILO headquarters is in Geneva, Switzerland."
    },
    {
      question: "How many members does ILO have?",
      options: ["177", "182", "187", "192"],
      correctAnswer: 2,
      explanation: "ILO has 187 member states."
    },
    {
      question: "Who is the current Director General of ILO?",
      options: ["Guy Ryder", "Gilbert Houngbo", "Juan Somavia", "Michel Hansenne"],
      correctAnswer: 1,
      explanation: "Gilbert Houngbo is the current Director General of ILO."
    },
    // ============ IAEA ============
    {
      question: "When was the International Atomic Energy Agency (IAEA) founded?",
      options: ["1955", "1956", "1957", "1958"],
      correctAnswer: 2,
      explanation: "IAEA was founded in 1957."
    },
    {
      question: "Where is the headquarters of IAEA?",
      options: ["Geneva, Switzerland", "Vienna, Austria", "London, UK", "Paris, France"],
      correctAnswer: 1,
      explanation: "IAEA headquarters is in Vienna, Austria."
    },
    {
      question: "How many members does IAEA have?",
      options: ["168", "173", "178", "183"],
      correctAnswer: 2,
      explanation: "IAEA has 178 member states."
    },
    {
      question: "Who is the current Director General of IAEA?",
      options: ["Mohamed ElBaradei", "Yukiya Amano", "Rafael Grossi", "Hans Blix"],
      correctAnswer: 2,
      explanation: "Rafael Grossi is the current Director General of IAEA."
    },
    // ============ INTERPOL ============
    {
      question: "What is the full name of Interpol?",
      options: ["International Criminal Police Organization", "International Police Organization", "International Crime Police Organization", "International Criminal Police Office"],
      correctAnswer: 0,
      explanation: "Interpol stands for International Criminal Police Organization."
    },
    {
      question: "When was Interpol founded?",
      options: ["1921", "1922", "1923", "1924"],
      correctAnswer: 2,
      explanation: "Interpol was founded in 1923."
    },
    {
      question: "Where is the headquarters of Interpol?",
      options: ["Geneva, Switzerland", "Lyon, France", "London, UK", "Paris, France"],
      correctAnswer: 1,
      explanation: "Interpol headquarters is in Lyon, France."
    },
    {
      question: "How many members does Interpol have?",
      options: ["186", "191", "196", "201"],
      correctAnswer: 2,
      explanation: "Interpol has 196 member states."
    },
    {
      question: "Who is the current President of Interpol?",
      options: ["Ronald K. Noble", "Ahmed Naser Al-Raisi", "Jürgen Stock", "Kim Jong Yang"],
      correctAnswer: 1,
      explanation: "Ahmed Naser Al-Raisi is the current President of Interpol."
    },
    // ============ Additional Mixed Questions ============
    {
      question: "Which organization has the most member states?",
      options: ["UN", "Interpol", "UNESCO", "WHO"],
      correctAnswer: 1,
      explanation: "Interpol has 196 member states, more than the UN's 193."
    },
    {
      question: "Which of these organizations was founded first?",
      options: ["ILO", "UN", "NATO", "WHO"],
      correctAnswer: 0,
      explanation: "ILO was founded in 1919, earlier than the others."
    },
    {
      question: "Which organization is headquartered in Rome, Italy?",
      options: ["WHO", "FAO", "UNESCO", "ILO"],
      correctAnswer: 1,
      explanation: "FAO (Food and Agriculture Organization) is headquartered in Rome, Italy."
    },
    {
      question: "Which of these organizations has no permanent headquarters?",
      options: ["UN", "BRICS", "NATO", "SAARC"],
      correctAnswer: 1,
      explanation: "BRICS has no permanent headquarters."
    },
    {
      question: "Which organization was founded in 1949?",
      options: ["UN", "NATO", "OIC", "SAARC"],
      correctAnswer: 1,
      explanation: "NATO was founded in 1949."
    },
    {
      question: "Which organization is headquartered in Vienna, Austria?",
      options: ["IAEA", "UNESCO", "WTO", "WHO"],
      correctAnswer: 0,
      explanation: "IAEA headquarters is in Vienna, Austria."
    },
    {
      question: "Which organization has the abbreviation 'OIC'?",
      options: ["Organization of Islamic Countries", "Organization of Islamic Cooperation", "Organisation of International Cooperation", "Office of Islamic Cooperation"],
      correctAnswer: 1,
      explanation: "OIC stands for Organization of Islamic Cooperation."
    },
    {
      question: "Which organization is headquartered in Jeddah, Saudi Arabia?",
      options: ["UN", "OIC", "SCO", "ECO"],
      correctAnswer: 1,
      explanation: "The OIC headquarters is in Jeddah, Saudi Arabia."
    },
    {
      question: "Which organization was founded in 1985?",
      options: ["SAARC", "ECO", "Both SAARC and ECO", "Neither"],
      correctAnswer: 2,
      explanation: "Both SAARC and ECO were founded in 1985."
    },
    {
      question: "Which organization is headquartered in Jakarta, Indonesia?",
      options: ["SAARC", "ASEAN", "SCO", "ECO"],
      correctAnswer: 1,
      explanation: "ASEAN headquarters is in Jakarta, Indonesia."
    }
  ]
};

export default quizData;