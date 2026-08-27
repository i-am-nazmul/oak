"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection1 from "@/components/HeroSections/HeroSection1";
import HeroSection2 from "@/components/HeroSections/HeroSection2";
import HeroSection3 from "@/components/HeroSections/HeroSection3";
import HeroSection4 from "@/components/HeroSections/HeroSection4";
import HeroSection5 from "@/components/HeroSections/HeroSection5";
import HeroSection6 from "@/components/HeroSections/HeroSection6";
import HeroSection7 from "@/components/HeroSections/HeroSection7";
import HeroSection8 from "@/components/HeroSections/HeroSection8";
import HeroSection9 from "@/components/HeroSections/HeroSection9";
import FooterCTA from "@/components/FooterCTA";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      <div className="flex flex-col min-h-screen bg-transparent overflow-x-clip">
        <ScrollToTop />
        <Navbar />
        <main>
          <HeroSection1 />
          <HeroSection2 />
          <HeroSection3 />
          <HeroSection4 />
          <HeroSection5 />
          <HeroSection6 />
          <HeroSection7 />
          <HeroSection8 />
          <HeroSection9 />
        </main>
        <FooterCTA />
      </div>
    </>
  );
}
