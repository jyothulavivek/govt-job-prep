import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-background">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <a href="#" className="inline-flex space-x-6">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/10">
                                New: Live Current Affairs
                            </span>
                        </a>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Master Your Dream <span className="text-primary">Govt Job</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Comprehensive preparation for SSC, UPSC, Banking, and Railways.
                        Access premium video lessons, mock tests, and real-time current affairs updates.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link href="/explore">
                            <Button size="lg" className="gap-2">
                                Start Learning <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/test">
                            <Button variant="outline" size="lg">Take Mock Test</Button>
                        </Link>
                    </div>

                    <div className="mt-10 border-t pt-8">
                        <div className="flex gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">10k+</h3>
                                <p className="text-sm text-muted-foreground">Active Students</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">500+</h3>
                                <p className="text-sm text-muted-foreground">Mock Exams</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">Live</h3>
                                <p className="text-sm text-muted-foreground">Daily Updates</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Element / Illustration placeholder */}
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <div className="rounded-md bg-secondary p-8 w-[500px] h-[400px] flex items-center justify-center border shadow-sm">
                                <div className="text-center">
                                    <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold">Premium Dashboard</h3>
                                    <p className="text-muted-foreground">Mock Interface Preview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
