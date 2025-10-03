import React from "react";
import { motion } from "framer-motion";

const StarsBackground = () => {
  const stars = Array.from({ length: 90 }).map((_, i) => {
    const size = Math.random() * 2 + 0.7;

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;

    const duration = Math.random() * 9 + 70;
    const delay = Math.random() * 1;

    return (
      <motion.div
        key={i}
        initial={{ x: startX, y: startY, opacity: 0.2 }}
        animate={{
          x: [startX, endX, startX],
          y: [startY, endY, startY],
          opacity: [0.7, 1, 0.2],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "50%",
          willChange: "transform, opacity",
        }}
      />
    );
  });

  return (
    <div className="w-full fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent" />
    </div>
  );
};

export default StarsBackground;
