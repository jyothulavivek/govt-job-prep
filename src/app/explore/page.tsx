import { JobCategories } from "@/components/layout/JobCategories";

export default function ExplorePage() {
    return (
        <div className="pt-8 pb-20">
            <div className="container mx-auto px-4 text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Explore Examinations</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Select your target examination to access tailored study materials, mock tests, and previous year papers.
                </p>
            </div>
            <JobCategories />
        </div>
    );
}
