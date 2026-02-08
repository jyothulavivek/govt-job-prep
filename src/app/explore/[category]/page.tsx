"use client";

import { useParams } from "next/navigation";
import { EXAM_CATEGORIES } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function CategoryPage() {
    const params = useParams();
    const categoryId = params.category as string;
    const category = EXAM_CATEGORIES[categoryId as keyof typeof EXAM_CATEGORIES];

    if (!category) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h1 className="text-2xl font-bold">Category Not Found</h1>
                <Link href="/explore">
                    <Button variant="link" className="mt-4">Go Back</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <Link href="/explore" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Explore
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-2">{category.title}</h1>
                <p className="text-xl text-muted-foreground">{category.description}</p>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Subjects & Syllabus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.subjects.map((subject) => (
                    <Card key={subject.id} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary/50">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                                <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-xl">{subject.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                Full syllabus coverage including video lectures and notes.
                            </p>
                            <Link href={`/learn/${subject.id}`}>
                                <Button className="w-full">Start Learning</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
