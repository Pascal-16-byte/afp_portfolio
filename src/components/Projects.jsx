import { motion } from "framer-motion";

const projects = [
  {
    title: "Predictive Analytics Dashboard",
    description:
      "A data-first dashboard for exploring trends, forecasting outcomes, and surfacing actionable insights through interactive visual panels.",
    stack: ["Python", "Pandas", "React", "Charts"],
    link: "https://github.com/",
  },
  {
    title: "AI Resume Matcher",
    description:
      "An intelligent screening tool that compares resumes with job descriptions to highlight fit, keyword alignment, and skill gaps.",
    stack: ["NLP", "Machine Learning", "Flask", "SQL"],
    link: "https://github.com/",
  },
  {
    title: "Smart Campus Assistant",
    description:
      "A conversational student helper built to streamline access to notices, schedules, and academic information in one place.",
    stack: ["React", "APIs", "AI", "UX"],
    link: "https://github.com/",
  },
];

function Projects() {
  return (
    <div>
      <div className="mb-10">
        <p className="section-kicker">Projects</p>
        <h2 className="section-heading">Selected builds and experiments.</h2>
      </div>

      <div className="grid gap-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-neon"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),transparent_45%,rgba(52,211,153,0.08))] opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/35 hover:text-cyan-300"
                >
                  GitHub
                </a>
              </div>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
