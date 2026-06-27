// src/scienceData.js - FIA UDC/LDC Preparation - Everyday Science (181 MCQs)
const quizData = {
  title: "FIA UDC/LDC Preparation - Everyday Science",
  description: "Physics • Chemistry • Biology • Inventions (181 Questions)",
  questions: [
    // ============ PART 1 — PHYSICS ============
    {
      question: "SI unit of force:",
      options: ["Pascal", "Watt", "Newton", "Joule"],
      correctAnswer: 2,
      explanation: "The SI unit of force is Newton (N)."
    },
    {
      question: "SI unit of energy:",
      options: ["Pascal", "Newton", "Joule", "Watt"],
      correctAnswer: 2,
      explanation: "The SI unit of energy is Joule (J)."
    },
    {
      question: "SI unit of power:",
      options: ["Watt", "Joule", "Newton", "Pascal"],
      correctAnswer: 0,
      explanation: "The SI unit of power is Watt (W)."
    },
    {
      question: "SI unit of pressure:",
      options: ["Newton", "Joule", "Pascal", "Watt"],
      correctAnswer: 2,
      explanation: "The SI unit of pressure is Pascal (Pa)."
    },
    {
      question: "SI unit of temperature:",
      options: ["Fahrenheit", "Celsius", "Rankine", "Kelvin"],
      correctAnswer: 3,
      explanation: "The SI unit of temperature is Kelvin (K)."
    },
    {
      question: "SI unit of current:",
      options: ["Ohm", "Watt", "Ampere", "Volt"],
      correctAnswer: 2,
      explanation: "The SI unit of electric current is Ampere (A)."
    },
    {
      question: "SI unit of resistance:",
      options: ["Watt", "Volt", "Ohm", "Ampere"],
      correctAnswer: 2,
      explanation: "The SI unit of electrical resistance is Ohm (Ω)."
    },
    {
      question: "SI unit of frequency:",
      options: ["Newton", "Hertz", "Joule", "Watt"],
      correctAnswer: 1,
      explanation: "The SI unit of frequency is Hertz (Hz)."
    },
    {
      question: "SI unit of work:",
      options: ["Newton", "Hertz", "Joule", "Watt"],
      correctAnswer: 2,
      explanation: "The SI unit of work is Joule (J)."
    },
    {
      question: "Speed of light:",
      options: ["3×10^5 km/s", "3×10^6 m/s", "Both B and D", "3×10^8 m/s"],
      correctAnswer: 2,
      explanation: "Speed of light is 3×10^8 m/s and also 3×10^5 km/s."
    },
    {
      question: "Speed of sound in air:",
      options: ["1500 m/s", "330 m/s", "300 m/s", "340 m/s"],
      correctAnswer: 3,
      explanation: "The speed of sound in air is approximately 340 m/s."
    },
    {
      question: "Acceleration due to gravity:",
      options: ["10 m/s²", "8 m/s²", "9.8 m/s²", "9 m/s²"],
      correctAnswer: 2,
      explanation: "Acceleration due to gravity is 9.8 m/s²."
    },
    {
      question: "Newton's first law is also known as:",
      options: ["Energy", "Momentum", "Law of inertia", "Force"],
      correctAnswer: 2,
      explanation: "Newton's first law is also called the law of inertia."
    },
    {
      question: "Newton's second law: F =",
      options: ["ma", "1/2 mv²", "mgh", "mv"],
      correctAnswer: 0,
      explanation: "Newton's second law states F = ma (Force = mass × acceleration)."
    },
    {
      question: "Kinetic energy formula:",
      options: ["mgh", "mc²", "ma", "1/2 mv²"],
      correctAnswer: 3,
      explanation: "Kinetic energy = 1/2 mv²."
    },
    {
      question: "Potential energy formula:",
      options: ["mc²", "ma", "1/2 mv²", "mgh"],
      correctAnswer: 3,
      explanation: "Potential energy = mgh (mass × gravity × height)."
    },
    {
      question: "E = mc² given by:",
      options: ["Bohr", "Einstein", "Galileo", "Newton"],
      correctAnswer: 1,
      explanation: "Einstein gave the famous equation E = mc²."
    },
    {
      question: "Light year is unit of:",
      options: ["Speed", "Energy", "Distance", "Time"],
      correctAnswer: 2,
      explanation: "Light year is a unit of distance."
    },
    {
      question: "1 light year ≈ ___ km:",
      options: ["9.46 × 10^9", "9.46 × 10^6", "9.46 × 10^12", "9.46 × 10^15"],
      correctAnswer: 2,
      explanation: "1 light year ≈ 9.46 × 10^12 km."
    },
    {
      question: "Sound cannot travel through:",
      options: ["Liquid", "Solid", "Vacuum", "Gas"],
      correctAnswer: 2,
      explanation: "Sound cannot travel through a vacuum as it needs a medium."
    },
    {
      question: "Lightning is faster than thunder because:",
      options: ["Sound is slow", "Neither", "Both - Light faster than sound", "Light is faster"],
      correctAnswer: 2,
      explanation: "Light travels faster than sound, so we see lightning before hearing thunder."
    },
    {
      question: "Echo is reflection of:",
      options: ["Light", "Heat", "Sound", "Magnet"],
      correctAnswer: 2,
      explanation: "Echo is the reflection of sound."
    },
    {
      question: "Density of water:",
      options: ["10 g/cm³", "100 g/cm³", "1 g/cm³", "0.5 g/cm³"],
      correctAnswer: 2,
      explanation: "The density of water is 1 g/cm³."
    },
    {
      question: "Boiling point of water (Celsius):",
      options: ["200", "150", "50", "100"],
      correctAnswer: 3,
      explanation: "Water boils at 100°C."
    },
    {
      question: "Freezing point of water:",
      options: ["-10°C", "10°C", "0°C", "32°C"],
      correctAnswer: 2,
      explanation: "Water freezes at 0°C."
    },
    {
      question: "Boiling point of water in Fahrenheit:",
      options: ["100", "180", "212", "250"],
      correctAnswer: 2,
      explanation: "Water boils at 212°F."
    },
    {
      question: "Freezing point of water in Fahrenheit:",
      options: ["100", "0", "32", "-10"],
      correctAnswer: 2,
      explanation: "Water freezes at 32°F."
    },
    {
      question: "Body temperature normal:",
      options: ["99°F", "100°F", "98.6°F", "97°F"],
      correctAnswer: 2,
      explanation: "Normal body temperature is 98.6°F (37°C)."
    },
    {
      question: "Mirror used in shaving:",
      options: ["Plain", "Convex", "Concave", "None"],
      correctAnswer: 2,
      explanation: "Concave mirrors are used in shaving to get a magnified image."
    },
    {
      question: "Mirror in vehicles for rear view:",
      options: ["Plain", "Concave", "Convex", "None"],
      correctAnswer: 2,
      explanation: "Convex mirrors are used in vehicles for rear view as they provide a wider field of view."
    },
    {
      question: "Mirror used by dentist:",
      options: ["Convex", "Plain", "Concave", "None"],
      correctAnswer: 2,
      explanation: "Dentists use concave mirrors to get a magnified view of teeth."
    },
    {
      question: "Lens used in human eye:",
      options: ["Both", "Concave", "Convex", "None"],
      correctAnswer: 2,
      explanation: "The human eye has a convex lens."
    },
    {
      question: "Short-sightedness corrected by:",
      options: ["Both", "Convex lens", "None", "Concave lens"],
      correctAnswer: 3,
      explanation: "Short-sightedness (myopia) is corrected by concave lenses."
    },
    {
      question: "Long-sightedness corrected by:",
      options: ["Convex lens", "Both", "Concave lens", "None"],
      correctAnswer: 0,
      explanation: "Long-sightedness (hyperopia) is corrected by convex lenses."
    },
    {
      question: "Rainbow has how many colors:",
      options: ["8", "6", "5", "7"],
      correctAnswer: 3,
      explanation: "A rainbow has 7 colors (VIBGYOR)."
    },
    {
      question: "First color of rainbow:",
      options: ["Yellow", "Violet", "Red", "Green"],
      correctAnswer: 2,
      explanation: "VIBGYOR - Red is the first color (top) of the rainbow."
    },
    {
      question: "Earth's atmosphere main gas:",
      options: ["CO2", "Hydrogen", "Oxygen", "Nitrogen"],
      correctAnswer: 3,
      explanation: "Nitrogen is the main gas in Earth's atmosphere (~78%)."
    },
    {
      question: "Oxygen in atmosphere:",
      options: ["10%", "35%", "21%", "50%"],
      correctAnswer: 2,
      explanation: "Oxygen is approximately 21% of the atmosphere."
    },
    {
      question: "Ozone protects us from:",
      options: ["Rain", "Cold", "UV rays", "Heat"],
      correctAnswer: 2,
      explanation: "The ozone layer protects us from harmful UV rays."
    },
    {
      question: "Layer where weather occurs:",
      options: ["Mesosphere", "Troposphere", "Ionosphere", "Stratosphere"],
      correctAnswer: 1,
      explanation: "Weather occurs in the troposphere."
    },
    {
      question: "Ozone is found in:",
      options: ["Troposphere", "Mesosphere", "Ionosphere", "Stratosphere"],
      correctAnswer: 3,
      explanation: "The ozone layer is located in the stratosphere."
    },
    {
      question: "Greenhouse effect mainly due to:",
      options: ["Argon", "Oxygen", "CO2", "Nitrogen"],
      correctAnswer: 2,
      explanation: "CO2 is the main gas responsible for the greenhouse effect."
    },
    {
      question: "Hardest natural substance:",
      options: ["Steel", "Iron", "Diamond", "Gold"],
      correctAnswer: 2,
      explanation: "Diamond is the hardest natural substance."
    },
    {
      question: "Lightest metal:",
      options: ["Aluminum", "Lithium", "Hydrogen", "Iron"],
      correctAnswer: 1,
      explanation: "Lithium is the lightest metal."
    },
    {
      question: "Best conductor of electricity:",
      options: ["Silver", "Copper", "Gold", "Iron"],
      correctAnswer: 0,
      explanation: "Silver is the best conductor of electricity."
    },
    {
      question: "Best conductor of heat:",
      options: ["Silver", "Gold", "Iron", "Copper"],
      correctAnswer: 0,
      explanation: "Silver is the best conductor of heat."
    },
    {
      question: "Liquid metal at room temp:",
      options: ["Sodium", "Bromine", "Mercury", "Iron"],
      correctAnswer: 2,
      explanation: "Mercury is the only metal that is liquid at room temperature."
    },
    {
      question: "Earth's escape velocity:",
      options: ["11.2 km/s", "7 km/s", "15 km/s", "9 km/s"],
      correctAnswer: 0,
      explanation: "Earth's escape velocity is 11.2 km/s."
    },
    {
      question: "Pressure unit (besides Pascal):",
      options: ["Bar", "Atmosphere", "Torr", "All these"],
      correctAnswer: 3,
      explanation: "Bar, Atmosphere, and Torr are all units of pressure."

    // ============ PART 2 — CHEMISTRY ============
    },
    {
      question: "Symbol of gold:",
      options: ["Gd", "Ag", "Go", "Au"],
      correctAnswer: 3,
      explanation: "The chemical symbol of gold is Au."
    },
    {
      question: "Symbol of silver:",
      options: ["Au", "Sv", "Ag", "Si"],
      correctAnswer: 2,
      explanation: "The chemical symbol of silver is Ag."
    },
    {
      question: "Symbol of iron:",
      options: ["Ir", "Fe", "In", "I"],
      correctAnswer: 1,
      explanation: "The chemical symbol of iron is Fe."
    },
    {
      question: "Symbol of sodium:",
      options: ["Sn", "So", "Sd", "Na"],
      correctAnswer: 3,
      explanation: "The chemical symbol of sodium is Na."
    },
    {
      question: "Symbol of potassium:",
      options: ["P", "K", "Po", "Pt"],
      correctAnswer: 1,
      explanation: "The chemical symbol of potassium is K."
    },
    {
      question: "Symbol of mercury:",
      options: ["Mr", "Me", "M", "Hg"],
      correctAnswer: 3,
      explanation: "The chemical symbol of mercury is Hg."
    },
    {
      question: "Symbol of lead:",
      options: ["Le", "L", "Pb", "Ld"],
      correctAnswer: 2,
      explanation: "The chemical symbol of lead is Pb."
    },
    {
      question: "Symbol of tin:",
      options: ["Ti", "T", "T", "Sn"],
      correctAnswer: 3,
      explanation: "The chemical symbol of tin is Sn."
    },
    {
      question: "Symbol of copper:",
      options: ["Co", "Cu", "Cp", "C"],
      correctAnswer: 1,
      explanation: "The chemical symbol of copper is Cu."
    },
    {
      question: "Symbol of zinc:",
      options: ["Zi", "Zc", "Zn", "Z"],
      correctAnswer: 2,
      explanation: "The chemical symbol of zinc is Zn."
    },
    {
      question: "Symbol of carbon:",
      options: ["Ca", "Cb", "C", "Cn"],
      correctAnswer: 2,
      explanation: "The chemical symbol of carbon is C."
    },
    {
      question: "Symbol of calcium:",
      options: ["C", "Cl", "Ca", "Cm"],
      correctAnswer: 2,
      explanation: "The chemical symbol of calcium is Ca."
    },
    {
      question: "Atomic number of hydrogen:",
      options: ["3", "2", "4", "1"],
      correctAnswer: 3,
      explanation: "The atomic number of hydrogen is 1."
    },
    {
      question: "Atomic number of helium:",
      options: ["1", "3", "4", "2"],
      correctAnswer: 3,
      explanation: "The atomic number of helium is 2."
    },
    {
      question: "Atomic number of carbon:",
      options: ["8", "4", "12", "6"],
      correctAnswer: 3,
      explanation: "The atomic number of carbon is 6."
    },
    {
      question: "Atomic number of oxygen:",
      options: ["6", "8", "10", "7"],
      correctAnswer: 1,
      explanation: "The atomic number of oxygen is 8."
    },
    {
      question: "Most abundant gas in atmosphere:",
      options: ["O2", "H2", "CO2", "N2"],
      correctAnswer: 3,
      explanation: "Nitrogen (N2) is the most abundant gas in the atmosphere."
    },
    {
      question: "Most abundant element in earth's crust:",
      options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
      correctAnswer: 0,
      explanation: "Oxygen is the most abundant element in Earth's crust."
    },
    {
      question: "Most abundant metal in earth's crust:",
      options: ["Iron", "Aluminum", "Gold", "Copper"],
      correctAnswer: 1,
      explanation: "Aluminum is the most abundant metal in Earth's crust."
    },
    {
      question: "Most abundant element in universe:",
      options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
      correctAnswer: 1,
      explanation: "Hydrogen is the most abundant element in the universe."
    },
    {
      question: "Chemical formula of water:",
      options: ["H2O", "HO2", "H3O", "H2O2"],
      correctAnswer: 0,
      explanation: "The chemical formula of water is H2O."
    },
    {
      question: "Chemical formula of common salt:",
      options: ["NaCl", "KCl", "MgCl", "CaCl"],
      correctAnswer: 0,
      explanation: "The chemical formula of common salt is NaCl."
    },
    {
      question: "Chemical formula of sugar:",
      options: ["C12H22O11", "C6H12O6", "CO2", "CH3OH"],
      correctAnswer: 0,
      explanation: "The chemical formula of sugar (sucrose) is C12H22O11."
    },
    {
      question: "Glucose formula:",
      options: ["C12H22O11", "CH3OH", "C6H12O6", "CO2"],
      correctAnswer: 2,
      explanation: "The chemical formula of glucose is C6H12O6."
    },
    {
      question: "Vinegar contains:",
      options: ["Citric acid", "Tartaric acid", "Acetic acid", "Sulfuric"],
      correctAnswer: 2,
      explanation: "Vinegar contains acetic acid."
    },
    {
      question: "Lemon contains:",
      options: ["Acetic acid", "Tartaric acid", "Citric acid", "Sulfuric"],
      correctAnswer: 2,
      explanation: "Lemon contains citric acid."
    },
    {
      question: "Battery acid:",
      options: ["HNO3", "HCl", "H2SO4", "CH3COOH"],
      correctAnswer: 2,
      explanation: "Battery acid is sulfuric acid (H2SO4)."
    },
    {
      question: "Stomach acid:",
      options: ["H2SO4", "HCl", "HNO3", "CH3COOH"],
      correctAnswer: 1,
      explanation: "Stomach acid is hydrochloric acid (HCl)."
    },
    {
      question: "Aqua regia is mixture of:",
      options: ["HNO3 + H2SO4", "HCl + H2SO4", "HCl + HNO3", "All"],
      correctAnswer: 2,
      explanation: "Aqua regia is a mixture of HCl and HNO3 (1:3 ratio)."
    },
    {
      question: "Laughing gas is:",
      options: ["N2", "NO2", "NO", "N2O"],
      correctAnswer: 3,
      explanation: "Laughing gas is nitrous oxide (N2O)."
    },
    {
      question: "Marsh gas is:",
      options: ["Methane", "Ethane", "Butane", "Propane"],
      correctAnswer: 0,
      explanation: "Marsh gas is methane."
    },
    {
      question: "Dry ice is:",
      options: ["Solid H2O", "Solid N2", "Solid O2", "Solid CO2"],
      correctAnswer: 3,
      explanation: "Dry ice is solid carbon dioxide (CO2)."
    },
    {
      question: "Heaviest natural element:",
      options: ["Uranium", "Gold", "Lead", "Plutonium"],
      correctAnswer: 0,
      explanation: "Uranium is the heaviest natural element."
    },
    {
      question: "Total elements in periodic table (current):",
      options: ["112", "118", "125", "120"],
      correctAnswer: 1,
      explanation: "There are currently 118 known elements in the periodic table."
    },
    {
      question: "First element of periodic table:",
      options: ["Hydrogen", "Lithium", "Helium", "Carbon"],
      correctAnswer: 0,
      explanation: "Hydrogen is the first element in the periodic table."
    },
    {
      question: "pH of pure water:",
      options: ["5", "8", "6", "7"],
      correctAnswer: 3,
      explanation: "The pH of pure water is 7 (neutral)."
    },
    {
      question: "pH below 7 is:",
      options: ["Neutral", "Basic", "Acidic", "None"],
      correctAnswer: 2,
      explanation: "A pH below 7 indicates acidity."
    },
    {
      question: "pH above 7 is:",
      options: ["Acidic", "Basic/Alkaline", "Neutral", "None"],
      correctAnswer: 1,
      explanation: "A pH above 7 indicates basic/alkaline."
    },
    {
      question: "Litmus paper turns red in:",
      options: ["Acid", "Salt", "Water", "Base"],
      correctAnswer: 0,
      explanation: "Litmus paper turns red in acidic solutions."
    },
    {
      question: "Litmus paper turns blue in:",
      options: ["Acid", "Base", "Salt", "Water"],
      correctAnswer: 1,
      explanation: "Litmus paper turns blue in basic/alkaline solutions."
    },
    {
      question: "Bleaching powder formula:",
      options: ["NaCl", "NaOH", "CaOCl2", "Ca(OH)2"],
      correctAnswer: 2,
      explanation: "Bleaching powder is CaOCl2."
    },
    {
      question: "Common name of NaHCO3:",
      options: ["Washing soda", "Lime", "Baking soda", "Salt"],
      correctAnswer: 2,
      explanation: "NaHCO3 is commonly known as baking soda."
    },
    {
      question: "Common name of Na2CO3:",
      options: ["Baking soda", "Washing soda", "Salt", "Lime"],
      correctAnswer: 1,
      explanation: "Na2CO3 is commonly known as washing soda."
    },
    {
      question: "Diamond is allotrope of:",
      options: ["Carbon", "Boron", "Silicon", "Nitrogen"],
      correctAnswer: 0,
      explanation: "Diamond is an allotrope of carbon."
    },
    {
      question: "Graphite is allotrope of:",
      options: ["Carbon", "Silicon", "Boron", "Nitrogen"],
      correctAnswer: 0,
      explanation: "Graphite is an allotrope of carbon."

    // ============ PART 3 — BIOLOGY & HUMAN BODY ============
    },
    {
      question: "Number of bones in adult human:",
      options: ["210", "200", "220", "206"],
      correctAnswer: 3,
      explanation: "An adult human has 206 bones."
    },
    {
      question: "Number of bones in baby:",
      options: ["206", "270", "300", "350"],
      correctAnswer: 2,
      explanation: "A baby has approximately 300 bones."
    },
    {
      question: "Largest bone in body:",
      options: ["Femur", "Skull", "Tibia", "Spine"],
      correctAnswer: 0,
      explanation: "The femur is the largest bone in the human body."
    },
    {
      question: "Smallest bone:",
      options: ["Femur", "Stapes", "Hammer", "Anvil"],
      correctAnswer: 1,
      explanation: "The stapes (in the ear) is the smallest bone in the body."
    },
    {
      question: "Hardest substance in body:",
      options: ["Bone", "Tooth Enamel", "Skin", "Nail"],
      correctAnswer: 1,
      explanation: "Tooth enamel is the hardest substance in the human body."
    },
    {
      question: "Number of teeth in adult:",
      options: ["30", "28", "34", "32"],
      correctAnswer: 3,
      explanation: "An adult has 32 teeth."
    },
    {
      question: "Number of milk teeth:",
      options: ["18", "20", "22", "24"],
      correctAnswer: 1,
      explanation: "A child has 20 milk teeth."
    },
    {
      question: "Number of chambers in heart:",
      options: ["2", "5", "3", "4"],
      correctAnswer: 3,
      explanation: "The human heart has 4 chambers."
    },
    {
      question: "Normal heart rate per min:",
      options: ["50-60", "100-120", "60-100", "120-150"],
      correctAnswer: 2,
      explanation: "Normal heart rate is 60-100 beats per minute."
    },
    {
      question: "Normal blood pressure:",
      options: ["100/60", "140/90", "120/80", "90/60"],
      correctAnswer: 2,
      explanation: "Normal blood pressure is 120/80 mmHg."
    },
    {
      question: "Number of blood groups:",
      options: ["3", "8", "2", "4"],
      correctAnswer: 3,
      explanation: "There are 4 blood groups: A, B, AB, and O."
    },
    {
      question: "Universal blood donor:",
      options: ["B", "O", "A", "AB"],
      correctAnswer: 1,
      explanation: "O negative is the universal blood donor."
    },
    {
      question: "Universal blood recipient:",
      options: ["O", "B", "A", "AB"],
      correctAnswer: 3,
      explanation: "AB positive is the universal blood recipient."
    },
    {
      question: "Average blood in adult body:",
      options: ["3 L", "7 L", "5 L", "10 L"],
      correctAnswer: 2,
      explanation: "Average blood volume in an adult is approximately 5 liters."
    },
    {
      question: "RBC produced in:",
      options: ["Bone marrow", "Heart", "Liver", "Kidney"],
      correctAnswer: 0,
      explanation: "Red blood cells are produced in bone marrow."
    },
    {
      question: "RBC lifespan:",
      options: ["30 days", "60 days", "120 days", "365 days"],
      correctAnswer: 2,
      explanation: "Red blood cells live approximately 120 days."
    },
    {
      question: "Hemoglobin contains:",
      options: ["Copper", "Zinc", "Iron", "Calcium"],
      correctAnswer: 2,
      explanation: "Hemoglobin contains iron."
    },
    {
      question: "Largest organ:",
      options: ["Liver", "Skin", "Lungs", "Heart"],
      correctAnswer: 1,
      explanation: "The skin is the largest organ in the human body."
    },
    {
      question: "Largest internal organ:",
      options: ["Heart", "Lungs", "Liver", "Kidney"],
      correctAnswer: 2,
      explanation: "The liver is the largest internal organ."
    },
    {
      question: "Smallest organ:",
      options: ["Pineal", "Pituitary", "Thyroid", "Adrenal"],
      correctAnswer: 1,
      explanation: "The pituitary gland is the smallest organ."
    },
    {
      question: "Master gland:",
      options: ["Pineal", "Pituitary", "Thyroid", "Adrenal"],
      correctAnswer: 1,
      explanation: "The pituitary gland is called the master gland."
    },
    {
      question: "Insulin produced by:",
      options: ["Liver", "Pancreas", "Kidney", "Stomach"],
      correctAnswer: 1,
      explanation: "Insulin is produced by the pancreas."
    },
    {
      question: "Bile produced by:",
      options: ["Liver", "Pancreas", "Gallbladder", "Stomach"],
      correctAnswer: 0,
      explanation: "Bile is produced by the liver."
    },
    {
      question: "Bile stored in:",
      options: ["Liver", "Gallbladder", "Pancreas", "Stomach"],
      correctAnswer: 1,
      explanation: "Bile is stored in the gallbladder."
    },
    {
      question: "Number of ribs:",
      options: ["20", "24", "22", "26"],
      correctAnswer: 1,
      explanation: "There are 24 ribs (12 pairs)."
    },
    {
      question: "Vertebrae in spine:",
      options: ["31", "33", "35", "37"],
      correctAnswer: 1,
      explanation: "There are 33 vertebrae in the human spine."
    },
    {
      question: "Number of muscles:",
      options: ["~400", "~600", "~800", "~1000"],
      correctAnswer: 1,
      explanation: "There are approximately 600 muscles in the human body."
    },
    {
      question: "Strongest muscle:",
      options: ["Heart", "Tongue", "Jaw", "All claimed"],
      correctAnswer: 3,
      explanation: "Various claims exist for the strongest muscle (jaw/heart/tongue)."
    },
    {
      question: "Vitamin A deficiency causes:",
      options: ["Scurvy", "Rickets", "Night blindness", "Beriberi"],
      correctAnswer: 2,
      explanation: "Vitamin A deficiency causes night blindness."
    },
    {
      question: "Vitamin B1 deficiency causes:",
      options: ["Scurvy", "Rickets", "Night blindness", "Beriberi"],
      correctAnswer: 3,
      explanation: "Vitamin B1 deficiency causes beriberi."
    },
    {
      question: "Vitamin C deficiency causes:",
      options: ["Night blindness", "Rickets", "Scurvy", "Beriberi"],
      correctAnswer: 2,
      explanation: "Vitamin C deficiency causes scurvy."
    },
    {
      question: "Vitamin D deficiency causes:",
      options: ["Night blindness", "Scurvy", "Rickets", "Beriberi"],
      correctAnswer: 2,
      explanation: "Vitamin D deficiency causes rickets."
    },
    {
      question: "Vitamin K deficiency causes:",
      options: ["Anemia", "Scurvy", "Bleeding", "Rickets"],
      correctAnswer: 2,
      explanation: "Vitamin K deficiency causes bleeding issues."
    },
    {
      question: "Source of Vitamin C:",
      options: ["Eggs", "Citrus fruits", "Carrot", "Milk"],
      correctAnswer: 1,
      explanation: "Citrus fruits are a rich source of Vitamin C."
    },
    {
      question: "Vitamin from sunlight:",
      options: ["A", "B", "C", "D"],
      correctAnswer: 3,
      explanation: "Vitamin D is produced by the body from sunlight."
    },
    {
      question: "Iron deficiency causes:",
      options: ["Goiter", "Rickets", "Anemia", "Scurvy"],
      correctAnswer: 2,
      explanation: "Iron deficiency causes anemia."
    },
    {
      question: "Iodine deficiency causes:",
      options: ["Goiter", "Anemia", "Rickets", "Scurvy"],
      correctAnswer: 0,
      explanation: "Iodine deficiency causes goiter."
    },
    {
      question: "Pregnancy duration in humans:",
      options: ["8 months", "9 months", "10 months", "12 months"],
      correctAnswer: 1,
      explanation: "Human pregnancy lasts approximately 9 months."
    },
    {
      question: "Largest cell in human body:",
      options: ["Sperm", "Nerve cell", "Egg/Ovum", "RBC"],
      correctAnswer: 2,
      explanation: "The egg (ovum) is the largest cell in the human body."
    },
    {
      question: "Smallest cell in human body:",
      options: ["Sperm", "RBC", "Egg", "Nerve"],
      correctAnswer: 0,
      explanation: "The sperm is the smallest cell in the human body."
    },
    {
      question: "Longest cell:",
      options: ["Sperm", "Nerve", "Egg", "RBC"],
      correctAnswer: 1,
      explanation: "The nerve cell is the longest cell in the human body."
    },
    {
      question: "Number of chromosomes in humans:",
      options: ["44", "46", "48", "50"],
      correctAnswer: 1,
      explanation: "Humans have 46 chromosomes (23 pairs)."
    },
    {
      question: "DNA full form:",
      options: ["Diribonucleic acid", "Deoxyribonucleic acid", "Deoxyribose", "None"],
      correctAnswer: 1,
      explanation: "DNA stands for Deoxyribonucleic acid."
    },
    {
      question: "DNA discovered by:",
      options: ["Newton", "Watson & Crick", "Mendel", "Darwin"],
      correctAnswer: 1,
      explanation: "Watson and Crick discovered the structure of DNA."
    },
    {
      question: "Photosynthesis takes place in:",
      options: ["Roots", "Stem", "Leaves", "Flower"],
      correctAnswer: 2,
      explanation: "Photosynthesis takes place in the leaves."
    },
    {
      question: "Green color in leaves due to:",
      options: ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
      correctAnswer: 0,
      explanation: "Chlorophyll gives leaves their green color."
    },
    {
      question: "Plants take ___ and release ___:",
      options: ["N2/O2", "O2/CO2", "CO2/O2", "H2/O2"],
      correctAnswer: 2,
      explanation: "Plants take in CO2 and release O2 during photosynthesis."
    },
    {
      question: "Largest mammal:",
      options: ["Elephant", "Blue whale", "Giraffe", "Rhino"],
      correctAnswer: 1,
      explanation: "The blue whale is the largest mammal."
    },
    {
      question: "Largest land animal:",
      options: ["Elephant", "Whale", "Giraffe", "Rhino"],
      correctAnswer: 0,
      explanation: "The elephant is the largest land animal."
    },
    {
      question: "Tallest animal:",
      options: ["Elephant", "Giraffe", "Whale", "Camel"],
      correctAnswer: 1,
      explanation: "The giraffe is the tallest animal."
    },
    {
      question: "Fastest animal on land:",
      options: ["Lion", "Cheetah", "Tiger", "Horse"],
      correctAnswer: 1,
      explanation: "The cheetah is the fastest land animal."
    },
    {
      question: "Fastest bird:",
      options: ["Eagle", "Falcon", "Sparrow", "Hawk"],
      correctAnswer: 1,
      explanation: "The peregrine falcon is the fastest bird."
    },
    {
      question: "Disease caused by mosquito:",
      options: ["Malaria", "TB", "Cholera", "Measles"],
      correctAnswer: 0,
      explanation: "Malaria is caused by mosquito bites."
    },
    {
      question: "Dengue is spread by:",
      options: ["Anopheles", "Culex", "Fly", "Aedes mosquito"],
      correctAnswer: 3,
      explanation: "Dengue is spread by the Aedes mosquito."
    },
    {
      question: "TB caused by:",
      options: ["Virus", "Bacteria", "Fungus", "Protozoa"],
      correctAnswer: 1,
      explanation: "Tuberculosis (TB) is caused by bacteria."
    },
    {
      question: "AIDS caused by:",
      options: ["HPV", "HIV", "HBV", "HSV"],
      correctAnswer: 1,
      explanation: "AIDS is caused by HIV."
    },
    {
      question: "COVID-19 caused by:",
      options: ["Bacteria", "Fungus", "Virus (SARS-CoV-2)", "Parasite"],
      correctAnswer: 2,
      explanation: "COVID-19 is caused by the SARS-CoV-2 virus."
    },
    {
      question: "First COVID case (year):",
      options: ["2018", "2020", "2021", "2019"],
      correctAnswer: 3,
      explanation: "The first COVID-19 case was reported in 2019."
    },
    {
      question: "Bird flu virus:",
      options: ["H1N1", "H5N1", "Ebola", "MERS"],
      correctAnswer: 1,
      explanation: "Bird flu is caused by the H5N1 virus."
    },
    {
      question: "Swine flu virus:",
      options: ["H5N1", "Ebola", "MERS", "H1N1"],
      correctAnswer: 3,
      explanation: "Swine flu is caused by the H1N1 virus."
    },
    {
      question: "Father of microbiology:",
      options: ["Fleming", "Koch", "Newton", "Louis Pasteur"],
      correctAnswer: 3,
      explanation: "Louis Pasteur is the father of microbiology."

    // ============ PART 4 — INVENTIONS & DISCOVERIES ============
    },
    {
      question: "Telephone invented by:",
      options: ["Edison", "Marconi", "Tesla", "Bell"],
      correctAnswer: 3,
      explanation: "Alexander Graham Bell invented the telephone."
    },
    {
      question: "Bulb invented by:",
      options: ["Bell", "Edison", "Tesla", "Marconi"],
      correctAnswer: 1,
      explanation: "Thomas Edison invented the light bulb."
    },
    {
      question: "Radio invented by:",
      options: ["Bell", "Edison", "Marconi", "Tesla"],
      correctAnswer: 2,
      explanation: "Guglielmo Marconi invented the radio."
    },
    {
      question: "Television invented by:",
      options: ["Baird", "Bell", "Edison", "Tesla"],
      correctAnswer: 0,
      explanation: "John Logie Baird invented the television."
    },
    {
      question: "Steam engine invented by:",
      options: ["Newton", "James Watt", "Faraday", "Edison"],
      correctAnswer: 1,
      explanation: "James Watt invented the steam engine."
    },
    {
      question: "Printing press invented by:",
      options: ["Gutenberg", "Bell", "Edison", "Watt"],
      correctAnswer: 0,
      explanation: "Johannes Gutenberg invented the printing press."
    },
    {
      question: "X-ray discovered by:",
      options: ["Curie", "Roentgen", "Becquerel", "Newton"],
      correctAnswer: 1,
      explanation: "Wilhelm Roentgen discovered X-rays."
    },
    {
      question: "Radioactivity discovered by:",
      options: ["Roentgen", "Becquerel", "Curie", "Newton"],
      correctAnswer: 1,
      explanation: "Henri Becquerel discovered radioactivity."
    },
    {
      question: "Radium discovered by:",
      options: ["Roentgen", "Marie Curie", "Becquerel", "Newton"],
      correctAnswer: 1,
      explanation: "Marie Curie discovered radium."
    },
    {
      question: "Atom theory by:",
      options: ["Dalton", "Newton", "Bohr", "Einstein"],
      correctAnswer: 0,
      explanation: "John Dalton proposed the atomic theory."
    },
    {
      question: "Aeroplane invented by:",
      options: ["Wright Bros", "Edison", "Bell", "Watt"],
      correctAnswer: 0,
      explanation: "The Wright Brothers invented the aeroplane."
    },
    {
      question: "First successful flight in:",
      options: ["1900", "1903", "1910", "1920"],
      correctAnswer: 1,
      explanation: "The first successful flight was in 1903."
    },
    {
      question: "Penicillin discovered by:",
      options: ["Fleming", "Pasteur", "Koch", "Newton"],
      correctAnswer: 0,
      explanation: "Alexander Fleming discovered penicillin."
    },
    {
      question: "Vaccination discovered by:",
      options: ["Edward Jenner", "Pasteur", "Fleming", "Newton"],
      correctAnswer: 0,
      explanation: "Edward Jenner discovered vaccination."
    },
    {
      question: "Polio vaccine by:",
      options: ["Salk", "Pasteur", "Fleming", "Jenner"],
      correctAnswer: 0,
      explanation: "Jonas Salk developed the polio vaccine."
    },
    {
      question: "Theory of evolution by:",
      options: ["Darwin", "Mendel", "Newton", "Lamarck"],
      correctAnswer: 0,
      explanation: "Charles Darwin proposed the theory of evolution."
    },
    {
      question: "Laws of heredity by:",
      options: ["Darwin", "Mendel", "Newton", "Lamarck"],
      correctAnswer: 1,
      explanation: "Gregor Mendel discovered the laws of heredity."
    },
    {
      question: "Theory of relativity by:",
      options: ["Newton", "Einstein", "Bohr", "Galileo"],
      correctAnswer: 1,
      explanation: "Albert Einstein gave the theory of relativity."
    },
    {
      question: "Law of gravitation by:",
      options: ["Einstein", "Newton", "Bohr", "Galileo"],
      correctAnswer: 1,
      explanation: "Isaac Newton discovered the law of gravitation."
    },
    {
      question: "Periodic table given by:",
      options: ["Mendeleev", "Dalton", "Bohr", "Newton"],
      correctAnswer: 0,
      explanation: "Dmitri Mendeleev created the periodic table."
    },
    {
      question: "Telescope invented by:",
      options: ["Galileo", "Newton", "Edison", "Bell"],
      correctAnswer: 0,
      explanation: "Galileo improved the telescope."
    },
    {
      question: "Computer (modern) father:",
      options: ["Babbage", "Newton", "Edison", "Turing"],
      correctAnswer: 0,
      explanation: "Charles Babbage is the father of the computer."
    },
    {
      question: "WWW invented by:",
      options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Vint Cerf"],
      correctAnswer: 0,
      explanation: "Tim Berners-Lee invented the World Wide Web."
    },
    {
      question: "Email invented by:",
      options: ["Tomlinson", "Gates", "Jobs", "Lee"],
      correctAnswer: 0,
      explanation: "Ray Tomlinson invented email."
    },
    {
      question: "First test-tube baby year:",
      options: ["1968", "1978", "1988", "1998"],
      correctAnswer: 1,
      explanation: "The first test-tube baby was born in 1978."
    },
    {
      question: "Father of green revolution:",
      options: ["Borlaug", "Newton", "Mendel", "Darwin"],
      correctAnswer: 0,
      explanation: "Norman Borlaug is the father of the green revolution."
    }
  ]
};

export default quizData;