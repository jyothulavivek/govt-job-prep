"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Calendar, FileText, Globe, Bookmark, Share2, Award, Edit } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

// Define types
interface NewsItem {
    id: number;
    category: string;
    title: string;
    points: string[];
    tags: string[];
    date?: string;
}

// Helper to get news (Mock + LocalStorage)
const getNewsForDate = (dateStr: string) => {
    let localData: NewsItem[] = [];

    // 1. Try to get from LocalStorage (Real User Updates)
    if (typeof window !== 'undefined') {
        try {
            const savedData = localStorage.getItem("current_affairs_data");
            if (savedData) {
                const parsed = JSON.parse(savedData);
                // Filter by date
                localData = parsed.filter((item: NewsItem) => item.date === dateStr);
            }
        } catch (e) {
            console.error("Error reading local storage", e);
        }
    }

    // 2. Mock Data (Simulation)
    const seed = dateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const mockData: NewsItem[] = [
        {
            id: 1,
            category: "National Appointment",
            title: `Government appoints new Secretary for Ministry of ${seed % 2 === 0 ? "Finance" : "Defence"}`,
            points: [
                "Who: Senior IAS officer Ravi Mittal appointed as the new Secretary.",
                "Replaced: He replaces outgoing secretary Ajay Kumar.",
                "Context: The decision was approved by the Appointments Committee of the Cabinet (ACC).",
                "Significance: Key role in upcoming Union Budget preparations."
            ],
            tags: ["Polity", "Appointments"]
        },
        {
            id: 2,
            category: "Sports",
            title: `India wins ${seed % 3 === 0 ? "Gold" : "Silver"} medal in Asian Championships`,
            points: [
                "Event: Asian Archery Championships 2025 held in Bangkok.",
                "Winner: The Indian mixed team defeated South Korea in the finals.",
                "Score: India won by a margin of 5-3.",
                "Key Player: Jyothi Surekha Vennam was the top scorer."
            ],
            tags: ["Sports", "Awards"]
        },
        {
            id: 3,
            category: "International",
            title: "G20 Summit: Leaders sign 'Green Energy Pact'",
            points: [
                "Host City: The summit was held in Rio de Janeiro, Brazil.",
                "Target: Member nations pledged to triple renewable energy capacity by 2030.",
                "India's Stance: India emphasized on 'Climate Justice' and technology transfer.",
                "Fund: A $100 billion Global Climate Fund was operationalized."
            ],
            tags: ["International", "Environment"]
        },
        {
            id: 4,
            category: "Banking & Economy",
            title: `RBI imposes penalty on ${seed % 2 === 0 ? "HDFC" : "SBI"} Bank`,
            points: [
                "Amount: A monetary penalty of ₹2.5 Crore was imposed.",
                "Reason: Non-compliance with directions on 'Interest Rate on Advances'.",
                "Act: Penalty imposed under Section 47A of the Banking Regulation Act, 1949.",
                "Impact: No impact on recent transactions of customers."
            ],
            tags: ["Banking", "Economy"]
        },
        {
            id: 5,
            category: "Index & Ranking",
            title: "India ranks 85th in Henley Passport Index 2025",
            points: [
                "Rank: India's rank improved from 87th to 85th.",
                "Top Rank: Singapore topped the list with visa-free access to 195 countries.",
                "Bottom: Afghanistan remains at the bottom of the index.",
                "Visa Free: Indian passport holders now have visa-free access to 62 countries."
            ],
            tags: ["Indices", "Reports"]
        }
    ];

    // Merge: Local Data first (User posts), then Mock Data
    return [...localData, ...mockData];
};

export default function CurrentAffairsPage() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

    // Effect to load news when date changes (Client-side only)
    useEffect(() => {
        setNewsItems(getNewsForDate(selectedDate));
    }, [selectedDate]);

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                    <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
                </Link>
                <Link href="/admin">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Edit className="h-4 w-4" /> Manage Updates
                    </Button>
                </Link>
            </div>

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
                                Today&apos;s News
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                                <FileText className="h-4 w-4 mr-2" /> Monthly PDF Capsules
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                                <Award className="h-4 w-4 mr-2" /> Weekly Quiz
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content: News Feed */}
                <div className="md:w-2/3">
                    <div className="mb-6 flex items-baseline justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">Daily Current Affairs</h1>
                            <p className="text-muted-foreground">Exam-oriented updates in bullet points</p>
                        </div>
                        <span className="text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-md">
                            {format(new Date(selectedDate), "MMMM dd, yyyy")}
                        </span>
                    </div>

                    <div className="space-y-6">
                        {newsItems.length === 0 && (
                            <div className="text-center py-10 text-muted-foreground">
                                No updates for this date.
                            </div>
                        )}

                        {newsItems.map((news) => (
                            <Card key={news.id} className="hover:shadow-md transition-shadow animated-card">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <Badge variant="secondary" className="mb-2 uppercase tracking-wide text-xs font-bold">{news.category}</Badge>
                                        <div className="flex gap-1">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                                <Share2 className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                                <Bookmark className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl leading-tight text-primary">
                                        {news.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-4">
                                        {news.points.map((point: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-2 mt-4 pt-4 border-t">
                                        {news.tags.map((tag: string) => (
                                            <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">#{tag}</span>
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
