"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Magnetic Button - React Bits inspired
export const MagneticButton = ({
  children,
  className = "",
  as: Component = "button",
  href,
  ...props
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseProps = {
    className: `relative overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/30 hover:scale-105 hover:from-sky-400 hover:to-blue-500 hover:border-sky-400/50 border border-transparent ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    ...(href && { href }),
    ...props,
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Component {...baseProps}>
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 hover:opacity-100 transition-all duration-500 rounded-lg"
          animate={{ x: position.x * -0.5, y: position.y * -0.5 }}
        />
      </Component>
    </motion.div>
  );
};

// Shimmer Card - React Bits inspired
export const ShimmerCard = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`relative group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 overflow-hidden ${className}`}
      {...props}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/10 to-blue-500/10" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

// Animated Text - React Bits inspired
export const AnimatedText = ({ text, className = "", delay = 0, ...props }) => {
  const words = text.split(" ");

  return (
    <div className={className} {...props}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: "easeOut",
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Gradient Border Card - React Bits inspired
export const GradientBorderCard = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`relative group ${className}`}
      {...props}
    >
      {/* Gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      {/* Card content */}
      <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-800">
        {children}
      </div>
    </motion.div>
  );
};

// Spotlight Effect - React Bits inspired
export const SpotlightCard = ({ children, className = "", ...props }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Spotlight effect */}
      <div
        className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.1), transparent 40%)`,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
