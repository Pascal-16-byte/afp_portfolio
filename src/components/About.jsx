import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="section-shell"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-10">
        <p className="section-kicker">About</p>
        <h2 className="section-heading">Data science mindset, builder energy.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card-panel">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="text-xs uppercase tracking-[0.32em] text-slate-500">
              about_me.md
            </span>
          </div>

          <p className="text-lg leading-8 text-slate-300">
            I&apos;m a B.Tech Data Science student who enjoys turning complex ideas into
            practical, polished solutions. My interests sit at the intersection of
            artificial intelligence, machine learning, data analysis, and thoughtful
            problem solving.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            I like building developer-friendly interfaces, understanding patterns in
            data, and experimenting with systems that make decisions smarter and more
            useful for real people.
          </p>
        </div>

        <div className="card-panel space-y-4">
          {[
            "AI-driven thinking",
            "Machine learning experimentation",
            "Data analysis and insights",
            "Problem solving with clean UX",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-slate-300 transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05]"
            >
              <span className="mr-3 text-emerald-300">&gt;</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
