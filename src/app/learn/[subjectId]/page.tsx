"use client";

import { useParams } from "next/navigation";
import { SUBJECT_CONTENT } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, PlayCircle, FileText, HelpCircle, BookOpen } from "lucide-react";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { useState } from "react";

export default function SubjectPage() {
    const params = useParams();
    const subjectId = params.subjectId as string;
    // Fallback to 'quant' data if specific subject data missing in mock
    const content = SUBJECT_CONTENT[subjectId as keyof typeof SUBJECT_CONTENT] || SUBJECT_CONTENT['quant'];
    const [activeVideo, setActiveVideo] = useState<{ url: string, title: string } | null>(null);

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/explore" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
            </Link>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Main Content Area */}
                <div className="flex-1">
                    {/* Video Player Section */}
                    {activeVideo ? (
                        <div className="mb-8" id="video-player">
                            <VideoPlayer url={activeVideo.url} title={activeVideo.title} />
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="text-xl font-semibold">{activeVideo.title}</h2>
                                <Button variant="outline" size="sm" onClick={() => setActiveVideo(null)}>
                                    Close Player
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-secondary/30 rounded-xl p-8 text-center mb-8 border border-dashed flex flex-col items-center justify-center min-h-[200px]">
                            <PlayCircle className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                            <h3 className="text-xl font-medium">Select a topic to start learning</h3>
                            <p className="text-muted-foreground">Video lessons will appear here.</p>
                        </div>
                    )}

                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold capitalize">{subjectId.replace(/_/g, ' ')} Syllabus</h1>
                        <Badge variant="secondary" className="px-3 py-1 text-sm">
                            {content.length} Topics
                        </Badge>
                    </div>

                    <div className="space-y-4">
                        {content.map((topic, index) => (
                            <Card key={topic.id} className={`hover:border-primary transition-colors ${activeVideo?.url === topic.videoUrl ? 'border-primary bg-primary/5' : ''}`}>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                                        <BookOpen className="h-6 w-6" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <h3 className="text-lg font-semibold">
                                                <span className="text-muted-foreground mr-2 text-sm">#{index + 1}</span>
                                                {topic.title}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground mt-1 mb-4 text-sm md:text-base">
                                            {topic.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {topic.videoUrl && (
                                                <Button
                                                    size="sm"
                                                    className="gap-2"
                                                    onClick={() => {
                                                        setActiveVideo({ url: topic.videoUrl!, title: topic.title });
                                                        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to player
                                                    }}
                                                >
                                                    <PlayCircle className="h-4 w-4" /> Watch Video
                                                </Button>
                                            )}

                                            {topic.notesContent && (
                                                <Link href={`/learn/${subjectId}/notes/${topic.id}`}>
                                                    <Button size="sm" variant="outline" className="gap-2">
                                                        <FileText className="h-4 w-4" /> Read Notes
                                                    </Button>
                                                </Link>
                                            )}

                                            <Link href={`/learn/${subjectId}/quiz/${topic.id}`}>
                                                <Button size="sm" variant="ghost" className="gap-2 hover:bg-secondary">
                                                    <HelpCircle className="h-4 w-4" /> Quiz
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Sidebar / Progress */}
                <div className="w-full md:w-80 space-y-6">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="text-center mb-6">
                                <div className="text-4xl font-bold text-primary mb-1">0%</div>
                                <p className="text-sm text-muted-foreground">Course Completion</p>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden mb-4">
                                <div className="h-full bg-primary w-[0%]"></div>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">
                                Watch videos and read notes to track progress.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
