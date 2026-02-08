"use client";

import { useParams, useRouter } from "next/navigation";
import { MockTestInterface } from "@/components/features/MockTestInterface";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Reuse the mock test interface but for a small chapter quiz
const QUIZ_QUESTIONS = [
    {
        id: 1,
        text: "What is the primary concept discussed in this chapter?",
        options: ["Algebra", "Calculus", "Geometry", "Arithmetic"],
        correctAnswer: 3,
    },
    {
        id: 2,
        text: "Solve: 15% of 200",
        options: ["20", "25", "30", "35"],
        correctAnswer: 2,
    },
    {
        id: 3,
        text: "If A is 20% more than B, B is how much percent less than A?",
        options: ["16.66%", "20%", "25%", "33.33%"],
        correctAnswer: 0,
    },
    {
        id: 4,
        text: "Which formula is correct?",
        options: ["S = D/T", "S = D*T", "D = S/T", "T = S*D"],
        correctAnswer: 0,
    },
    {
        id: 5,
        text: "Find the odd one out: 2, 4, 8, 11, 16",
        options: ["4", "8", "11", "16"],
        correctAnswer: 2,
    }
];

export default function ChapterQuizPage() {
    const params = useParams();
    const subjectId = params.subjectId as string;
    const router = useRouter();

    const handleSubmit = (answers: Record<number, number>) => {
        // Determine score
        let score = 0;
        QUIZ_QUESTIONS.forEach(q => {
            if (answers[q.id] === q.correctAnswer) score += 1;
        });

        // Redirect to a mini result view or just alert
        alert(`Quiz Completed! You scored ${score}/${QUIZ_QUESTIONS.length}`);
        router.push(`/learn/${subjectId}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href={`/learn/${subjectId}`} className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Chapter
            </Link>

            <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 bg-secondary/30 border-b">
                    <h1 className="font-bold text-xl">Practice Quiz: {subjectId.toUpperCase()}</h1>
                </div>
                <MockTestInterface
                    questions={QUIZ_QUESTIONS}
                    durationMinutes={15}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}
