"use client";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGooglegemini,
} from "react-icons/si";

export default function Footer() {
  const technologies = [
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      url: "https://nextjs.org",
    },
    {
      name: "React",
      Icon: SiReact,
      url: "https://react.dev",
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      url: "https://www.typescriptlang.org",
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      url: "https://tailwindcss.com",
    },
    {
      name: "Framer Motion",
      Icon: SiFramer,
      url: "https://www.framer.com/motion",
    },
    {
      name: "Google Gemini",
      Icon: SiGooglegemini,
      url: "https://gemini.google.com",
    },
  ];

  return (
    <footer className="bg-slate-950/50 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main Content */}
          <div className="mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-lg mb-4"
            >
              Developed with ❤️ by{" "}
              <motion.a
                href="https://adatepe.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 font-medium hover:text-sky-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Alperen Adatepe
              </motion.a>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-500 text-sm"
            >
              Transform messages into calendar events with AI • Free & Open
              Source
            </motion.p>
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-slate-300 text-sm font-semibold mb-4 uppercase tracking-wider">
              Built With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-lg px-3 py-2 transition-all duration-300 group"
                >
                  <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    <tech.Icon className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-slate-800/50"
          >
            <div className="flex flex-col items-center gap-3">
              <p className="text-slate-500 text-xs">
                © {new Date().getFullYear()} AI Calendar Events. All rights
                reserved.
              </p>
              <motion.a
                href="https://github.com/noluyorAbi/aical"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-medium">View on GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
