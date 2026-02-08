"use client";

import { getAllExams } from "@/data/pyq-questions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Timer, BarChart, FileQuestion } from "lucide-react";

export default function TestListingPage() {
    const exams = getAllExams();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Mock Test Series</h1>
                <p className="text-lg text-muted-foreground">
                    Practice with exam-level questions. Real-time simulation with detailed analysis.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map((test) => (
                    <Card key={test.id} className="hover:shadow-lg transition-all border-t-4 border-t-primary flex flex-col h-full">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="secondary" className="uppercase">
                                    {test.category}
                                </Badge>
                                {test.questions.length === 100 && (
                                    <Badge variant="outline" className="border-green-600 text-green-600 bg-green-50">
                                        Full Length
                                    </Badge>
                                )}
                            </div>
                            <CardTitle className="text-xl line-clamp-2">{test.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            <div className="flex justify-between text-sm text-muted-foreground mb-6">
                                <div className="flex items-center gap-1">
                                    <FileQuestion className="h-4 w-4" />
                                    {test.questions.length} Qs
                                </div>
                                <div className="flex items-center gap-1">
                                    <Timer className="h-4 w-4" />
                                    {test.duration} Mins
                                </div>
                                <div className="flex items-center gap-1">
                                    <BarChart className="h-4 w-4" />
                                    {test.totalMarks} Marks
                                </div>
                            </div>

                            <Link href={`/test/${test.id}`}>
                                <Button className="w-full font-bold" size="lg">Start Test Now</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
