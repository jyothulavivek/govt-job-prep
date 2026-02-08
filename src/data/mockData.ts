export const EXAM_CATEGORIES = {
    ssc: {
        id: "ssc",
        title: "SSC Exams (CGL/CHSL)",
        description: "Staff Selection Commission",
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
        description: "IAS/IPS/IFS Preparation",
        subjects: [
            { id: "history", title: "History", icon: "Scroll" },
            { id: "polity", title: "Polity", icon: "Scale" },
            { id: "geography", title: "Geography", icon: "Map" },
            { id: "economy", title: "Economy", icon: "TrendingUp" },
            { id: "csat", title: "CSAT (Paper II)", icon: "BrainCircuit" },
        ],
    },
    banking: {
        id: "banking",
        title: "Banking Exams",
        description: "IBPS / SBI PO & Clerk",
        subjects: [
            { id: "quant", title: "Data Analysis & Quant", icon: "BarChart" },
            { id: "reasoning", title: "Reasoning Ability", icon: "Brain" },
            { id: "english", title: "English Language", icon: "BookA" },
            { id: "banking_awareness", title: "Banking Awareness", icon: "Landmark" },
        ],
    },
};

export const SUBJECT_CONTENT = {
    // QUANT (Maths - Common for SSC/Banking)
    quant: [
        {
            id: "q1",
            title: "Number System",
            description: "Classification of numbers, divisibility rules.",
            type: "video",
            url: "https://www.youtube.com/embed/5K-H8x3u8jM", // Valid Khan Academy/Edu
        },
        {
            id: "q2",
            title: "Percentage",
            description: "Concept of % change and fractions.",
            type: "video",
            url: "https://www.youtube.com/embed/YyqQ669-eMs",
        },
        {
            id: "q3",
            title: "Profit, Loss & Discount",
            description: "CP, SP, MP and successsive discounts.",
            type: "notes",
            content: "Profit % = (Profit/CP) * 100...",
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
            url: "https://www.youtube.com/embed/KE7tQf9spPg",
        },
        {
            id: "q6",
            title: "Time, Speed & Distance",
            description: "Trains, boats, and streams.",
            type: "notes",
            content: "Relative speed difference...",
        },
    ],

    // REASONING
    reasoning: [
        {
            id: "r1",
            title: "Alphanumeric Series",
            description: "Missing terms in series.",
            type: "video",
            url: "https://www.youtube.com/embed/M0p6qTjV_uM",
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
            title: "Syllogism",
            description: "Statement and conclusions.",
            type: "quiz",
            questionCount: 10,
        },
        {
            id: "r4",
            title: "Blood Relations",
            description: "Family tree problems.",
            type: "video",
            url: "https://www.youtube.com/embed/UrOpK8gA9-U",
        },
        {
            id: "r5",
            title: "Puzzles & Seating Arrangement",
            description: "Linear and circular arrangement.",
            type: "notes",
            content: "Start with definite information...",
        },
    ],

    // ENGLISH
    english: [
        {
            id: "e1",
            title: "Grammar: Tenses",
            description: "Rules of present, past, and future tense.",
            type: "video",
            url: "https://www.youtube.com/embed/Julz9_MGvQ8",
        },
        {
            id: "e2",
            title: "Subject-Verb Agreement",
            description: "Singular/Plural rules.",
            type: "notes",
            content: "If two subjects are joined by 'and'...",
        },
        {
            id: "e3",
            title: "Reading Comprehension",
            description: "Strategies to solve RC passages.",
            type: "quiz",
            questionCount: 5,
        },
        {
            id: "e4",
            title: "Vocabulary: Root Words",
            description: "Etymology based learning.",
            type: "video",
            url: "https://www.youtube.com/embed/I0Y2o2jXvfw",
        },
    ],

    // HISTORY (UPSC)
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
            title: "Vedic Age & Buddhism/Jainism",
            description: "Religious movements in Ancient India.",
            type: "notes",
            content: "Vedic period is divided into Early and Later...",
        },
        {
            id: "h3",
            title: "Mughal Empire",
            description: "Administration and Architecture.",
            type: "quiz",
            questionCount: 10,
        },
        {
            id: "h4",
            title: "Modern History: 1857 Revolt",
            description: "First war of independence.",
            type: "video",
            url: "https://www.youtube.com/embed/2yC3O4Y8sSg",
        },
        {
            id: "h5",
            title: "Indian National Movement",
            description: "Gandhi's Era, Non-Cooperation, Quit India.",
            type: "notes",
            content: "Gandhi returned to India in 1915...",
        },
    ],

    // POLITY (UPSC)
    polity: [
        {
            id: "p1",
            title: "Making of the Constitution",
            description: "Constituent Assembly debates.",
            type: "video",
            url: "https://www.youtube.com/embed/eWp03d-8r0E",
        },
        {
            id: "p2",
            title: "Fundamental Rights",
            description: "Articles 12-35.",
            type: "notes",
            content: "Right to Equality, Freedom, etc.",
        },
        {
            id: "p3",
            title: "President & Parliament",
            description: "Executive and Legislature.",
            type: "quiz",
            questionCount: 20,
        },
    ],

    // GEOGRAPHY
    geography: [
        {
            id: "g1",
            title: "Physical Geography: Earth",
            description: "Latitude, Longitude, and Motions.",
            type: "video",
            url: "https://www.youtube.com/embed/H2I6t4Y0Ff0",
        },
        {
            id: "g2",
            title: "Indian Geography: Rivers",
            description: "Himalayan vs Peninsular rivers.",
            type: "notes",
            content: "Ganga system includes Yamuna, Ghaghara...",
        },
    ],

    // GENERAL AWARENESS
    gk: [
        { id: "gk1", title: "Current Affairs: Jan 2025", description: "Monthly Recap", type: "notes", content: "..." },
        { id: "gk2", title: "Awards & Honours", description: "Padma Awards, Nobel Prize", type: "quiz", questionCount: 20 },
        { id: "gk3", title: "International Orgs", description: "UN, WTO, WHO HQ locations", type: "video", url: "https://www.youtube.com/embed/xyz" },
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
