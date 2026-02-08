"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RefreshCw, Radio } from "lucide-react";
import { format } from "date-fns";

// Mock data generator
const generateNews = () => [
    {
        id: 1,
        title: "SSC CGL 2024 Notification Released",
        time: new Date(),
        category: "Recruitment",
    },
    {
        id: 2,
        title: "RBI Grade B Phase 1 Results Declared",
        time: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
        category: "Result",
    },
    {
        id: 3,
        title: "New Cabinet Ministers List Updated",
        time: new Date(Date.now() - 1000 * 60 * 15), // 15 mins ago
        category: "GK Update",
    },
    {
        id: 4,
        title: "Daily Vocabulary: 10 New Words Added",
        time: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
        category: "English",
    },
];

export function CurrentAffairsFeed() {
    const [news, setNews] = useState(generateNews());
    const [lastUpdated, setLastUpdated] = useState(new Date());
    const [loading, setLoading] = useState(false);

    const refreshNews = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setNews((prev) => {
                // Add a new random item to top to simulate live update
                const newUpdate = {
                    id: Date.now(),
                    title: "Live Update: Important Summit Concludes in Delhi",
                    time: new Date(),
                    category: "National News"
                };
                return [newUpdate, ...prev.slice(0, 4)];
            });
            setLastUpdated(new Date());
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        // Auto-refresh every 10 minutes (600,000 ms)
        const interval = setInterval(() => {
            refreshNews();
        }, 600000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-md mx-auto">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                        <Radio className="h-4 w-4 text-red-500 animate-pulse" />
                        Live Current Affairs
                    </CardTitle>
                    <Badge variant="outline" className="text-xs font-normal">
                        Updates every 10m
                    </Badge>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                        <span>Last updated: {format(lastUpdated, "hh:mm a")}</span>
                        <button
                            onClick={refreshNews}
                            disabled={loading}
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} />
                            Refresh
                        </button>
                    </div>
                    <div className="space-y-4">
                        {news.map((item) => (
                            <div key={item.id} className="flex gap-3 items-start border-b pb-3 last:border-0 last:pb-0 animate-in fade-in slide-in-from-top-1 duration-500">
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none text-foreground">
                                        {item.title}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary" className="text-[10px] px-1 py-0 h-5">
                                            {item.category}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground">
                                            {format(item.time, "hh:mm a")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
