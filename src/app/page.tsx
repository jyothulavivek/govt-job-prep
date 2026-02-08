"use client";

import { Hero } from "@/components/layout/Hero";
import { JobCategories } from "@/components/layout/JobCategories";
import { CurrentAffairsFeed } from "@/components/features/CurrentAffairsFeed";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 -mt-24 relative z-10 mb-12">
        <div className="flex justify-end mb-4">
          <Link href="/current-affairs">
            <Button variant="secondary" className="shadow-lg border-2 border-primary/20 gap-2 font-semibold">
              <Calendar className="h-4 w-4" />
              View Date-wise Archives
            </Button>
          </Link>
        </div>
        <CurrentAffairsFeed />
      </div>
      <JobCategories />
    </div>
  );
}
