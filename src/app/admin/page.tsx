"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Plus, Trash2, Save, ArrowLeft, Newspaper, BookOpen } from "lucide-react";
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

// Define the shape of a Study Note
interface StudyNote {
    id: number;
    date: string;
    subject: string;
    title: string;
    content: string;
}

export default function AdminPage() {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState<'news' | 'notes'>('news');

    // === CURRENT AFFAIRS STATE ===
    const [newsList, setNewsList] = useState<NewsItem[]>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("current_affairs_data");
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [category, setCategory] = useState("National");
    const [title, setTitle] = useState("");
    const [pointInput, setPointInput] = useState("");
    const [points, setPoints] = useState<string[]>([]);

    // === STUDY NOTES STATE ===
    const [notesList, setNotesList] = useState<StudyNote[]>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("study_notes_data");
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });
    const [noteTitle, setNoteTitle] = useState("");
    const [noteSubject, setNoteSubject] = useState("History");
    const [noteContent, setNoteContent] = useState("");

    // Hydration check
    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    // Save to LocalStorage whenever lists change
    useEffect(() => {
        if (mounted) {
            localStorage.setItem("current_affairs_data", JSON.stringify(newsList));
        }
    }, [newsList, mounted]);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("study_notes_data", JSON.stringify(notesList));
        }
    }, [notesList, mounted]);

    // --- HANDLERS (News) ---
    const addPoint = () => {
        if (pointInput.trim()) {
            setPoints([...points, pointInput.trim()]);
            setPointInput("");
        }
    };

    const handleNewsSubmit = (e: React.FormEvent) => {
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

        setNewsList([newItem, ...newsList]);
        setTitle("");
        setPoints([]);
        setPointInput("");
        alert("News Posted Successfully!");
    };

    const deleteNews = (id: number) => {
        if (confirm("Delete this news item?")) {
            setNewsList(newsList.filter(item => item.id !== id));
        }
    };

    // --- HANDLERS (Notes) ---
    const handleNoteSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!noteTitle || !noteContent) return;

        const newNote: StudyNote = {
            id: Date.now(),
            date: new Date().toISOString().split('T')[0], // Today's date
            subject: noteSubject,
            title: noteTitle,
            content: noteContent
        };

        setNotesList([newNote, ...notesList]);
        setNoteTitle("");
        setNoteContent("");
        alert("Study Note Added Successfully!");
    };

    const deleteNote = (id: number) => {
        if (confirm("Delete this note?")) {
            setNotesList(notesList.filter(item => item.id !== id));
        }
    };

    if (!mounted) return <div className="p-10 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to App
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                        Admin Dashboard
                    </h1>
                    <p className="text-muted-foreground">Manage App Content</p>
                </div>

                <div className="flex gap-2 bg-secondary/50 p-1 rounded-lg">
                    <Button
                        variant={activeTab === 'news' ? 'default' : 'ghost'}
                        onClick={() => setActiveTab('news')}
                        className="gap-2"
                    >
                        <Newspaper className="h-4 w-4" /> Current Affairs
                    </Button>
                    <Button
                        variant={activeTab === 'notes' ? 'default' : 'ghost'}
                        onClick={() => setActiveTab('notes')}
                        className="gap-2"
                    >
                        <BookOpen className="h-4 w-4" /> Study Notes
                    </Button>
                </div>
            </div>

            {/* === CURRENT AFFAIRS TAB === */}
            {activeTab === 'news' && (
                <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="border-t-4 border-t-primary h-fit">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Plus className="h-5 w-5 text-primary" /> Post New Update
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleNewsSubmit} className="space-y-4">
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
                                    <label className="text-sm font-medium">Key Points</label>
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
                                    <Save className="h-4 w-4 mr-2" /> Publish News
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="h-fit">
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>Recent Posts</CardTitle>
                            <Badge variant="secondary">{newsList.length} Posts</Badge>
                        </CardHeader>
                        <CardContent>
                            {newsList.length === 0 ? (
                                <div className="text-center py-10 text-muted-foreground">
                                    <p>No posts yet.</p>
                                </div>
                            ) : (
                                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                    {newsList.map(item => (
                                        <div key={item.id} className="p-4 border rounded-lg hover:bg-secondary/10 transition-colors group relative bg-card">
                                            <div className="flex justify-between items-start mb-2">
                                                <Badge variant="outline" className="text-[10px]">{item.category}</Badge>
                                                <span className="text-xs text-muted-foreground">{item.date}</span>
                                            </div>
                                            <h4 className="font-semibold text-sm mb-2 leading-tight">{item.title}</h4>
                                            <div className="text-xs text-muted-foreground pl-3 border-l-2 border-muted">
                                                {item.points.slice(0, 2).map((p, i) => <p key={i} className="mb-0.5">• {p}</p>)}
                                                {item.points.length > 2 && <p className="italic">+ {item.points.length - 2} more points</p>}
                                            </div>

                                            <Button
                                                size="icon"
                                                variant="destructive"
                                                className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-all scale-90 hover:scale-100"
                                                onClick={() => deleteNews(item.id)}
                                            >
                                                <Trash2 className="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* === STUDY NOTES TAB === */}
            {activeTab === 'notes' && (
                <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="border-t-4 border-t-blue-500 h-fit">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Plus className="h-5 w-5 text-blue-500" /> Add Study Note
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleNoteSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Subject</label>
                                    <select
                                        value={noteSubject}
                                        onChange={e => setNoteSubject(e.target.value)}
                                        className="w-full p-2 border rounded bg-background"
                                    >
                                        <option>History</option>
                                        <option>Polity</option>
                                        <option>Geography</option>
                                        <option>Economy</option>
                                        <option>General Science</option>
                                        <option>Quant Formulas</option>
                                        <option>English Rules</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Topic Title</label>
                                    <Input
                                        placeholder="e.g. Mughal Empire Timeline"
                                        value={noteTitle}
                                        onChange={e => setNoteTitle(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Content / Details</label>
                                    <textarea
                                        value={noteContent}
                                        onChange={e => setNoteContent(e.target.value)}
                                        className="w-full p-3 border rounded min-h-[150px] bg-background resize-y font-mono text-sm"
                                        placeholder="Write notes here... (Supports basic text)"
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full font-bold bg-blue-600 hover:bg-blue-700">
                                    <Save className="h-4 w-4 mr-2" /> Save Note
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="h-fit">
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>Library</CardTitle>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">{notesList.length} Notes</Badge>
                        </CardHeader>
                        <CardContent>
                            {notesList.length === 0 ? (
                                <div className="text-center py-10 text-muted-foreground">
                                    <p>No study notes yet.</p>
                                </div>
                            ) : (
                                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                    {notesList.map(item => (
                                        <div key={item.id} className="p-4 border rounded-lg hover:border-blue-200 hover:bg-blue-50/30 transition-colors group relative bg-card">
                                            <div className="flex justify-between items-start mb-2">
                                                <Badge variant="outline" className="text-[10px] bg-blue-50 text-blue-700 border-blue-200">{item.subject}</Badge>
                                                <span className="text-xs text-muted-foreground">{item.date}</span>
                                            </div>
                                            <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground line-clamp-3 whitespace-pre-wrap font-mono bg-muted/30 p-2 rounded">
                                                {item.content}
                                            </p>

                                            <Button
                                                size="icon"
                                                variant="destructive"
                                                className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-all scale-90 hover:scale-100"
                                                onClick={() => deleteNote(item.id)}
                                            >
                                                <Trash2 className="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
