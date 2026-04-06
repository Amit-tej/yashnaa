import { motion } from "framer-motion";

const GrandFinale = () => (
  <section className="py-40 px-6 relative text-center">
    {/* Multiple ambient glows */}
    <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[120px]" />
    <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-primary/3 blur-[100px]" />

    <div className="relative max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <span className="text-primary/40 text-xs tracking-[0.5em] uppercase font-body">and so</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-display text-4xl md:text-6xl font-light leading-tight mb-6"
      >
        Here's to us,
        <br />
        <span className="text-primary text-glow">and the universe</span>
        <br />
        that brought us together.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="my-12"
      >
        <span className="font-handwriting text-4xl md:text-5xl text-primary text-glow">
          Happy 6 months, Yashnaa
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center gap-4 my-12"
      >
        {["✦", "♥", "✦"].map((s, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            className="text-primary text-lg"
          >
            {s}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="font-display text-xl italic text-muted-foreground mb-16"
      >
        "I don't need the world. I just need you."
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="pt-16 border-t border-border/30"
      >
        <p className="text-muted-foreground/50 text-xs font-body tracking-[0.3em] uppercase">
          built with love, line by line
        </p>
        <p className="font-handwriting text-xl text-primary/60 mt-2">— Amit Tej</p>
      </motion.div>
    </div>
  </section>
);

export default GrandFinale;
