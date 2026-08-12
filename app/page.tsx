import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import PopularCreators from "@/components/PopularCreators";
import ProcessTimeline from "@/components/ProcessTimeline";
import FooterCTA from "@/components/FooterCTA";
import WelcomePopup from "@/components/WelcomePopup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
      <WelcomePopup />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Industries />
        <PopularCreators />
        <ProcessTimeline />
      </main>
      <FooterCTA />
    </div>
  );
}
