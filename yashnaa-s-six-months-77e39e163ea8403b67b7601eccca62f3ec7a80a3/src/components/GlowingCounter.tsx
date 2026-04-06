import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const START_DATE = new Date("2025-10-06T00:00:00");

const GlowingCounter = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = now.getTime() - START_DATE.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-muted-foreground text-xs font-body mb-2"
        >
          Since the day it all began
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-primary/50 text-xs tracking-[0.3em] font-body mb-12"
        >
          October 06, 2025
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-start gap-2 md:gap-6 flex-wrap"
        >
          {units.map((u, i) => (
            <div key={u.label} className="flex items-start gap-2 md:gap-6">
              <div className="flex flex-col items-center min-w-[70px] md:min-w-[100px]">
                <div className="relative">
                  <span className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground text-glow tabular-nums">
                    {String(u.value).padStart(u.label === "Days" ? 1 : 2, "0")}
                  </span>
                </div>
                <span className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.3em] font-body mt-3">
                  {u.label}
                </span>
              </div>
              {i < units.length - 1 && (
                <span className="text-primary/40 text-3xl md:text-5xl font-extralight mt-2 md:mt-3">:</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 font-display text-lg italic text-muted-foreground"
        >
          Every second with you is a second worth remembering.
        </motion.p>
      </div>
    </section>
  );
};

export default GlowingCounter;
