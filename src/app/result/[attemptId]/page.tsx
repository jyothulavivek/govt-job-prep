"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BadgeCheck, XCircle } from "lucide-react";

export default function ResultPage() {
    const searchParams = useSearchParams();
    const score = Number(searchParams.get("score") || 0);
    const total = Number(searchParams.get("total") || 0);

    const percentage = (score / total) * 100;
    const isPass = percentage >= 40;

    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <div className="max-w-lg mx-auto bg-card border rounded-2xl p-8 shadow-lg">
                <div className="mb-6 flex justify-center">
                    {isPass ? (
                        <BadgeCheck className="h-24 w-24 text-green-500" />
                    ) : (
                        <XCircle className="h-24 w-24 text-destructive" />
                    )}
                </div>

                <h1 className="text-3xl font-bold mb-2">{isPass ? "Congratulations!" : "Keep Practicing"}</h1>
                <p className="text-muted-foreground mb-8">
                    You scored <span className={`font-bold text-xl ${isPass ? "text-green-600" : "text-destructive"}`}>{score}</span> out of {total}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 text-left bg-secondary/30 p-4 rounded-lg">
                    <div>
                        <p className="text-xs text-muted-foreground">Accuracy</p>
                        <p className="font-medium">85%</p>
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">Percentile</p>
                        <p className="font-medium">92.5</p>
                    </div>
                </div>

                <div className="flex gap-4 justify-center">
                    <Link href="/test">
                        <Button variant="outline">Take Another Test</Button>
                    </Link>
                    <Link href="/">
                        <Button>Go to Dashboard</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
