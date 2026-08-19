import Navbar from "@/components/Navbar";
import HeroSection1 from "@/components/HeroSections/HeroSection1";
import HeroSection2 from "@/components/HeroSections/HeroSection2";
import HeroSection3 from "@/components/HeroSections/HeroSection3";
import HeroSection4 from "@/components/HeroSections/HeroSection4";
import HeroSection5 from "@/components/HeroSections/HeroSection5";
import HeroSection6 from "@/components/HeroSections/HeroSection6";
import HeroSection7 from "@/components/HeroSections/HeroSection7";
import HeroSection8 from "@/components/HeroSections/HeroSection8";
import FooterCTA from "@/components/FooterCTA";
import WelcomePopup from "@/components/WelcomePopup";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent overflow-x-clip">
      <ScrollToTop />
      <Navbar />
      <WelcomePopup />
      <main>
        <HeroSection1 />
        <HeroSection2 />
        <HeroSection3 />
        <HeroSection4 />
        <HeroSection5 />
        <HeroSection6 />
        <HeroSection7 />
        <HeroSection8 />
      </main>
      <FooterCTA />
    </div>
  );
}
