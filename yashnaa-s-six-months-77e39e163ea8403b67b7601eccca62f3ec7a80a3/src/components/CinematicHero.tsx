import { motion } from "framer-motion";
import heroImage from "@/assets/hero-night.jpg";

const CinematicHero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt=""
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
    </div>

    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-6"
      >
        <span className="text-primary text-3xl glow-pulse">✦</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="uppercase tracking-[0.4em] text-muted-foreground text-xs md:text-sm font-body mb-8"
      >
        For the one who made the distance feel small
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight"
      >
        Half a year
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-primary text-glow italic font-light"
        >
          of us
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="mt-10 text-muted-foreground font-body text-sm md:text-base tracking-wide"
      >
        October 06, 2025 — a date written in the stars
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="mt-16 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-xs tracking-widest uppercase font-body">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </div>
  </section>
);

export default CinematicHero;
