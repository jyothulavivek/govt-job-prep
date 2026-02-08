"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Calendar, FileText, Globe, Bookmark } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

// Mock Data Generator allowing date-specific content
const getNewsForDate = (dateStr: string) => {
    // Deterministic "random" based on date string length or chars
    const seed = dateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    return [
        {
            id: 1,
            category: "National Appointment",
            title: `Government appoints new Secretary for Ministry of ${seed % 2 === 0 ? "finance" : "Defence"}`,
            description: "The Appointments Committee of the Cabinet (ACC) has approved the appointment...",
            tags: ["Polity", "Appointments"]
        },
        {
            id: 2,
            category: "Sports",
            title: `India wins ${seed % 3 === 0 ? "Gold" : "Silver"} medal in Asian Championships`,
            description: "A remarkable performance by the Indian contingent in the final match...",
            tags: ["Sports", "Awards"]
        },
        {
            id: 3,
            category: "International",
            title: "G20 Summit discusses climate action goals for 2030",
            description: "World leaders gathered to sign the new pact on renewable energy...",
            tags: ["International", "Environment"]
        },
        {
            id: 4,
            category: "Banking & Economy",
            title: `RBI imposes penalty on ${seed % 2 === 0 ? "HDFC" : "SBI"} Bank for non-compliance`,
            description: "The penalty was imposed under the provisions of the Banking Regulation Act...",
            tags: ["Banking", "Economy"]
        },
        {
            id: 5,
            category: "Daily Vocabulary",
            title: "Word of the Day: 'Ephemeral'",
            description: "Meaning: Lasting for a very short time. Synonyms: Transitory, Transient.",
            tags: ["English", "Vocab"]
        }
    ];
};

export default function CurrentAffairsPage() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const newsItems = getNewsForDate(selectedDate);

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <Link href="/explore" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
            </Link>

            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar: Date Picker */}
                <div className="md:w-1/3 space-y-6">
                    <Card className="border-l-4 border-l-primary/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-primary" />
                                Select Date
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <input
                                type="date"
                                value={selectedDate}
                                max={new Date().toISOString().split('T')[0]} // No future dates
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full p-2 border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                            />
                            <p className="text-xs text-muted-foreground mt-2">
                                Browse archives from previous months.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Quick Links</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" className="w-full justify-start" onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}>
                                Today's News
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                                Monthly PDF Capsules
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                                Weekly Quiz
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content: News Feed */}
                <div className="md:w-2/3">
                    <div className="mb-6 flex items-baseline justify-between">
                        <h1 className="text-3xl font-bold">Current Affairs</h1>
                        <span className="text-muted-foreground font-medium">
                            {format(new Date(selectedDate), "MMMM dd, yyyy")}
                        </span>
                    </div>

                    <div className="space-y-6">
                        {newsItems.map((news) => (
                            <Card key={news.id} className="hover:shadow-md transition-shadow">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <Badge variant="secondary" className="mb-2">{news.category}</Badge>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Bookmark className="h-4 w-4 text-muted-foreground" />
                                        </Button>
                                    </div>
                                    <CardTitle className="text-xl leading-tight">
                                        {news.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        {news.description}
                                    </p>
                                    <div className="flex gap-2">
                                        {news.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"># {tag}</span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
