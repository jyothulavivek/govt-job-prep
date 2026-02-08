"use client";

import { MOCK_TESTS } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Timer, HelpCircle, BarChart } from "lucide-react";

export default function TestListingPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Mock Test Series</h1>
                <p className="text-lg text-muted-foreground">
                    Practice with exam-level questions. Real-time simulation with detailed analysis.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_TESTS.map((test) => (
                    <Card key={test.id} className="hover:shadow-lg transition-all border-t-4 border-t-primary">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant={test.difficulty === 'High' ? 'destructive' : 'secondary'}>
                                    {test.difficulty} Difficulty
                                </Badge>
                                <span className="text-xs font-mono text-muted-foreground uppercase">{test.category}</span>
                            </div>
                            <CardTitle className="text-xl line-clamp-2">{test.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between text-sm text-muted-foreground mb-6">
                                <div className="flex items-center gap-1">
                                    <HelpCircle className="h-4 w-4" />
                                    {test.questions} Qs
                                </div>
                                <div className="flex items-center gap-1">
                                    <Timer className="h-4 w-4" />
                                    {test.duration} Mins
                                </div>
                                <div className="flex items-center gap-1">
                                    <BarChart className="h-4 w-4" />
                                    300 Marks
                                </div>
                            </div>

                            <Link href={`/test/${test.id}`}>
                                <Button className="w-full" size="lg">Start Test Now</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
