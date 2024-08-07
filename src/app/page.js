import Image from "next/image";
import Link from "next/link";

import CallToAction from "@/components/CallToAction";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import NewsFeed from "@/components/NewsFeed";
import HalalIndustries from "@/components/HalalIndustries";
import MarqueeSection from "@/components/MarqueeSection";

import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { MenuIcon } from "lucide-react";

export default async function Home() {
  return (
    <div className="py-10 px-8 space-y-28 container mx-auto">
      <header className="flex justify-between gap-20 duration-1000">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Halal DevCo. logo"
            width={180}
            height={37}
            priority
          />
        </Link>

        <div className="flex items-center gap-4">
          <div className="">العربیتۂ</div>
          <Button className="bg-primary-gradient max-sm:hidden">
            Book a Consultant
          </Button>
          <MenuIcon />
        </div>
      </header>
        <main className="space-y-28">
          <Hero />
          <MarqueeSection />
          <FeatureSection />
          <HalalIndustries />
          <NewsFeed />
          <CallToAction />
        </main>
      <Footer />
    </div>
  );
}
