import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";

import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white">
      <Hero />
      <FeaturedWork />

      <TechStack />
      <Contact />
    </main>
  );
}
