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
            notesContent: `
# Number System - Comprehensive Notes

## 1. Classification of Numbers
- **Natural Numbers (N)**: Counting numbers {1, 2, 3, ...}
- **Whole Numbers (W)**: Natural numbers + 0 {0, 1, 2, ...}
- **Integers (Z)**: {..., -2, -1, 0, 1, 2, ...}
- **Rational Numbers (Q)**: Can be written as p/q where q ≠ 0. (e.g., 2/3, -5, 0.5)
- **Irrational Numbers**: Cannot be written as p/q. Non-terminating, non-recurring decimals. (e.g., √2, π)
- **Prime Numbers**: Divisible only by 1 and itself. {2, 3, 5, 7, 11...} (2 is the only even prime).

## 2. Divisibility Rules
- **Div by 2**: Last digit is even (0, 2, 4, 6, 8).
- **Div by 3**: Sum of digits is divisible by 3. (e.g., 123 -> 1+2+3=6 ✅)
- **Div by 4**: Last two digits divisible by 4. (e.g., 124 -> 24 ✅)
- **Div by 5**: Last digit is 0 or 5.
- **Div by 6**: Divisible by both 2 and 3.
- **Div by 8**: Last three digits divisible by 8.
- **Div by 9**: Sum of digits is divisible by 9.
- **Div by 11**: (Sum of odd places) - (Sum of even places) = 0 or multiple of 11.

## 3. Important Formulas
- **Sum of first n natural numbers**: n(n+1)/2
- **Sum of squares of first n natural numbers**: n(n+1)(2n+1)/6
- **Sum of cubes of first n natural numbers**: [n(n+1)/2]^2
            `,
        },
        {
            id: "q_sim",
            title: "Simplification",
            description: "BODMAS, Surds & Indices.",
            videoUrl: "https://www.youtube.com/embed/M0p6qTjV_uM",
            notesContent: "BODMAS Rule:\n1. B - Brackets\n2. O - Of (Multiplication)\n3. D - Division\n4. M - Multiplication\n5. A - Addition\n6. S - Subtraction\n\nAlways follow this order to solve expressions correctly.",
        },
        {
            id: "q_alg",
            title: "Algebra",
            description: "Identities, Polynomials, Linear Equations.",
            videoUrl: "https://www.youtube.com/embed/kp2C5-6X_vw",
            notesContent: `
# Important Algebraic Identities

## Square Formulas
1. (a + b)² = a² + b² + 2ab
2. (a - b)² = a² + b² - 2ab
3. a² - b² = (a + b)(a - b)
4. (a + b + c)² = a² + b² + c² + 2(ab + bc + ca)

## Cube Formulas
1. (a + b)³ = a³ + b³ + 3ab(a + b)
2. (a - b)³ = a³ - b³ - 3ab(a - b)
3. a³ + b³ = (a + b)(a² - ab + b²)
4. a³ - b³ = (a - b)(a² + ab + b²)

## Conditional Identity
If a + b + c = 0, then a³ + b³ + c³ = 3abc.
            `,
        },
        {
            id: "q_geo",
            title: "Geometry",
            description: "Lines, Angles, Triangles, Circles.",
            videoUrl: "https://www.youtube.com/embed/_y_QpU6yS1w",
            notesContent: `
# Geometry Basics

## 1. Lines and Angles
- **Acute Angle**: < 90°
- **Obtuse Angle**: > 90°
- **Right Angle**: = 90°
- **Reflex Angle**: > 180° but < 360°
- **Complementary Angles**: Sum = 90°
- **Supplementary Angles**: Sum = 180°

## 2. Triangles
- **Sum of Angles**: ∠A + ∠B + ∠C = 180°
- **Exterior Angle Property**: Exterior angle = Sum of two interior opposite angles.
- **Centroid**: Intersection of medians (divides median in 2:1 ratio).
- **Incenter**: Intersection of angle bisectors (center of incircle).
- **Orthocenter**: Intersection of altitudes.
- **Circumcenter**: Intersection of perpendicular bisectors.

### Congruence Criteria
- **SSS**: Side-Side-Side
- **SAS**: Side-Angle-Side
- **ASA**: Angle-Side-Angle
- **RHS**: Right angle-Hypotenuse-Side

## 3. Circles
- **Diameter** = 2 × Radius
- **Tangent**: Touches circle at one point. Radius is perpendicular to tangent at point of contact.
- **Cyclic Quadrilateral**: Sum of opposite angles = 180°.
            `,
        },
        {
            id: "q_men",
            title: "Mensuration",
            description: "Area, Volume of 2D & 3D shapes.",
            videoUrl: "https://www.youtube.com/embed/9N4X2vD7n44",
            notesContent: `
# Mensuration Formulas

## 2D Shapes (Area & Perimeter)
- **Rectangle**: Area = l×b, Perim = 2(l+b)
- **Square**: Area = a², Perim = 4a
- **Triangle**: Area = ½ × base × height OR √[s(s-a)(s-b)(s-c)] (Heron’s Formula)
- **Circle**: Area = πr², Circumference = 2πr

## 3D Shapes (Volume & Surface Area)
- **Cube**: Vol = a³, TSA = 6a²
- **Cuboid**: Vol = lbh, TSA = 2(lb+bh+hl)
- **Cylinder**: Vol = πr²h, CSA = 2πrh, TSA = 2πr(h+r)
- **Cone**: Vol = (1/3)πr²h, CSA = πrl, TSA = πr(l+r)
- **Sphere**: Vol = (4/3)πr³, TSA = 4πr²
            `,
        },
        {
            id: "q_trig",
            title: "Trigonometry",
            description: "Circular Measure, Heights & Distances.",
            videoUrl: "https://www.youtube.com/embed/Pub0Y5ZpY8s",
            notesContent: `
# Trigonometry Essentials

## Basic Ratios
- sin θ = Perpendicular / Hypotenuse
- cos θ = Base / Hypotenuse
- tan θ = Perpendicular / Base

## Pythagorean Identities
1. sin²θ + cos²θ = 1
2. 1 + tan²θ = sec²θ
3. 1 + cot²θ = cosec²θ

## Standard Values
| Angle | 0° | 30° | 45° | 60° | 90° |
| :--- | :---: | :---: | :---: | :---: | :---: |
| sin | 0 | 1/2 | 1/√2 | √3/2 | 1 |
| cos | 1 | √3/2 | 1/√2 | 1/2 | 0 |
| tan | 0 | 1/√3 | 1 | √3 | ∞ |
            `,
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
            notesContent: `
# Geography Overview

## 1. Solar System
- **Planets**: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.
- **Inner Planets**: Terrestrial (Mercury to Mars).
- **Outer Planets**: Gas Giants (Jupiter to Neptune).
- **Morning Star**: Venus.
- **Red Planet**: Mars.

## 2. Structure of Earth
- **Crust**: Outermost layer. Continental (Sial) and Oceanic (Sima).
- **Mantle**: 84% of Earth's volume. Magma source.
- **Core**: Innermost. Outer core (liquid), Inner core (solid). Made of NiFe (Nickel & Iron).

## 3. Indian Rivers
### Himalayan Rivers
- **Ganga**: Longest in India. Origin: Gangotri Glacier.
- **Indus**: Flows through Ladakh and Pakistan.
- **Brahmaputra**: Originates in Tibet (Tsangpo). Enters India via Arunachal.

### Peninsular Rivers
- **Godavari**: 'Dakshin Ganga'. Longest peninsular river.
- **Krishna**: Flows through Maharashtra, Karnataka, Telangana, AP.
- **Kaveri**: 'Ganga of the South'. Source: Talakaveri within Western Ghats.
            `,
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

    // === UPSC specific mappings ===
    history: [
        { id: "h1", title: "Ancient India", description: "Indus Valley to Guptas", videoUrl: "https://www.youtube.com/embed/AvFl6UBZLv4", notesContent: "..." },
        { id: "h2", title: "Medieval India", description: "Delhi Sultanate to Mughals", videoUrl: "https://www.youtube.com/embed/nNmE1ghJ4vU", notesContent: "..." },
        { id: "h3", title: "Modern India", description: "1857 to 1947", videoUrl: "https://www.youtube.com/embed/2yC3O4Y8sSg", notesContent: "..." },
    ],
    polity: [
        { id: "p1", title: "Constitution", description: "Making & Features", videoUrl: "https://www.youtube.com/embed/eWp03d-8r0E", notesContent: "..." },
    ],
    geography: [
        {
            id: "gk_geo_dup",
            title: "Geography",
            description: "Physical and Indian Geography.",
            videoUrl: "https://www.youtube.com/embed/H2I6t4Y0Ff0",
            notesContent: `
# Geography Overview (UPSC)

## 1. Solar System
- **Planets**: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.
- **Morning Star**: Venus.

## 2. Structure of Earth
- **Crust**: Outermost layer. Continental (Sial) and Oceanic (Sima).
- **Mantle**: 84% of Earth's volume. Magma source.
- **Core**: Innermost. Outer core (liquid), Inner core (solid). Made of NiFe (Nickel & Iron).

## 3. Climatology
- Atmosphere layers: Troposphere, Stratosphere (Ozone), Mesosphere, Thermosphere, Exosphere.
            `,
        },
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
    // === PREVIOUS YEAR PAPERS (PYQ) ===
    // SSC CGL
    {
        id: "pyq_cgl_2024",
        title: "SSC CGL 2024 (Tier 1) - Shift 1",
        category: "ssc",
        questions: 100,
        duration: 60,
        difficulty: "Medium",
        tags: ["PYQ", "2024"]
    },
    {
        id: "pyq_cgl_2023",
        title: "SSC CGL 2023 (Tier 1) - Shift 1",
        category: "ssc",
        questions: 100,
        duration: 60,
        difficulty: "Medium",
        tags: ["PYQ", "2023"]
    },
    {
        id: "pyq_cgl_2022",
        title: "SSC CGL 2022 (Tier 1) - Shift 1",
        category: "ssc",
        questions: 100,
        duration: 60,
        difficulty: "Medium",
        tags: ["PYQ", "2022"]
    },
    // SSC CHSL
    {
        id: "pyq_chsl_2024",
        title: "SSC CHSL 2024 (Tier 1)",
        category: "ssc",
        questions: 100,
        duration: 60,
        difficulty: "Easy-Medium",
        tags: ["PYQ", "2024"]
    },
    {
        id: "pyq_chsl_2023",
        title: "SSC CHSL 2023 (Tier 1)",
        category: "ssc",
        questions: 100,
        duration: 60,
        difficulty: "Easy-Medium",
        tags: ["PYQ", "2023"]
    },
    {
        id: "pyq_chsl_2022",
        title: "SSC CHSL 2022 (Tier 1)",
        category: "ssc",
        questions: 100,
        duration: 60,
        difficulty: "Easy-Medium",
        tags: ["PYQ", "2022"]
    },
    // RAILWAY
    {
        id: "pyq_rrb_ntpc_2022",
        title: "Railway RRB NTPC 2022 (CBT 2)",
        category: "ssc", // Grouping under SSC/Govt General
        questions: 120,
        duration: 90,
        difficulty: "Hard",
        tags: ["PYQ", "Railway"]
    },
    {
        id: "pyq_rrb_ntpc_2021",
        title: "Railway RRB NTPC 2021 (CBT 1)",
        category: "ssc",
        questions: 100,
        duration: 90,
        difficulty: "Medium",
        tags: ["PYQ", "Railway"]
    },
    {
        id: "pyq_rrb_grp_d_2022",
        title: "Railway Group D 2022",
        category: "ssc",
        questions: 100,
        duration: 90,
        difficulty: "Medium",
        tags: ["PYQ", "Railway"]
    }
];
