import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.2-3.37-1.2-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <path d="M4.98 3.5A1.75 1.75 0 1 0 5 7a1.75 1.75 0 0 0-.02-3.5ZM3.5 8.5h3V20h-3V8.5Zm5.5 0h2.88v1.57h.04c.4-.76 1.39-1.57 2.86-1.57 3.06 0 3.62 2.02 3.62 4.64V20h-3v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V20h-3V8.5Z" />
    ),
  },
];

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <motion.section
      id="contact"
      className="section-shell pb-24"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-10">
        <p className="section-kicker">Contact</p>
        <h2 className="section-heading">Let&apos;s build something meaningful.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <form className="card-panel space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Name</span>
              <input type="text" placeholder="Your name" className="input-shell" />
            </label>
            <label className="space-y-2">
              <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</span>
              <input type="email" placeholder="you@example.com" className="input-shell" />
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Message</span>
            <textarea
              rows="6"
              placeholder="Tell me about your idea..."
              className="input-shell resize-none"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center rounded-2xl border border-emerald-400/35 bg-emerald-400/10 px-6 py-3 font-semibold text-emerald-300 shadow-greenGlow transition duration-300 hover:-translate-y-1 hover:bg-emerald-400/15"
          >
            Send Message
          </button>
        </form>

        <div className="card-panel flex flex-col justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Connect</p>
            <p className="mt-4 text-2xl font-semibold text-white">
              Open to learning, collaboration, and new opportunities.
            </p>
            <p className="mt-4 leading-7 text-slate-400">
              Reach out for projects, internships, AI discussions, or just a good
              developer conversation.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:border-cyan-400/35 hover:text-cyan-300 hover:shadow-neon"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
