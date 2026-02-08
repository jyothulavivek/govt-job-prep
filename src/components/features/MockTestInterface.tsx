"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
}

interface MockTestProps {
    questions: Question[];
    durationMinutes: number; // in minutes
    onSubmit: (answers: Record<number, number>) => void;
}

export function MockTestInterface({ questions, durationMinutes, onSubmit }: MockTestProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onSubmit(answers); // Auto-submit
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [answers, onSubmit]);

    const handleOptionSelect = (optionIndex: number) => {
        setAnswers((prev) => ({
            ...prev,
            [questions[currentQuestionIndex].id]: optionIndex,
        }));
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto p-4 md:p-8">
            {/* Header with Timer */}
            <div className="flex justify-between items-center bg-card border rounded-lg p-4 mb-6 shadow-sm">
                <h2 className="text-xl font-bold">Mock Exam</h2>
                <div className="flex items-center gap-2 text-xl font-mono p-2 bg-secondary rounded-md">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{formatTime(timeLeft)}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Main Question Area */}
                <div className="md:col-span-3 space-y-6">
                    <div className="bg-card border rounded-xl p-6 shadow-sm min-h-[400px]">
                        <div className="mb-4 text-muted-foreground font-medium">
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </div>
                        <p className="text-lg font-medium mb-8">{currentQuestion.text}</p>

                        <div className="space-y-3">
                            {currentQuestion.options.map((option, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleOptionSelect(idx)}
                                    className={cn(
                                        "p-4 rounded-lg border cursor-pointer transition-all hover:bg-secondary/50",
                                        answers[currentQuestion.id] === idx
                                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                                            : "border-border"
                                    )}
                                >
                                    <span className="font-semibold mr-3 text-muted-foreground">{String.fromCharCode(65 + idx)}.</span>
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentQuestionIndex === 0}
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                        </Button>

                        {currentQuestionIndex < questions.length - 1 ? (
                            <Button onClick={() => setCurrentQuestionIndex(prev => prev + 1)}>
                                Next <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        ) : (
                            <Button onClick={() => onSubmit(answers)} variant="default">
                                Submit Test
                            </Button>
                        )}
                    </div>
                </div>

                {/* Question Palette */}
                <div className="md:col-span-1">
                    <div className="bg-card border rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold mb-4">Question Palette</h3>
                        <div className="grid grid-cols-4 gap-2">
                            {questions.map((q, idx) => (
                                <button
                                    key={q.id}
                                    onClick={() => setCurrentQuestionIndex(idx)}
                                    className={cn(
                                        "h-8 w-8 rounded-md flex items-center justify-center text-sm font-medium transition-colors",
                                        currentQuestionIndex === idx ? "ring-2 ring-black" : "",
                                        answers[q.id] !== undefined
                                            ? "bg-primary text-primary-foreground" // Answered
                                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80" // Not answered
                                    )}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                        </div>

                        <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-primary rounded-sm"></div> Answered
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-secondary rounded-sm"></div> Not Answered
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
