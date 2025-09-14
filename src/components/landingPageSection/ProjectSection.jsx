import { motion } from "framer-motion";
import GlowingBackground from "./backgroundEffects/GlowingBackground";
import HopeMeds from '../../assets/project/hopemeds.png';
import Journal from '../../assets/project/journal.jpg';

// Example placeholder image component
function PlaceholderProjectImage() {
  return (
    <div className="rounded-xl overflow-hidden bg-white w-full h-full flex items-center justify-center border border-[#eee]">
      <div className="text-gray-300 p-8 text-center">
        <div className="mb-3 bg-gray-200 w-24 h-20 mx-auto"></div>
        <div className="h-4 w-2/3 bg-gray-200 mx-auto mb-2"></div>
        <div className="h-4 w-1/3 bg-gray-100 mx-auto"></div>
        <p className="mt-4 text-xs text-gray-400">Mockup / Wireframe</p>
      </div>
    </div>
  );
}

export default function FeaturedProject() {
  return (
    <section className="flex flex-col font-main items-center justify-center w-full relative py-12">
      <h3 className="text-white text-left font-bold text-4xl mb-4 pb-10 underline tracking-wide">Project Experience</h3>


      {/* First Project */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 relative z-10 mb-32 px-4 max-w-5xl w-full">
        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[270px]"
        >
          <h2 className="font-main font-bold text-3xl sm:text-4xl text-[#a176ff] mb-6">
            HopeMeds
          </h2>
          <p className="text-white/85">
            from: Aug 2025 — {new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' })}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-[#2B2540] bg-opacity-95 text-left rounded-xl px-6 py-5 shadow-lg w-full max-w-lg backdrop-blur-sm">
              <p className="text-white/85 text-base">
                A web platform for connecting surplus medicine donors with patients in need. HopeMeds streamlines medicine donations, inventory management, and distributions to communities. <br />
                Tech Stack: React, Tailwind CSS, React Router, Spring Boot, Java, MySQL, AWS, Spring Security, JWT, OAuth2 (Google), REST APIs.
              </p>
            </div>
          </motion.div>
          {/* Animated icon row */}
          <div className="flex gap-6 mt-9 justify-center md:justify-start">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, type: "spring" }}
            >
              <span className="inline-block text-white text-3xl animate-spin-slow">✽</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
            >
              <span className="inline-block text-white text-3xl animate-spin-slower">✽</span>
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[300px] max-w-xl"
        >
          <div className="relative rounded-xl p-1 shadow-lg flex items-center justify-center">
            {/* Glowing background */}
            <GlowingBackground
              zIndex={0}
              size={500}
              opacity={0.9}
              color="rgba(161,118,255,0.6)"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
            {/* Image above background */}
            <a href="https://hopemeds.netlify.app/" className="relative z-10 block w-full">
              <img
                src={HopeMeds}
                alt="HopeMeds"
                className="rounded-xl w-full h-auto transition-transform duration-200 hover:scale-110"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Spinning icon animations (using custom Tailwind classes) */}
      <style>{`
        .animate-spin-slow {
          animation: spin 2.7s linear infinite;
        }
        .animate-spin-slower {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>




      {/* Second Project */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 relative z-10 mb-32 px-4 max-w-5xl w-full">
        {/* LEFT: Image and Glow */}
        <div className="relative flex-1 min-w-[280px] max-w-xl flex items-center justify-center">
          {/* Glowing background behind image */}
          <GlowingBackground
            zIndex={0}
            size={500}
            opacity={0.9}
            color="rgba(161,118,255,0.6)"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 w-full"
          >
            <a href="https://github.com/Raajkr07/journal-management" className="relative z-10 block w-full">
              <img
                src={Journal}
                alt="Journal"
                className="rounded-xl w-full h-auto transition-transform duration-200 hover:scale-110"
              />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Text, Description, Flowers */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[270px] flex flex-col items-start"
        >
          <h2 className="font-main font-bold text-3xl sm:text-4xl text-[#a176ff] mb-6">
            Advance Journal Management
          </h2>
          <p className="text-white/85">
            from: July 2025 — Aug 2025
          </p>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-[#2B2540] bg-opacity-95 text-left rounded-xl px-6 py-5 shadow-lg w-full max-w-lg backdrop-blur-sm">
              <p className="text-white/85 text-base">
                An advanced Backend System for comprehensive journal management. The system enables researchers and authors to create, review, and publish academic journals efficiently. <br />
                Tech Stack: Spring Boot, MongoDB Atlas, Kafka, Redis, SonarQube, SLF4J, Swagger, REST APIs.
              </p>
            </div>
          </motion.div>
          {/* Animated icon row: right-aligned below description */}
          <div className="flex gap-6 mt-9 w-full justify-end">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-white text-3xl animate-spin-slow">✽</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-white text-3xl animate-spin-slower">✽</span>
            </motion.span>
          </div>
        </motion.div>

        {/* Spinning icon animations */}
        <style>{`
    .animate-spin-slow {
      animation: spin 2.7s linear infinite;
    }
    .animate-spin-slower {
      animation: spin 4s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `}</style>
      </div>

    </section>
  );
}
