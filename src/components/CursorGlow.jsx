import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", updatePosition);
    return () => window.removeEventListener("pointermove", updatePosition);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[5] hidden h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl md:block"
      animate={{ x: position.x - 144, y: position.y - 144 }}
      transition={{ type: "spring", stiffness: 110, damping: 22, mass: 0.2 }}
    />
  );
}

export default CursorGlow;
