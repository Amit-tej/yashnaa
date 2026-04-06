import { motion } from "framer-motion";

const letterLines = [
  { text: "Yashnaa,", style: "heading" },
  { text: "", style: "break" },
  { text: "I've been thinking about what to write for days now.", style: "normal" },
  { text: "And the truth is, there are no perfect words for this.", style: "normal" },
  { text: "", style: "break" },
  { text: "Six months.", style: "emphasis" },
  { text: "Half a year of knowing you exist in my world.", style: "normal" },
  { text: "And I still get that feeling, the one I got on day one,", style: "normal" },
  { text: "when your name lights up my screen.", style: "normal" },
  { text: "", style: "break" },
  { text: "I know we don't have the luxury of 'normal.'", style: "normal" },
  { text: "No morning coffees together.", style: "normal" },
  { text: "No random drives at midnight.", style: "normal" },
  { text: "No holding your hand when you're upset.", style: "normal" },
  { text: "", style: "break" },
  { text: "But what we have?", style: "emphasis" },
  { text: "It's something most people never find.", style: "normal" },
  { text: "A connection that survives on video calls (Yes you made me do that for youu) and late-night calls.", style: "normal" },
  { text: "A love that chose to stay, even when leaving would've been easier.", style: "normal" },
  { text: "", style: "break" },
  { text: "You make me want to be better.", style: "normal" },
  { text: "Not in some grand, dramatic way.", style: "normal" },
  { text: "But in the quiet ways by being more patient,", style: "normal" },
  { text: "listening harder, caring deeper.", style: "normal" },
  { text: "", style: "break" },
  { text: "I don't know what the future holds.", style: "normal" },
  { text: "But I know what my heart holds.", style: "emphasis" },
  { text: "And it's you. It's always been you.", style: "golden" },
  { text: "", style: "break" },
  { text: "Happy six months, my love.", style: "golden" },
  { text: "Here's to every month that follows. ✦", style: "normal" },
  { text: "", style: "break" },
  { text: "Forever yours,", style: "sign" },
  { text: "Amit", style: "sign-name" },
];

const TheLetter = () => (
  <section className="py-32 px-6 relative">
    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

    <div className="max-w-xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs tracking-[0.5em] uppercase font-body">A letter for you</span>
        <div className="mt-4 w-12 h-px bg-primary/40 mx-auto" />
      </motion.div>

      <div className="relative border border-border/50 rounded-lg p-8 md:p-12 bg-card/30 backdrop-blur-sm border-glow">
        {letterLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.5 }}
            className={
              line.style === "heading"
                ? "font-handwriting text-4xl text-primary text-glow-sm mb-2"
                : line.style === "break"
                ? "h-5"
                : line.style === "emphasis"
                ? "font-display text-lg italic text-foreground"
                : line.style === "golden"
                ? "font-display text-lg text-primary text-glow-sm"
                : line.style === "sign"
                ? "text-muted-foreground text-sm mt-8 font-body"
                : line.style === "sign-name"
                ? "font-handwriting text-3xl text-primary"
                : "text-muted-foreground text-sm leading-loose font-body"
            }
          >
            {line.text || "\u00A0"}
          </motion.p>
        ))}
      </div>
    </div>
  </section>
);

export default TheLetter;
