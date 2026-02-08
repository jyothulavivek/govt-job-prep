"use client";

import { useParams, useRouter } from "next/navigation";
import { MockTestInterface } from "@/components/features/MockTestInterface";
import { MOCK_EXAMS } from "@/data/pyq-questions";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function ExamPage() {
    const params = useParams();
    const router = useRouter();
    const examId = params.examId as string;

    const [hasStarted, setHasStarted] = useState(false);

    // Fetch Exam Data
    const examData = MOCK_EXAMS[examId];

    if (!examData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <AlertTriangle className="h-12 w-12 text-yellow-500" />
                <h2 className="text-xl font-bold">Exam Not Found</h2>
                <p className="text-muted-foreground">The exam you are looking for does not exist or has been removed.</p>
                <Button onClick={() => router.push("/")}>Go Back Home</Button>
            </div>
        );
    }

    const handleSubmit = (answers: Record<number, number>) => {
        let score = 0;
        let correctCount = 0;
        let wrongCount = 0;

        examData.questions.forEach(q => {
            if (answers[q.id] === q.correctAnswer) {
                score += examData.positiveMark;
                correctCount++;
            } else if (answers[q.id] !== undefined) {
                score -= examData.negativeMark;
                wrongCount++;
            }
        });

        // Redirect to Result Page (You might need to update the result page to handle these params)
        router.push(`/result/${examId}?score=${score.toFixed(2)}&total=${examData.totalMarks}&correct=${correctCount}&wrong=${wrongCount}`);
    };

    if (!hasStarted) {
        return (
            <div className="container mx-auto px-4 py-20 max-w-2xl">
                <div className="bg-card border rounded-xl p-8 shadow-sm">
                    <h1 className="text-3xl font-bold mb-4">{examData.title}</h1>
                    <div className="bg-yellow-50 text-yellow-800 p-4 rounded-md mb-6 flex gap-3 items-start border border-yellow-200">
                        <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
                        <div className="text-sm">
                            <p className="font-semibold mb-1">Instructions (v2.0):</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li><strong>Total Questions:</strong> {examData.questions.length}</li>
                                <li><strong>Duration:</strong> {examData.duration} Minutes</li>
                                <li><strong>Marking Scheme:</strong> +{examData.positiveMark} for Correct, -{examData.negativeMark} for Wrong</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button size="lg" className="w-full" onClick={() => setHasStarted(true)}>
                            Start Test Now
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => router.back()}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <MockTestInterface
            questions={examData.questions}
            durationMinutes={examData.duration}
            onSubmit={handleSubmit}
        />
    );
}
