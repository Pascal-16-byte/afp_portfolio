import { motion } from "framer-motion";

function Timeline() {
  return (
    <motion.section
      id="education"
      className="section-shell"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-10">
        <p className="section-kicker">Experience / Education</p>
        <h2 className="section-heading">Current learning journey.</h2>
      </div>

      <div className="card-panel relative overflow-hidden">
        <div className="absolute bottom-0 left-7 top-10 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/30 to-transparent sm:left-10" />

        <div className="relative pl-16 sm:pl-24">
          <div className="absolute left-[1.35rem] top-1 h-4 w-4 rounded-full border-4 border-bg bg-cyan-300 shadow-neon sm:left-[2.2rem]" />
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Present</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            B.Tech in Data Science
          </h3>
          <p className="mt-3 max-w-3xl leading-8 text-slate-400">
            Currently pursuing a degree focused on data-driven systems, machine learning,
            analytics, and computational problem solving. Building both technical depth
            and product-oriented thinking through continuous experimentation.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Timeline;
