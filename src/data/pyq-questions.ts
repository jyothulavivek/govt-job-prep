

// import { AlertTriangle, Book, Brain, Briefcase, Calculator, CheckCircle2, Clock, Globe, Laptop, Layout, LucideIcon, Map, Scale, Scroll, TrendingUp } from "lucide-react";


// --- Types ---
export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // 0-3 index
    subject?: string;
    description?: string; // Solution explanation
}

export interface ExamMetadata {
    id: string;
    title: string;
    category: 'ssc' | 'upsc' | 'banking' | 'railway';
    questions: Question[];
    duration: number; // minutes
    totalMarks: number;
    positiveMark: number;
    negativeMark: number;
}



// === QUESTION BANK (Base Questions) ===


// === QUESTION BANK (Base Questions - SSC CGL Level) ===

// Section 1: General Intelligence & Reasoning
const SECTION_GI_REASONING: Question[] = [
    { id: 101, text: "Select the option that is related to the third term in the same way as the second term is related to the first term.\nBDFH : JLNP :: RTVX : ?", options: ["ZBDH", "ZBDF", "YACG", "XZYE"], correctAnswer: 1, subject: "Reasoning", description: "Standard alphabetical series +8 pattern." },
    { id: 102, text: "In a certain code language, 'GARNISH' is written as 'RGAINHS'. How will 'GENIOUS' be written in that language?", options: ["NEGOISU", "NGEOISU", "GENOISU", "ENGOISU"], correctAnswer: 1, subject: "Reasoning", description: "Letters are rearranged in specific pattern." },
    { id: 103, text: "Select the odd one out from the given alternatives.", options: ["Square", "Rectangle", "Circle", "Triangle"], correctAnswer: 2, subject: "Reasoning", description: "Circle is the only curvilinear figure." },
    { id: 104, text: "Statement: All flowers are trees. No tree is a house.\nConclusion I: No flower is a house.\nConclusion II: Some trees are flowers.", options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither follows"], correctAnswer: 2, subject: "Reasoning", description: "Syllogism based on Venn diagram." },
    { id: 105, text: "Find the missing number in the series: 2, 6, 12, 20, 30, ?", options: ["40", "42", "44", "46"], correctAnswer: 1, subject: "Reasoning", description: "Differences are 4, 6, 8, 10, so next is 12. 30+12=42." },
];

// Section 2: General Awareness
const SECTION_GA: Question[] = [
    { id: 201, text: "Who among the following was the founder of the Kanva dynasty?", options: ["Vasudeva", "Simuka", "Bhumimitra", "Susarman"], correctAnswer: 0, subject: "History", description: "Vasudeva Kanva founded the Kanva dynasty." },
    { id: 202, text: "Which article of the Indian Constitution deals with the 'Right to Constitutional Remedies'?", options: ["Article 32", "Article 21", "Article 19", "Article 14"], correctAnswer: 0, subject: "Polity", description: "Article 32 is the heart and soul of the Constitution." },
    { id: 203, text: "The phenomenon of 'Total Internal Reflection' is used in:", options: ["Mirage formation", "Twinkling of stars", "Blue color of sky", "Dispersion of light"], correctAnswer: 0, subject: "Physics", description: "Mirage and Optical Fibres work on TIR." },
    { id: 204, text: "Which enzyme is found in saliva?", options: ["Ptyalin", "Pepsin", "Trypsin", "Renin"], correctAnswer: 0, subject: "Biology", description: "Salivary Amylase or Ptyalin breaks down starch." },
    { id: 205, text: "As per Census 2011, which state has the lowest population density in India?", options: ["Arunachal Pradesh", "Sikkim", "Mizoram", "Nagaland"], correctAnswer: 0, subject: "Geography", description: "Arunachal Pradesh has 17 persons per sq km." },
];

// Section 3: Quantitative Aptitude
const SECTION_QUANT: Question[] = [
    { id: 301, text: "If x + 1/x = 4, then the value of x² + 1/x² is:", options: ["14", "16", "12", "18"], correctAnswer: 0, subject: "Quant", description: "Square both sides: (x+1/x)^2 = 16 => x^2 + 1/x^2 + 2 = 16 => 14." },
    { id: 302, text: "A can do a piece of work in 20 days and B in 30 days. They work together for 7 days and then both leave the work. Then C alone finishes the remaining work in 10 days. In how many days will C finish the full work?", options: ["25 days", "30 days", "24 days", "20 days"], correctAnswer: 2, subject: "Quant", description: "(1/20 + 1/30)*7 = 7/12 work done. Rem = 5/12. C does 5/12 in 10 days => Full in 24 days." },
    { id: 303, text: "The marked price of an article is ₹500. It is sold at successive discounts of 10% and 10%. The selling price is:", options: ["₹400", "₹405", "₹410", "₹420"], correctAnswer: 1, subject: "Quant", description: "500 * 0.9 * 0.9 = 500 * 0.81 = 405." },
    { id: 304, text: "If sin θ = 3/5, find the value of tan θ + sec θ.", options: ["2", "1.5", "3", "2.5"], correctAnswer: 0, subject: "Quant", description: "Perpendicular=3, Hypotenuse=5 => Base=4. tan=3/4, sec=5/4. Sum=8/4=2." },
    { id: 305, text: "Two circles of radii 5 cm and 3 cm touch each other externally. The distance between their centres is:", options: ["8 cm", "2 cm", "15 cm", "4 cm"], correctAnswer: 0, subject: "Quant", description: "Distance = r1 + r2 = 5 + 3 = 8 cm." },
];

// Section 4: English Comprehension
const SECTION_ENGLISH: Question[] = [
    { id: 401, text: "Select the most appropriate synonym of the given word: LETHARGIC", options: ["Active", "Lazy", "Sharp", "Bright"], correctAnswer: 1, subject: "English", description: "Lethargic means sluggish or lazy." },
    { id: 402, text: "Select the correctly spelt word.", options: ["Receive", "Recieve", "Riceive", "Receve"], correctAnswer: 0, subject: "English", description: "Receive is the correct spelling." },
    { id: 403, text: "Idiom: 'To break the ice'", options: ["To start a conflict", "To start a conversation", "To end a friendship", "To solve a problem"], correctAnswer: 1, subject: "English", description: "To initiate social interaction." },
    { id: 404, text: "One word substitution: 'A person who is indifferent to pleasure or pain'", options: ["Stoic", "Epicurean", "Cynic", "Humanist"], correctAnswer: 0, subject: "English", description: "Stoic fits the definition." },
    { id: 405, text: "Narration: He said to me, \"I am reading a book.\"", options: ["He told me that he is reading a book.", "He told me that he was reading a book.", "He said that he was reading a book.", "He asked me if he was reading a book."], correctAnswer: 1, subject: "English", description: "Present Continuous changes to Past Continuous." },
];

const ALL_SECTIONS = [...SECTION_GI_REASONING, ...SECTION_GA, ...SECTION_QUANT, ...SECTION_ENGLISH];

// --- Helper to duplicate/generate questions to reach target count ---
function generateQuestions(baseQuestions: Question[], targetCount: number = 100): Question[] {
    const generated: Question[] = [];
    let idCounter = 1000;

    // Use the High Quality Base Questions primarily
    // We have 20 base questions. To get 100, we need to repeat them 5 times with slight variations or just repeat logic.
    // For a better experience, we will duplicate each section to maintain subject balance.

    const rounds = Math.ceil(targetCount / baseQuestions.length);

    for (let r = 0; r < rounds; r++) {
        baseQuestions.forEach((q) => {
            if (generated.length >= targetCount) return;

            const isOriginal = r === 0;
            generated.push({
                ...q,
                id: isOriginal ? q.id : idCounter++,
                text: isOriginal ? q.text : `${q.text} [Similar Pattern Q${r + 1}]`, // Mark clearly as a practice variation
                // In a real app, we would have a larger database.
            });
        });
    }

    return generated;
}

// === MOCK EXAMS DATA ===

export const MOCK_EXAMS: Record<string, ExamMetadata> = {
    // SSC CGL
    "ssc-cgl-2024": {
        id: "ssc-cgl-2024",
        title: "SSC CGL Tier-I 2024 - Full Mock Test 1 (v2)",
        category: 'ssc',
        duration: 60,
        totalMarks: 200,
        positiveMark: 2,
        negativeMark: 0.5,
        questions: generateQuestions(ALL_SECTIONS, 100)
    },
    // SSC CHSL
    "ssc-chsl-2024": {
        id: "ssc-chsl-2024",
        title: "SSC CHSL Tier-I 2024 - Full Mock Test 1",
        category: 'ssc',
        duration: 60,
        totalMarks: 200,
        positiveMark: 2,
        negativeMark: 0.5,
        questions: generateQuestions(ALL_SECTIONS, 100) // Reusing base for demo
    },
    // RAILWAY
    "rrb-ntpc-2024": {
        id: "rrb-ntpc-2024",
        title: "RRB NTPC CBT-1 2024 - Full Mock Test",
        category: 'railway',
        duration: 90,
        totalMarks: 100,
        positiveMark: 1,
        negativeMark: 0.33,
        questions: generateQuestions(ALL_SECTIONS, 100)
    }
};

export const getAllExams = () => Object.values(MOCK_EXAMS);
