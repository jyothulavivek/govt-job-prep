"use client";

import { useParams, useRouter } from "next/navigation";
import { MockTestInterface } from "@/components/features/MockTestInterface";
import { MOCK_TESTS } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

// Sample questions for the test interface (since mockData only has metadata)
const SAMPLE_QUESTIONS = [
    {
        id: 101,
        text: "The ratio of the ages of A and B is 3:5. If the sum of their ages is 40 years, what is the age of B?",
        options: ["15 years", "20 years", "25 years", "30 years"],
        correctAnswer: 2, // Index 2 -> 25 years
    },
    {
        id: 102,
        text: "Which Article of the Indian Constitution deals with the 'Right to Constitutional Remedies'?",
        options: ["Article 21", "Article 32", "Article 14", "Article 19"],
        correctAnswer: 1,
    },
    {
        id: 103,
        text: "If ROAD is coded as URDG, then how is SWAN coded?",
        options: ["VZDQ", "UXDQ", "VZDQ", "VZDQ"], // Just random options
        correctAnswer: 0,
    },
    // We can duplicate for demo
    ...Array.from({ length: 7 }).map((_, i) => ({
        id: 104 + i,
        text: `Sample Question ${i + 4}: What is the capital of France?`,
        options: ["Berlin", "London", "Paris", "Madrid"],
        correctAnswer: 2,
    })),
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

    const handleSubmit = (answers: Record<number, number>) => {
        console.log("Submitted answers:", answers);
        // Calculate score
        let score = 0;
        SAMPLE_QUESTIONS.forEach(q => {
            if (answers[q.id] === q.correctAnswer) score += 3; // +3 for correct
            else if (answers[q.id] !== undefined) score -= 1; // -1 for wrong
        });

        // In a real app we'd save to DB, here we just alert or redirect
        // Use query params to pass score for simple result page
        router.push(`/result/123?score=${score}&total=${SAMPLE_QUESTIONS.length * 3}`);
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
                                <li>Total Questions: {SAMPLE_QUESTIONS.length} (Demo Mode)</li>
                                <li>Duration: {examMetadata.duration} Minutes</li>
                                <li>Correct Answer: +3 Marks</li>
                                <li>Wrong Answer: -1 Mark</li>
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
            questions={SAMPLE_QUESTIONS}
            durationMinutes={examMetadata.duration}
            onSubmit={handleSubmit}
        />
    );
}
