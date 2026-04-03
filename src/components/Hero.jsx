import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["Data Scientist", "ML Enthusiast", "Developer"];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = deleting ? 55 : 110;

    const timeout = setTimeout(() => {
      if (!deleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        return;
      }

      if (!deleting && displayedText.length === currentRole.length) {
        setDeleting(true);
        return;
      }

      if (deleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        return;
      }

      setDeleting(false);
      setRoleIndex((value) => (value + 1) % roles.length);
    }, displayedText === currentRole && !deleting ? 1400 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [deleting, displayedText, roleIndex]);

  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-28 sm:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 shadow-neon"
          >
            &gt; booting portfolio.exe
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Abhineet Francis Pascal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl"
          >
            B.Tech Data Science Student | Aspiring AI Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex min-h-[3rem] items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:text-lg"
          >
            <span className="mr-3 text-neonGreen">$</span>
            <span className="text-slate-400">role:</span>
            <span className="ml-3 font-semibold text-cyan-300">{displayedText}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-blink bg-cyan-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-2xl border border-cyan-400/35 bg-cyan-400/15 px-6 py-3 font-semibold text-cyan-200 shadow-neon transition duration-300 hover:-translate-y-1 hover:bg-cyan-300/20"
            >
              View Projects
              <span className="text-xl transition duration-300 group-hover:translate-x-1">
                -&gt;
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition duration-300 hover:border-emerald-400/30 hover:text-emerald-300"
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-6 right-0 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 shadow-[0_0_40px_rgba(8,145,178,0.12)] backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-4 text-xs uppercase tracking-[0.35em] text-slate-500">
                vscode.preview
              </span>
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              <div className="rounded-2xl border border-cyan-400/15 bg-[#0b1220] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  profile.json
                </p>
                <pre className="mt-4 overflow-x-auto text-sm leading-7 text-slate-300">
{`{
  "name": "Abhineet Francis Pascal",
  "focus": ["AI", "Machine Learning", "Data Analysis"],
  "status": "building impactful systems",
  "currentMode": "learning + shipping"
}`}
                </pre>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Current Track
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">AI Engineering</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Exploring practical ML, analytics, and smart product building.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Dev Signal
                  </p>
                  <p className="mt-3 text-lg font-semibold text-emerald-300">
                    Online &amp; Iterating
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Blending clean UI with data-first engineering thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
