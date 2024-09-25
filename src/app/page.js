import CircularText from "@/components/CircularText";
import MouseTracking from "@/components/MouseTracking";
import TransitionEffect from "@/components/TransitionEffect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "./Sections/Herosection";
import About from "./Sections/About";
import Contact from "./Sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Effects */}
      <TransitionEffect />
      <MouseTracking />
      <HeroSection />
      <About />
      <Contact />
    </main>
  );
}
