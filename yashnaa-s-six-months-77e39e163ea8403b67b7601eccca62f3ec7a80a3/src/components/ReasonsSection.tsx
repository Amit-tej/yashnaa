import { motion } from "framer-motion";
import { useState } from "react";

const reasons = [
  "The way you laugh when you're actually happy",
  "How you make even silence feel comfortable",
  "Your voice at 3 AM, sleepy and soft",
  "The way you say my name",
  "How you care without showing it",
  "Your stubbornness (yes, even that)",
  "The way you get excited about little things",
  "How you make me want to be a better person",
  "Your patience with me when I'm being difficult",
  "The fact that you chose to stay",
  "How you make distance feel like nothing",
  "Everything you are, and everything you're becoming",
];

const ReasonsSection = () => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggleReveal = (idx: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs tracking-[0.5em] uppercase font-body">Tap each star to reveal</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 font-light">
            Twelve reasons I love <em className="text-primary text-glow-sm">you</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => toggleReveal(i)}
              className={`aspect-square rounded-lg border transition-all duration-500 flex items-center justify-center p-3 text-center cursor-pointer
                ${
                  revealed.has(i)
                    ? "bg-primary/10 border-primary/40 border-glow"
                    : "bg-card/50 border-border/30 hover:border-primary/30 hover:bg-card/80"
                }
              `}
            >
              {revealed.has(i) ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-foreground text-xs md:text-sm font-body leading-snug"
                >
                  {reason}
                </motion.span>
              ) : (
                <span className="text-primary text-2xl animate-glow-pulse">✦</span>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
