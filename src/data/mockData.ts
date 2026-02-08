export const EXAM_CATEGORIES = {
    ssc: {
        id: "ssc",
        title: "SSC CGL / CHSL",
        description: "Staff Selection Commission Exams",
        subjects: [
            { id: "quant", title: "Quantitative Aptitude", icon: "Calculator" },
            { id: "reasoning", title: "General Intelligence", icon: "Brain" },
            { id: "english", title: "English Language", icon: "BookA" },
            { id: "gk", title: "General Awareness", icon: "Globe" },
        ],
    },
    upsc: {
        id: "upsc",
        title: "UPSC Civil Services",
        description: "IAS / IPS / IFS Preparation",
        subjects: [
            { id: "history", title: "History", icon: "Scroll" },
            { id: "polity", title: "Polity", icon: "Scale" },
            { id: "geography", title: "Geography", icon: "Map" },
            { id: "economy", title: "Indian Economy", icon: "TrendingUp" },
            { id: "csat", title: "CSAT (Paper II)", icon: "BrainCircuit" },
        ],
    },
    banking: {
        id: "banking",
        title: "Banking Exams",
        description: "IBPS PO / Clerk / SBI",
        subjects: [
            { id: "quant", title: "Data Analysis & Quant", icon: "BarChart" },
            { id: "reasoning", title: "Reasoning Ability", icon: "Brain" },
            { id: "english", title: "English Language", icon: "BookA" },
            { id: "banking_awareness", title: "Banking Awareness", icon: "Landmark" },
        ],
    },
};

export const SUBJECT_CONTENT = {
    // === QUANTITATIVE APTITUDE ===
    quant: [
        {
            id: "q1",
            title: "Number System",
            description: "Classification of numbers, divisibility rules.",
            type: "video",
            url: "https://www.youtube.com/embed/5K-H8x3u8jM", // Khan Academy: Number System
        },
        {
            id: "q2",
            title: "Percentage & Fractions",
            description: "Concept of % change and conversions.",
            type: "video",
            url: "https://www.youtube.com/embed/tyO6p483I3s", // Khan Academy: Percentages
        },
        {
            id: "q3",
            title: "Profit, Loss & Discount",
            description: "CP, SP, MP and successsive discounts.",
            type: "notes",
            content: `
# Profit and Loss Formulas
1. Profit = Selling Price (SP) - Cost Price (CP)
2. Loss = Cost Price (CP) - Selling Price (SP)
3. Profit % = (Profit / CP) * 100
4. Loss % = (Loss / CP) * 100

## Example
If CP = 100 and SP = 120, Profit = 20.
Profit % = (20/100)*100 = 20%.
            `,
        },
        {
            id: "q4",
            title: "Simple & Compound Interest",
            description: "Formulas and difference between SI/CI.",
            type: "quiz",
            questionCount: 15,
        },
        {
            id: "q5",
            title: "Time & Work",
            description: "Efficiency method and pipe/cisterns.",
            type: "video",
            url: "https://www.youtube.com/embed/KE7tQf9spPg", // Organic Chemistry Tutor (Reliable)
        },
    ],

    // === REASONING ===
    reasoning: [
        {
            id: "r1",
            title: "Syllogism",
            description: "Logic based questions (All A are B).",
            type: "video",
            url: "https://www.youtube.com/embed/M0p6qTjV_uM", // FeelFreeToLearn
        },
        {
            id: "r2",
            title: "Coding-Decoding",
            description: "Letter shifting and substitution.",
            type: "notes",
            content: "Check for opposite letters (A-Z, B-Y...)",
        },
        {
            id: "r3",
            title: "Blood Relations",
            description: "Family tree problems.",
            type: "video",
            url: "https://www.youtube.com/embed/UrOpK8gA9-U", // FeelFreeToLearn
        },
    ],

    // === ENGLISH ===
    english: [
        {
            id: "e1",
            title: "Grammar: Tenses",
            description: "Rules of present, past, and future tense.",
            type: "video",
            url: "https://www.youtube.com/embed/AeE68dvy8F4", // English with Lucy (Usually safe) or similar
        },
        {
            id: "e2",
            title: "Subject-Verb Agreement",
            description: "Singular/Plural rules.",
            type: "notes",
            content: "If two subjects are joined by 'and', use a plural verb.",
        },
    ],

    // === HISTORY (UPSC) ===
    history: [
        {
            id: "h1",
            title: "Indus Valley Civilization",
            description: "Ancient History: Harappa & Mohenjo-Daro.",
            type: "video",
            url: "https://www.youtube.com/embed/AvFl6UBZLv4", // CrashCourse History
        },
        {
            id: "h2",
            title: "The Mughal Empire",
            description: "Rise and fall of Mughals.",
            type: "video",
            url: "https://www.youtube.com/embed/nNmE1ghJ4vU", // CrashCourse
        },
        {
            id: "h3",
            title: "Indian National Movement",
            description: "Gandhian Era and independence.",
            type: "notes",
            content: "Gandhi returned to India in 1915 from South Africa...",
        },
    ],

    // === POLITY (UPSC) ===
    polity: [
        {
            id: "p1",
            title: "Making of the Constitution",
            description: "Constituent Assembly debates.",
            type: "video",
            url: "https://www.youtube.com/embed/eWp03d-8r0E", // Rajya Sabha TV (Official) - usually embeddable
        },
        {
            id: "p2",
            title: "Fundamental Rights (Art 12-35)",
            description: "Magna Carta of India.",
            type: "notes",
            content: "Right to Equality (14-18), Freedom (19-22)...",
        },
    ],

    // === GEOGRAPHY ===
    geography: [
        {
            id: "g1",
            title: "Structure of the Earth",
            description: "Crust, Mantle, Core.",
            type: "video",
            url: "https://www.youtube.com/embed/WW2O_wE2g_o", // Nat Geo/Educational
        },
        {
            id: "g2",
            title: "Indian River Systems",
            description: "Himalayan vs Peninsular rivers.",
            type: "notes",
            content: "Ganga system includes Yamuna, Ghaghara...",
        },
    ],

    // === ECONOMY ===
    economy: [
        {
            id: "ec1",
            title: "GDP and National Income",
            description: "Understanding economic growth metrics.",
            type: "video",
            url: "https://www.youtube.com/embed/1vRzL1y_sT0", // Khan Academy
        },
    ],

    // === BANKING AWARENESS ===
    banking_awareness: [
        {
            id: "ba1",
            title: "History of Banking in India",
            description: "Pre and Post Independence banking.",
            type: "notes",
            content: "SBI was previously Imperial Bank of India...",
        },
    ],

    // === GENERAL AWARENESS ===
    gk: [
        { id: "gk1", title: "Current Affairs: Jan 2025", description: "Monthly Recap", type: "notes", content: "..." },
        { id: "gk2", title: "Awards & Honours", description: "Padma Awards, Nobel Prize", type: "quiz", questionCount: 20 },
    ]
};

export const MOCK_TESTS = [
    {
        id: "mock1",
        title: "SSC CGL Tier 1 - Full Mock 1",
        category: "ssc",
        questions: 100,
        duration: 60, // minutes
        difficulty: "Medium",
    },
    {
        id: "mock2",
        title: "UPSC Prelims - GS Paper 1",
        category: "upsc",
        questions: 100,
        duration: 120,
        difficulty: "Hard",
    },
    {
        id: "mock3",
        title: "IBPS PO Prelims",
        category: "banking",
        questions: 100,
        duration: 60,
        difficulty: "High",
    },
];
