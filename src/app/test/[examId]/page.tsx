"use client";

import { useParams, useRouter } from "next/navigation";
import { MockTestInterface } from "@/components/features/MockTestInterface";
import { MOCK_TESTS } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

// === QUESTION BANKS ===

const APTITUDE_QUESTIONS = [
    {
        id: 101,
        text: "The ratio of the ages of A and B is 3:5. If the sum of their ages is 40 years, what is the age of B?",
        options: ["15 years", "20 years", "25 years", "30 years"],
        correctAnswer: 2,
    },
    {
        id: 102,
        text: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        options: ["120 metres", "180 metres", "324 metres", "150 metres"],
        correctAnswer: 3,
    },
    {
        id: 103,
        text: "If ROAD is coded as URDG, then how is SWAN coded?",
        options: ["VZDQ", "UXDQ", "VZDQ", "VYDQ"],
        correctAnswer: 2,
    },
    {
        id: 104,
        text: "Find the missing number in the series: 2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "46"],
        correctAnswer: 1, // 42 (n*n+n)
    },
    {
        id: 105,
        text: "Simple interest on a certain sum at 15% p.a. for 2 years is Rs. 1500. Find the sum.",
        options: ["Rs. 5000", "Rs. 4500", "Rs. 6000", "Rs. 5500"],
        correctAnswer: 0,
    }
];

const UPSC_QUESTIONS = [
    {
        id: 201,
        text: "Consider the following statements regarding the Preamble of the Indian Constitution:\n1. It is not enforceable in a court of law.\n2. It has been amended only once.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
    },
    {
        id: 202,
        text: "Which of the following Harappan sites is located in Gujarat?",
        options: ["Kalibangan", "Ropar", "Banawali", "Lothal"],
        correctAnswer: 3,
    },
    {
        id: 203,
        text: "The 'Quit India Movement' was launched in response to:",
        options: ["Cabinet Mission Plan", "Cripps Proposals", "Simon Commission Report", "Wavell Plan"],
        correctAnswer: 1,
    },
    {
        id: 204,
        text: "Which one of the following is the largest Committee of the Parliament?",
        options: ["The Committee on Public Accounts", "The Committee on Estimates", "The Committee on Public Undertakings", "The Committee on Petitions"],
        correctAnswer: 1, // Estimates (30 members)
    },
    {
        id: 205,
        text: "Which Article of the Constitution of India safeguards one's right to marry the person of one's choice?",
        options: ["Article 19", "Article 21", "Article 25", "Article 29"],
        correctAnswer: 1,
    }
];

export default function ExamPage() {
    const params = useParams();
    const router = useRouter();
    const examId = params.examId as string;
    const examMetadata = MOCK_TESTS.find(t => t.id === examId);

    const [hasStarted, setHasStarted] = useState(false);

    if (!examMetadata) {
        return <div className="p-8">Exam not found</div>;
    }

    // Select Questions based on Category
    const QUESTIONS = examMetadata.category === 'upsc' ? UPSC_QUESTIONS : APTITUDE_QUESTIONS;

    const handleSubmit = (answers: Record<number, number>) => {
        let score = 0;
        QUESTIONS.forEach(q => {
            if (answers[q.id] === q.correctAnswer) score += 2; // UPSC is usually +2
            else if (answers[q.id] !== undefined) score -= 0.66; // Negative marking
        });

        router.push(`/result/${examId}?score=${score.toFixed(2)}&total=${QUESTIONS.length * 2}`);
    };

    if (!hasStarted) {
        return (
            <div className="container mx-auto px-4 py-20 max-w-2xl">
                <div className="bg-card border rounded-xl p-8 shadow-sm">
                    <h1 className="text-3xl font-bold mb-4">{examMetadata.title}</h1>
                    <div className="bg-yellow-50 text-yellow-800 p-4 rounded-md mb-6 flex gap-3 items-start border border-yellow-200">
                        <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
                        <div className="text-sm">
                            <p className="font-semibold mb-1">Instructions:</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Total Questions: {QUESTIONS.length}</li>
                                <li>Duration: {examMetadata.duration} Minutes</li>
                                <li>Subject: {examMetadata.category === 'upsc' ? 'General Studies (GS-1)' : 'Aptitude & Reasoning'}</li>
                                <li>Marking: +2 for correct, -0.66 for wrong</li>
                            </ul>
                        </div>
                    </div>
                    <Button size="lg" className="w-full" onClick={() => setHasStarted(true)}>
                        I am ready to begin
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <MockTestInterface
            questions={QUESTIONS}
            durationMinutes={examMetadata.duration}
            onSubmit={handleSubmit}
        />
    );
}
