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
            id: "q_num",
            title: "Number System",
            description: "Classification, Divisibility Rules, Remainder Theorem.",
            videoUrl: "https://www.youtube.com/embed/5K-H8x3u8jM",
            notesContent: "Divisibility Rules:\n2 - Last digit even\n3 - Sum of digits div by 3\n4 - Last 2 digits div by 4...",
        },
        {
            id: "q_sim",
            title: "Simplification",
            description: "BODMAS, Surds & Indices.",
            videoUrl: "https://www.youtube.com/embed/M0p6qTjV_uM",
            notesContent: "BODMAS: Bracket, Order, Division, Multiplication, Addition, Subtraction.",
        },
        {
            id: "q_alg",
            title: "Algebra",
            description: "Identities, Polynomials, Linear Equations.",
            videoUrl: "https://www.youtube.com/embed/kp2C5-6X_vw",
            notesContent: "(a+b)^2 = a^2 + b^2 + 2ab\n(a-b)^2 = a^2 - 2ab + b^2",
        },
        {
            id: "q_geo",
            title: "Geometry",
            description: "Lines, Angles, Triangles, Circles.",
            videoUrl: "https://www.youtube.com/embed/_y_QpU6yS1w",
            notesContent: "Sum of angles in triangle = 180 degrees.\nPythagoras Theorem: a^2 + b^2 = c^2",
        },
        {
            id: "q_men",
            title: "Mensuration",
            description: "Area, Volume of 2D & 3D shapes.",
            videoUrl: "https://www.youtube.com/embed/9N4X2vD7n44",
            notesContent: "Cylinder Volume = πr^2h\nCone Volume = (1/3)πr^2h",
        },
        {
            id: "q_trig",
            title: "Trigonometry",
            description: "Circular Measure, Heights & Distances.",
            videoUrl: "https://www.youtube.com/embed/Pub0Y5ZpY8s",
            notesContent: "sin = P/H, cos = B/H, tan = P/B",
        },
        {
            id: "q_pct",
            title: "Percentage",
            description: "Basic concepts and applications.",
            videoUrl: "https://www.youtube.com/embed/tyO6p483I3s",
            notesContent: "x% = x/100. To convert fraction to %, multiply by 100.",
        },
        {
            id: "q_pl",
            title: "Profit & Loss",
            description: "CP, SP, Discounts.",
            videoUrl: "https://www.youtube.com/embed/S9K6k7R48X4",
            notesContent: "Profit = SP - CP. Loss = CP - SP.",
        },
        {
            id: "q_si_ci",
            title: "SI & CI",
            description: "Simple & Compound Interest.",
            videoUrl: "https://www.youtube.com/embed/D3f9j8_5s6s",
            notesContent: "SI = (P*R*T)/100\nA = P(1 + R/100)^n",
        },
        {
            id: "q_time",
            title: "Time & Work",
            description: "Efficiency, Pipes & Cisterns.",
            videoUrl: "https://www.youtube.com/embed/KE7tQf9spPg",
            notesContent: "Work = Efficiency * Time.",
        },
    ],

    // === REASONING ===
    reasoning: [
        {
            id: "r_analogy",
            title: "Analogy",
            description: "Word, Number, and Alphabet Analogy.",
            videoUrl: "https://www.youtube.com/embed/488U6K21k2c",
            notesContent: "Find the relationship between the first pair and apply to second.",
        },
        {
            id: "r_class",
            title: "Classification",
            description: "Odd one out.",
            videoUrl: "https://www.youtube.com/embed/M0p6qTjV_uM",
            notesContent: "Identify the item that does not belong to the group.",
        },
        {
            id: "r_series",
            title: "Series Completion",
            description: "Number and Alphabet series.",
            videoUrl: "https://www.youtube.com/embed/488U6K21k2c",
            notesContent: "Look for patterns: +n, *n, squares, cubes.",
        },
        {
            id: "r_coding",
            title: "Coding-Decoding",
            description: "Message decoding.",
            videoUrl: "https://www.youtube.com/embed/M0p6qTjV_uM",
            notesContent: "Map letters to numbers (A=1, B=2...).",
        },
        {
            id: "r_blood",
            title: "Blood Relations",
            description: "Family tree analysis.",
            videoUrl: "https://www.youtube.com/embed/UrOpK8gA9-U",
            notesContent: "Use symbols for gender (+ male, - female).",
        },
        {
            id: "r_dir",
            title: "Direction Sense",
            description: "Movement and distance.",
            videoUrl: "https://www.youtube.com/embed/M0p6qTjV_uM",
            notesContent: "Draw a diagram keeping North up.",
        },
        {
            id: "r_venn",
            title: "Venn Diagrams",
            description: "Set theory visualizations.",
            videoUrl: "https://www.youtube.com/embed/M0p6qTjV_uM",
            notesContent: "Represent relationships using overlapping circles.",
        },
    ],

    // === ENGLISH ===
    english: [
        {
            id: "e_grammar",
            title: "Grammar Rules",
            description: "Nouns, Pronouns, Adjectives.",
            videoUrl: "https://www.youtube.com/embed/Julz9_MGvQ8",
            notesContent: "Subject-Verb Agreement is crucial.",
        },
        {
            id: "e_vocab",
            title: "Vocabulary",
            description: "Synonyms, Antonyms, Idioms.",
            videoUrl: "https://www.youtube.com/embed/I0Y2o2jXvfw",
            notesContent: "Root words method for vocabulary building.",
        },
        {
            id: "e_rc",
            title: "Reading Comprehension",
            description: "Passage analysis.",
            videoUrl: "https://www.youtube.com/embed/Julz9_MGvQ8",
            notesContent: "Read questions first, then the passage.",
        },
        {
            id: "e_cloze",
            title: "Cloze Test",
            description: "Fill in the blanks in paragraph.",
            videoUrl: "https://www.youtube.com/embed/Julz9_MGvQ8",
            notesContent: "Understand the context and tone of the passage.",
        },
    ],

    // === GENERAL AWARENESS (GK) ===
    gk: [
        {
            id: "gk_hist",
            title: "Indian History",
            description: "Ancient, Medieval, Modern.",
            videoUrl: "https://www.youtube.com/embed/AvFl6UBZLv4",
            notesContent: "Indus Valley -> Vedic -> Mauryan -> Gupta -> Mughal -> British.",
        },
        {
            id: "gk_polity",
            title: "Indian Polity",
            description: "Constitution and Governance.",
            videoUrl: "https://www.youtube.com/embed/eWp03d-8r0E",
            notesContent: "Preamble, Fundamental Rights, DPSP.",
        },
        {
            id: "gk_geo",
            title: "Geography",
            description: "Physical and Indian Geography.",
            videoUrl: "https://www.youtube.com/embed/H2I6t4Y0Ff0",
            notesContent: "Solar System, Earth structure, Climate, Rivers.",
        },
        {
            id: "gk_eco",
            title: "Economics",
            description: "Macro and Micro Economics.",
            videoUrl: "https://www.youtube.com/embed/1vRzL1y_sT0",
            notesContent: "GDP, Inflation, Budget, Banking.",
        },
        {
            id: "gk_sci",
            title: "General Science",
            description: "Physics, Chemistry, Biology.",
            videoUrl: "https://www.youtube.com/embed/WW2O_wE2g_o",
            notesContent: "Newton's Laws, Periodic Table, Human Body.",
        },
    ],

    // === UPSC specific mappings (History/Polity overlap with GK but specific categories exist) ===
    history: [ /* Reusing GK History content logically, but keeping separate definition for mapping simplicity */
        { id: "h1", title: "Ancient India", description: "Indus Valley to Guptas", videoUrl: "https://www.youtube.com/embed/AvFl6UBZLv4", notesContent: "..." },
        { id: "h2", title: "Medieval India", description: "Delhi Sultanate to Mughals", videoUrl: "https://www.youtube.com/embed/nNmE1ghJ4vU", notesContent: "..." },
        { id: "h3", title: "Modern India", description: "1857 to 1947", videoUrl: "https://www.youtube.com/embed/2yC3O4Y8sSg", notesContent: "..." },
    ],
    // ... duplicate/similar structure for other subjects can be inferred or added if needed
    polity: [
        { id: "p1", title: "Constitution", description: "Making & Features", videoUrl: "https://www.youtube.com/embed/eWp03d-8r0E", notesContent: "..." },
    ],
    geography: [
        { id: "g1", title: "Physical Geo", description: "Geomorphology", videoUrl: "https://www.youtube.com/embed/H2I6t4Y0Ff0", notesContent: "..." },
    ],
    economy: [
        { id: "ec1", title: "Macroeconomics", description: "National Income", videoUrl: "https://www.youtube.com/embed/1vRzL1y_sT0", notesContent: "..." },
    ],

    // Banking specific
    banking_awareness: [
        { id: "ba1", title: "RBI & Monetary Policy", description: "Functions of RBI", videoUrl: "https://www.youtube.com/embed/s-iZ7E6gT8Y", notesContent: "..." },
    ]
};

export const MOCK_TESTS = [
    {
        id: "mock1",
        title: "SSC CGL Tier 1 - Full Mock 1",
        category: "ssc",
        questions: 100,
        duration: 60,
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
