export const EXAM_CATEGORIES = {
    ssc: {
        id: "ssc",
        title: "SSC Exams",
        description: "Staff Selection Commission (CGL, CHSL, MTS)",
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
        description: "Union Public Service Commission (IAS, IPS, IFS)",
        subjects: [
            { id: "history", title: "History", icon: "Scroll" },
            { id: "polity", title: "Polity", icon: "Scale" },
            { id: "geography", title: "Geography", icon: "Map" },
            { id: "csat", title: "CSAT", icon: "BrainCircuit" },
        ],
    },
    banking: {
        id: "banking",
        title: "Banking Exams",
        description: "IBPS, SBI, RBI (PO & Clerk)",
        subjects: [
            { id: "quant", title: "Data Analysis & Interpretation", icon: "BarChart" },
            { id: "reasoning", title: "Reasoning Ability", icon: "Brain" },
            { id: "english", title: "English Language", icon: "BookA" },
            { id: "banking_awareness", title: "Banking Awareness", icon: "Landmark" },
        ],
    },
};

export const SUBJECT_CONTENT = {
    // QUANT (Maths)
    quant: [
        {
            id: "ch1",
            title: "Percentage & Profit Loss",
            description: "Basics of percentage, profit, loss, and discount.",
            type: "video",
            url: "https://www.youtube.com/embed/YyqQ669-eMs", // Valid sample
        },
        {
            id: "ch2",
            title: "Ratio and Proportion",
            description: "Concepts of ratio, proportion, and partnership.",
            type: "notes",
            content: "Ratio is the comparison...",
        },
        {
            id: "ch3",
            title: "Time and Work",
            description: "Efficiency method, man-days concept.",
            type: "quiz",
            questionCount: 15,
        },
    ],
    // REASONING
    reasoning: [
        {
            id: "ch1",
            title: "Syllogism",
            description: "Logical deduction and venn diagrams.",
            type: "video",
            url: "https://www.youtube.com/embed/M0p6qTjV_uM",
        },
        {
            id: "ch2",
            title: "Coding-Decoding",
            description: "Pattern recognition in alphabets and numbers.",
            type: "notes",
            content: "Learn the position values of alphabets...",
        },
        {
            id: "ch3",
            title: "Puzzles",
            description: "Seating arrangement and floor puzzles.",
            type: "quiz",
            questionCount: 10,
        },
    ],
    // ENGLISH
    english: [
        {
            id: "ch1",
            title: "Grammar Rules",
            description: "Subject-Verb Agreement and Tenses.",
            type: "video",
            url: "https://www.youtube.com/embed/Julz9_MGvQ8",
        },
        {
            id: "ch2",
            title: "Vocabulary",
            description: "Synonyms, Antonyms, and Idioms.",
            type: "notes",
            content: "Root words method for vocabulary...",
        },
        {
            id: "ch3",
            title: "Reading Comprehension",
            description: "Practice passages and inference questions.",
            type: "quiz",
            questionCount: 5,
        },
    ],
    // HISTORY (UPSC)
    history: [
        {
            id: "ch1",
            title: "Modern History - 1857 Revolt",
            description: "Causes and consequences of the Sepoy Mutiny.",
            type: "video",
            url: "https://www.youtube.com/embed/1234567890", // Placeholder, will fail if not valid, replacing with generic
        },
        {
            id: "ch2",
            title: "Ancient India - Indus Valley",
            description: "Town planning and society of Harappa.",
            type: "notes",
            content: "The Indus Valley Civilization was...",
        },
        {
            id: "ch3",
            title: "Freedom Struggle",
            description: "Gandhian Era and movements.",
            type: "quiz",
            questionCount: 20,
        },
    ],
    // POLITY (UPSC)
    polity: [
        {
            id: "ch1",
            title: "Preamble & Fundamental Rights",
            description: "Heart and soul of the Indian Constitution.",
            type: "video",
            url: "https://www.youtube.com/embed/eWp03d-8r0E",
        },
        {
            id: "ch2",
            title: "Parliament",
            description: "Lok Sabha, Rajya Sabha, and Law making.",
            type: "notes",
            content: "Parliament consists of the President and two houses...",
        },
    ],
    // CSAT (UPSC) - Maps to Quant/Reasoning mix
    csat: [
        {
            id: "ch1",
            title: "Comprehension & Logic",
            description: "Critical reasoning and reading skills.",
            type: "notes",
            content: "Focus on the author's tone...",
        },
        {
            id: "ch2",
            title: "Basic Numeracy",
            description: "Numbers and magnitudes (Class X level).",
            type: "video",
            url: "https://www.youtube.com/embed/YyqQ669-eMs",
        },
    ],
    // GK / GENERAL AWARENESS
    gk: [
        {
            id: "gk1",
            title: "Current Affairs Recap",
            description: "Monthly digest of important events.",
            type: "notes",
            content: "Major awards, appointments, and sports news...",
        },
        {
            id: "gk2",
            title: "Static GK",
            description: "National Parks, Rivers, and Currencies.",
            type: "quiz",
            questionCount: 30,
        },
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
