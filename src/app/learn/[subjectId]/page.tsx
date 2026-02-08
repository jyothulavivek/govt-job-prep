"use client";

import { useParams } from "next/navigation";
import { SUBJECT_CONTENT } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, PlayCircle, FileText, HelpCircle } from "lucide-react";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { useState } from "react";

export default function SubjectPage() {
    const params = useParams();
    const subjectId = params.subjectId as string;
    // Fallback to 'quant' data if specific subject data missing in mock
    const content = SUBJECT_CONTENT[subjectId as keyof typeof SUBJECT_CONTENT] || SUBJECT_CONTENT['quant'];
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/explore" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
            </Link>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Main Content Area */}
                <div className="flex-1">
                    {activeVideo ? (
                        <div className="mb-8">
                            <VideoPlayer url={activeVideo} title="Active Lesson" />
                            <Button variant="ghost" className="mt-2" onClick={() => setActiveVideo(null)}>
                                Close Player
                            </Button>
                        </div>
                    ) : (
                        <div className="bg-secondary/30 rounded-xl p-8 text-center mb-8 border border-dashed">
                            <h3 className="text-xl font-medium">Select a chapter to start learning</h3>
                            <p className="text-muted-foreground">Video lessons will appear here.</p>
                        </div>
                    )}

                    <h1 className="text-3xl font-bold mb-6 capitalize">{subjectId} Syllabus</h1>

                    <div className="space-y-4">
                        {content.map((chapter) => (
                            <Card key={chapter.id} className="hover:border-primary transition-colors">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className={`p-2 rounded-lg ${chapter.type === 'video' ? 'bg-red-100 text-red-600' :
                                        chapter.type === 'notes' ? 'bg-blue-100 text-blue-600' :
                                            'bg-green-100 text-green-600'
                                        }`}>
                                        {chapter.type === 'video' && <PlayCircle className="h-6 w-6" />}
                                        {chapter.type === 'notes' && <FileText className="h-6 w-6" />}
                                        {chapter.type === 'quiz' && <HelpCircle className="h-6 w-6" />}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-semibold">{chapter.title}</h3>
                                            <Badge variant="outline" className="capitalize">{chapter.type}</Badge>
                                        </div>
                                        <p className="text-muted-foreground mt-1">{chapter.description || "Interactive chapter content."}</p>

                                        <div className="mt-4 flex gap-2">
                                            {chapter.type === 'video' && (
                                                <Button size="sm" onClick={() => setActiveVideo((chapter as { url: string }).url)}>Watch Now</Button>
                                            )}
                                            {chapter.type === 'notes' && (
                                                <Link href={`/learn/${subjectId}/notes/${chapter.id}`}>
                                                    <Button size="sm" variant="outline">Read Notes</Button>
                                                </Link>
                                            )}
                                            {chapter.type === 'quiz' && (
                                                <Link href={`/learn/${subjectId}/quiz/${chapter.id}`}>
                                                    <Button size="sm" variant="secondary">Start Quiz</Button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Sidebar / Progress (Mock) */}
                <div className="w-full md:w-80">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Your Progress</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Course Completion</span>
                                        <span className="font-bold">12%</span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[12%]"></div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t">
                                    <h4 className="font-medium text-sm mb-2">Recommended:</h4>
                                    <Link href={`/learn/${subjectId}/notes/ch1`} className="block">
                                        <div className="bg-muted p-2 rounded text-sm text-muted-foreground hover:bg-muted/80 cursor-pointer transition-colors">
                                            Complete &quot;Percentage&quot; notes before starting the quiz.
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
