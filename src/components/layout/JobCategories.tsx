import { Button } from "@/components/ui/Button";
import { Briefcase, Building2, Globe, Scale } from "lucide-react";
import Link from "next/link";

const categories = [
    {
        title: "SSC Exams",
        description: "CGL, CHSL, MTS, CPO preparation with detailed syllabus coverage.",
        icon: Briefcase,
        href: "/explore/ssc",
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "UPSC Civil Services",
        description: "Comprehensive NCERT summaries, standard books, and daily news analysis.",
        icon: Globe,
        href: "/explore/upsc",
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Banking & Insurance",
        description: "IBPS PO, SBI Clerk, RBI Grade B specialized reasoning and quant modules.",
        icon: Building2,
        href: "/explore/banking",
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Railways (RRB)",
        description: "NTPC, Group D tailored content with previous year papers.",
        icon: Scale, // Just using a placeholder icon
        href: "/explore/railways",
        color: "bg-purple-100 text-purple-600",
    },
];

export function JobCategories() {
    return (
        <div className="bg-muted/50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Choose Your Career Path
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-muted-foreground">
                        Dedicated study material and mock tests for every major government examination.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {categories.map((category) => (
                        <div key={category.title} className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-inset ring-gray-900/5 hover:shadow-md transition-shadow">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}>
                                <category.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold leading-8 text-foreground">
                                    {category.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {category.description}
                                </p>
                            </div>
                            <Link href={category.href} className="mt-4">
                                <Button variant="secondary" className="w-full">Explore {category.title.split(' ')[0]}</Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
