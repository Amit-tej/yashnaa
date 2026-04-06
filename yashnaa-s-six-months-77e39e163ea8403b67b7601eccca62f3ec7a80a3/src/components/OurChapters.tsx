import { motion } from "framer-motion";

const chapters = [
  {
    number: "01",
    title: "The Beginning",
    subtitle: "October 2025",
    text: "It started with a conversation that should've ended. But it didn't. Because something about your words felt different — like they were meant to reach me.",
  },
  {
    number: "02",
    title: "The 3 AM Conversations",
    subtitle: "When sleep lost to you",
    text: "The world went quiet but we didn't. Those late night hours became ours — a secret world where only your voice existed. I'd fight sleep just to hear you laugh one more time.",
  },
  {
    number: "03",
    title: "The Distance",
    subtitle: "Different cities, one heartbeat",
    text: "Kilometers between us. No goodbye hugs. No stolen glances across a room. Just a screen, and somehow — that was enough. Because it was you on the other side.",
  },
  {
    number: "04",
    title: "The Choosing",
    subtitle: "Every single day",
    text: "Through the silence, through the overthinking, through the days when everything felt uncertain — I kept choosing you. Not because I had to. Because nothing else made sense.",
  },
  {
    number: "05",
    title: "The Growing",
    subtitle: "Six months deeper",
    text: "We didn't just survive the distance. We grew in it. I learned your silences, your moods, the way you say things without saying them. And I fell harder with every discovery.",
  },
];

const OurChapters = () => (
  <section className="py-32 px-6 relative">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <span className="text-primary text-xs tracking-[0.5em] uppercase font-body">The story of us</span>
        <h2 className="font-display text-4xl md:text-5xl mt-4 font-light">
          How we got <em className="text-primary text-glow-sm">here</em>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Glowing center line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

        {chapters.map((ch, i) => (
          <motion.div
            key={ch.number}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`relative mb-24 pl-20 md:pl-0 ${
              i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
            }`}
          >
            {/* Dot on line */}
            <div className="absolute left-[29px] md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(38_75%_55%/0.6)] -translate-x-1/2" />

            <span className="font-display text-6xl md:text-7xl font-light text-primary/10 absolute -top-6 left-20 md:left-auto md:right-auto">
              {ch.number}
            </span>
            <p className="text-primary/60 text-xs uppercase tracking-[0.3em] font-body mb-2">{ch.subtitle}</p>
            <h3 className="font-display text-2xl md:text-3xl font-light mb-4">{ch.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm font-body">{ch.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OurChapters;
