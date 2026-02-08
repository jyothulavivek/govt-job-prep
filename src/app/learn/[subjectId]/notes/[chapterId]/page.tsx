"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { SUBJECT_CONTENT } from "@/data/mockData";

export default function NotesPage() {
    const params = useParams();
    const chapterId = params.chapterId as string;
    const subjectId = params.subjectId as string;

    // Find the topic content
    const subjectContent = SUBJECT_CONTENT[subjectId as keyof typeof SUBJECT_CONTENT] || SUBJECT_CONTENT['quant'];
    const topic = subjectContent.find(t => t.id === chapterId);

    if (!topic) {
        return <div className="p-8">Topic not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Link href={`/learn/${subjectId}`} className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Syllabus
            </Link>

            <div className="bg-card border rounded-xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b pb-6 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                            <FileText className="h-8 w-8 text-blue-600" />
                            {topic.title}
                        </h1>
                        <p className="text-muted-foreground">Chapter Study Notes</p>
                    </div>
                    <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" /> Download PDF
                    </Button>
                </div>

                <div className="prose dark:prose-invert max-w-none space-y-6">
                    {/* Render the raw content with basic formatting */}
                    <div className="whitespace-pre-wrap font-sans text-lg leading-relaxed text-foreground/90">
                        {topic.notesContent || "No specific notes available for this topic yet."}
                    </div>
                </div>

                <div className="mt-12 flex justify-center pt-8 border-t">
                    <Link href={`/learn/${subjectId}/quiz/${chapterId}`}>
                        <Button size="lg" className="w-full md:w-auto px-12">
                            Take Chapter Quiz
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
