"use client";

import { useParams, useRouter } from "next/navigation";
import { MockTestInterface } from "@/components/features/MockTestInterface";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CHAPTER_QUESTIONS } from "@/data/mockData";

const GENERIC_QUESTIONS = [
    {
        id: 1,
        text: "What is the primary concept discussed in this chapter?",
        options: ["Concept A", "Concept B", "Concept C", "Concept D"],
        correctAnswer: 0,
    },
    {
        id: 2,
        text: "Which of the following aligns with the chapter content?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: 1,
    }
];

export default function ChapterQuizPage() {
    const params = useParams();
    const router = useRouter();

    // Safety check for params
    const subjectId = (params.subjectId as string) || "subject";
    const chapterId = (params.chapterId as string) || "chapter";

    const quizQuestions = CHAPTER_QUESTIONS[chapterId] || GENERIC_QUESTIONS;

    const handleSubmit = (answers: Record<number, number>) => {
        // Determine score
        let score = 0;
        quizQuestions.forEach(q => {
            if (answers[q.id] === q.correctAnswer) score += 1;
        });

        // Redirect to a mini result view or just alert
        alert(`Quiz Completed! You scored ${score}/${quizQuestions.length}`);
        router.push(`/learn/${subjectId}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href={`/learn/${subjectId}`} className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Chapter
            </Link>

            <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 bg-secondary/30 border-b">
                    <h1 className="font-bold text-xl uppercase">Practice Quiz: {subjectId} ({chapterId})</h1>
                </div>
                <MockTestInterface
                    questions={quizQuestions}
                    durationMinutes={15}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}
