import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Tracks } from "@/components/tracks/Tracks";
import { Timeline } from "@/components/timeline/Timeline";
import { Prizes } from "@/components/prizes/Prizes";
import { WhyParticipate } from "@/components/participation/WhyParticipate";
import { Partners } from "@/components/partners/Partners";
import { FAQ } from "@/components/faq/FAQ";
import { FinalCTA } from "@/components/cta/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Prizes />
        <WhyParticipate />
        <Partners />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
