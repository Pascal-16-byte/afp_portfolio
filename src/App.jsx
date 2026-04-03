import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import TerminalCard from "./components/TerminalCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

const sectionIds = ["home", "about", "skills", "projects", "education", "contact"];

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const offset = window.innerHeight * 0.35;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const top = element.offsetTop - offset;
        const bottom = top + element.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(id);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-bg text-slate-100">
      <CursorGlow />
      <div
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-neonBlue via-cyan-300 to-neonGreen shadow-neon"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.1),transparent_18%),linear-gradient(180deg,#05070b_0%,#030508_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid bg-[size:42px_42px] opacity-[0.08]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,7,11,0.55)_24%,#05070b_100%)]" />

      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />

        <motion.section
          id="projects"
          className="section-shell"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Projects />
            <TerminalCard />
          </div>
        </motion.section>

        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
