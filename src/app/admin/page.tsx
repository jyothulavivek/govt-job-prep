"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Plus, Trash2, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Define the shape of a News Item
interface NewsItem {
    id: number;
    date: string;
    category: string;
    title: string;
    points: string[];
    tags: string[];
}

export default function AdminPage() {
    const [mounted, setMounted] = useState(false);
    const [newsList, setNewsList] = useState<NewsItem[]>([]);

    // Form State
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [category, setCategory] = useState("National");
    const [title, setTitle] = useState("");
    const [pointInput, setPointInput] = useState("");
    const [points, setPoints] = useState<string[]>([]);

    // Load data from LocalStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedData = localStorage.getItem("current_affairs_data");
        if (savedData) {
            setNewsList(JSON.parse(savedData));
        }
    }, []);

    // Save to LocalStorage whenever list changes
    useEffect(() => {
        if (mounted) {
            localStorage.setItem("current_affairs_data", JSON.stringify(newsList));
        }
    }, [newsList, mounted]);

    const addPoint = () => {
        if (pointInput.trim()) {
            setPoints([...points, pointInput.trim()]);
            setPointInput("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || points.length === 0) return;

        const newItem: NewsItem = {
            id: Date.now(),
            date,
            category,
            title,
            points,
            tags: [category]
        };

        // Add to top of list
        setNewsList([newItem, ...newsList]);

        // Reset Form
        setTitle("");
        setPoints([]);
        setPointInput("");
        alert("News Posted Successfully! Check Home Page.");
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this post?")) {
            setNewsList(newsList.filter(item => item.id !== id));
        }
    };

    if (!mounted) return <div className="p-10">Loading Admin Panel...</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to App
            </Link>

            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                        Admin Dashboard
                    </h1>
                    <p className="text-muted-foreground">Manage Daily Current Affairs</p>
                </div>
                <div className="bg-secondary px-4 py-2 rounded-lg text-center">
                    <span className="block text-2xl font-bold">{newsList.length}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Total Posts</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

                {/* LEFT: Add New Post Form */}
                <Card className="border-t-4 border-t-primary h-fit">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Plus className="h-5 w-5 text-primary" /> Post New Update
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Date</label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={e => setDate(e.target.value)}
                                        className="w-full p-2 border rounded resize-none bg-background"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Category</label>
                                    <select
                                        value={category}
                                        onChange={e => setCategory(e.target.value)}
                                        className="w-full p-2 border rounded bg-background"
                                    >
                                        <option>National</option>
                                        <option>International</option>
                                        <option>Sports</option>
                                        <option>Awards</option>
                                        <option>Banking</option>
                                        <option>Science & Tech</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Headline</label>
                                <Input
                                    placeholder="e.g. India wins Gold in Asian Games"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Exam Points (Who, What, Where)</label>
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Add a point..."
                                        value={pointInput}
                                        onChange={e => setPointInput(e.target.value)}
                                        onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addPoint())}
                                    />
                                    <Button type="button" onClick={addPoint} variant="secondary">Add</Button>
                                </div>
                                <ul className="list-disc pl-5 text-sm space-y-1 mt-2 text-muted-foreground">
                                    {points.map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>
                            </div>

                            <Button type="submit" className="w-full font-bold">
                                <Save className="h-4 w-4 mr-2" /> Publish Now
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* RIGHT: Manage Existing Posts */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>Recent Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {newsList.length === 0 ? (
                            <div className="text-center py-10 text-muted-foreground">
                                <p>No posts yet.</p>
                                <p className="text-sm">Add your first update on the left!</p>
                            </div>
                        ) : (
                            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                                {newsList.map(item => (
                                    <div key={item.id} className="p-3 border rounded-lg hover:bg-secondary/10 transition-colors group relative">
                                        <div className="flex justify-between items-start mb-1">
                                            <Badge variant="outline" className="text-[10px]">{item.category}</Badge>
                                            <span className="text-xs text-muted-foreground">{item.date}</span>
                                        </div>
                                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground line-clamp-2">
                                            {item.points.join(" • ")}
                                        </p>

                                        <Button
                                            size="icon"
                                            variant="destructive"
                                            className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <Trash2 className="h-3 w-3" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
