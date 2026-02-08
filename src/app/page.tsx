import { Hero } from "@/components/layout/Hero";
import { JobCategories } from "@/components/layout/JobCategories";
import { CurrentAffairsFeed } from "@/components/features/CurrentAffairsFeed";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 -mt-24 relative z-10 mb-12">
        <CurrentAffairsFeed />
      </div>
      <JobCategories />
    </div>
  );
}
