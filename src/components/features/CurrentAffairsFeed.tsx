"use client";

import { useEffect, useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { RefreshCw, TrendingUp, Globe, Award, Briefcase, Calendar, Newspaper, Zap } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// High quality mock data for competitive exams
const STARTING_NEWS = [
    {
        id: 1,
        title: "India ranks 80th in Henley Passport Index 2025",
        time: new Date(),
        category: "Indices",
        icon: Globe,
    },
    {
        id: 2,
        title: "Rohan Bopanna becomes oldest World No. 1 in Men's Doubles",
        time: new Date(Date.now() - 1000 * 60 * 12),
        category: "Sports",
        icon: Award,
    },
    {
        id: 3,
        title: "Govt appoints new Chairman of 16th Finance Commission",
        time: new Date(Date.now() - 1000 * 60 * 45),
        category: "Appointments",
        icon: Briefcase,
    },
    {
        id: 4,
        title: "Interim Budget 2025: Fiscal Deficit target lower at 5.1%",
        time: new Date(Date.now() - 1000 * 60 * 120),
        category: "Economy",
        icon: TrendingUp,
    },
];

interface AdminNewsItem {
    id: number;
    date: string;
    category: string;
    title: string;
    points: string[];
}

const getIconForCategory = (cat: string) => {
    switch (cat.toLowerCase()) {
        case 'sports': return Award;
        case 'science & tech': return Zap;
        case 'international': return Globe;
        case 'economy': return TrendingUp;
        case 'appointments': return Briefcase;
        default: return Newspaper;
    }
};

export function CurrentAffairsFeed() {
    const [news, setNews] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem("current_affairs_data");
            if (savedData) {
                try {
                    const parsed: AdminNewsItem[] = JSON.parse(savedData);
                    const validItems = parsed.map(item => ({
                        id: item.id,
                        title: item.title,
                        time: new Date(item.date),
                        category: item.category,
                        icon: getIconForCategory(item.category)
                    }));
                    const combined = [...validItems, ...STARTING_NEWS];
                    const unique = combined.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
                    return unique.sort((a, b) => b.time.getTime() - a.time.getTime()).slice(0, 10);
                } catch (e) {
                    console.error("Failed to load news", e);
                }
            }
        }
        return STARTING_NEWS;
    });
    const [loading, setLoading] = useState(false);

    const refreshNews = useCallback(() => {
        setLoading(true);
        // Simulate refresh or re-fetch from local storage
        setTimeout(() => {
            const savedData = localStorage.getItem("current_affairs_data");
            if (savedData) {
                const parsed: AdminNewsItem[] = JSON.parse(savedData);
                const validItems = parsed.map(item => ({
                    id: item.id,
                    title: item.title,
                    time: new Date(item.date),
                    category: item.category,
                    icon: getIconForCategory(item.category)
                }));
                setNews(() => {
                    const combined = [...validItems, ...STARTING_NEWS];
                    const unique = combined.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
                    return unique.sort((a, b) => b.time.getTime() - a.time.getTime()).slice(0, 10);
                });
            }
            setLoading(false);
        }, 800);
    }, []);



    useEffect(() => {
        const interval = setInterval(refreshNews, 600000); // 10 mins
        return () => clearInterval(interval);
    }, [refreshNews]);

    return (
        <Card className="h-full border-l-4 border-l-primary shadow-sm bg-gradient-to-b from-card to-secondary/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2 border-b/50">
                <div className="space-y-1">
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        Top Headlines
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">Real-time exam updates</p>
                </div>
                <div className="flex items-center gap-1">
                    <Link href="/current-affairs">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/20 hover:text-primary" title="Select Date / Archives">
                            <Calendar className="h-4 w-4" />
                        </Button>
                    </Link>
                    <button
                        onClick={refreshNews}
                        disabled={loading}
                        className="p-2 hover:bg-secondary rounded-full transition-colors"
                        title="Refresh Feed"
                    >
                        <RefreshCw className={`h-4 w-4 text-muted-foreground ${loading ? "animate-spin" : ""}`} />
                    </button>
                </div>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="space-y-4">
                    {news.map((item, i) => (
                        <div key={item.id} className="group flex gap-3 items-start animate-in fade-in slide-in-from-top-2 duration-500">
                            <div className={`mt-1 p-1.5 rounded-full ${i === 0 ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                <item.icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className={`text-sm font-medium leading-snug group-hover:text-primary transition-colors ${i === 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    {item.title}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/80">
                                        {item.category}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground">
                                        • {format(item.time, "MMM d")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
