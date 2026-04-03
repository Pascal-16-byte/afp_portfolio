import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90, icon: "PY", color: "from-cyan-400 to-blue-500" },
  { name: "Machine Learning", level: 85, icon: "ML", color: "from-emerald-400 to-teal-500" },
  { name: "Data Analysis", level: 88, icon: "DA", color: "from-sky-400 to-cyan-400" },
  { name: "React", level: 80, icon: "RX", color: "from-cyan-300 to-cyan-500" },
  { name: "SQL", level: 78, icon: "DB", color: "from-emerald-300 to-green-500" },
  { name: "Git", level: 82, icon: "GT", color: "from-slate-300 to-slate-500" },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-shell"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-10">
        <p className="section-kicker">Skills</p>
        <h2 className="section-heading">Core tools in my stack.</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="card-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-cyan-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <p className="text-sm text-slate-500">Developer-ready proficiency</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-300">{skill.level}%</span>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-900">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-neon`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.9, delay: 0.15 + index * 0.08 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
