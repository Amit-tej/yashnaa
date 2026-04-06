import Starfield from "@/components/Starfield";
import CinematicHero from "@/components/CinematicHero";
import OurChapters from "@/components/OurChapters";
import TheLetter from "@/components/TheLetter";
import ReasonsSection from "@/components/ReasonsSection";
import GlowingCounter from "@/components/GlowingCounter";
import GrandFinale from "@/components/GrandFinale";

const Index = () => (
  <div className="relative min-h-screen bg-gradient-night overflow-x-hidden">
    <Starfield />
    <div className="relative z-10">
      <CinematicHero />
      
      {/* Divider */}
      <div className="flex justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-primary/40 text-xs">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>

      <OurChapters />

      <div className="flex justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-primary/40 text-xs">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>

      <TheLetter />

      <div className="flex justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-primary/40 text-xs">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>

      <ReasonsSection />

      <div className="flex justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-primary/40 text-xs">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>

      <GlowingCounter />
      <GrandFinale />
    </div>
  </div>
);

export default Index;
