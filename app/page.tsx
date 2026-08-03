import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import ProcessTimeline from "@/components/ProcessTimeline";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Industries />
        <ProcessTimeline />
      </main>
      <FooterCTA />
    </div>
  );
}
