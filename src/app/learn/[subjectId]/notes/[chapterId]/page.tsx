"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, FileText, Download } from "lucide-react";

export default function NotesPage() {
    const params = useParams();
    const chapterId = params.chapterId as string;
    const subjectId = params.subjectId as string;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Link href={`/learn/${subjectId}`} className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Syllabus
            </Link>

            <div className="bg-card border rounded-xl p-8 shadow-sm">
                <div className="flex justify-between items-start mb-8 border-b pb-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                            <FileText className="h-8 w-8 text-blue-600" />
                            Chapter Notes: {chapterId.toUpperCase()}
                        </h1>
                        <p className="text-muted-foreground">Comprehensive study material for {subjectId}</p>
                    </div>
                    <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" /> Download PDF
                    </Button>
                </div>

                <div className="prose dark:prose-invert max-w-none space-y-6">
                    <h2 className="text-2xl font-semibold">1. Introduction</h2>
                    <p className="leading-relaxed text-lg">
                        This chapter covers the fundamental concepts required for the examination.
                        Understanding these basics is crucial for solving complex problems efficiently.
                        Make sure to revise the formulas linked in the sidebar.
                    </p>

                    <div className="bg-muted p-4 rounded-lg my-6 border-l-4 border-primary">
                        <h3 className="font-bold text-lg mb-2">Key Formula</h3>
                        <p className="font-mono bg-background p-2 rounded">Speed = Distance / Time</p>
                    </div>

                    <h2 className="text-2xl font-semibold">2. Core Concepts</h2>
                    <p className="leading-relaxed text-lg">
                        We will explore various scenarios including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Relative Speed concepts</li>
                        <li>Upstream and Downstream motion</li>
                        <li>Circular motion problems</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">3. Summary</h2>
                    <p className="leading-relaxed text-lg">
                        Practice at least 20 questions from this topic to ensure mastery.
                        The quiz section covers previous year questions (PYQs).
                    </p>
                </div>

                <div className="mt-12 flex justify-center">
                    <Link href={`/learn/${subjectId}/quiz/${chapterId}`}>
                        <Button size="lg">Take Chapter Quiz</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
