import { motion } from "framer-motion";

function TerminalCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="card-panel h-fit overflow-hidden"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">terminal</p>
      </div>

      <div className="space-y-5 rounded-2xl border border-white/10 bg-[#020409] p-5 font-mono text-sm leading-7 text-slate-300">
        <div>
          <span className="text-neonGreen">&gt;</span> whoami
          <p className="pl-5 text-cyan-300">Abhineet Francis Pascal</p>
        </div>
        <div>
          <span className="text-neonGreen">&gt;</span> role
          <p className="pl-5 text-cyan-300">Data Science Student</p>
        </div>
        <div>
          <span className="text-neonGreen">&gt;</span> interests
          <p className="pl-5 text-slate-400">AI / ML / Analytics / Developer Experience</p>
        </div>
        <div>
          <span className="text-neonGreen">&gt;</span> status
          <p className="pl-5 text-emerald-300">Learning, building, and iterating.</p>
        </div>
        <div className="flex items-center gap-2 text-cyan-300">
          <span className="animate-pulseSoft">&gt;</span>
          <span>awaiting next command</span>
        </div>
      </div>
    </motion.aside>
  );
}

export default TerminalCard;
