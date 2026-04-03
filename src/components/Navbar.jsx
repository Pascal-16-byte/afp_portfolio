import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 shadow-neon backdrop-blur-xl sm:px-6">
        <a
          href="#home"
          className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-base text-cyan-300 transition duration-300 group-hover:shadow-neon">
            AFP
          </span>
          <span className="hidden text-slate-300 sm:block">Developer Console</span>
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => {
            const active = activeSection === link.id;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm transition duration-300 ${
                  active
                    ? "text-cyan-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-cyan-400/30 bg-cyan-400/10"
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-neon backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
