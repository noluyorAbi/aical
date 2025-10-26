"use client";
import { motion } from "framer-motion";

// SplitText Component inspired by React Bits
interface SplitTextProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd"
  > {
  text: string;
  delay?: number;
  stagger?: number;
}

export const SplitText = ({
  text,
  className = "",
  delay = 0.03,
  stagger = 0.05,
  ...props
}: SplitTextProps) => {
  const words = text.split(" ");

  return (
    <div className={className} {...props}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * stagger,
            ease: "easeOut",
          }}
          className="inline-block mr-4"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// GlowText Component for premium effects
interface GlowTextProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  children: React.ReactNode;
  glowColor?: "blue" | "purple" | "green" | "chronos";
}

export const GlowText = ({
  children,
  className = "",
  glowColor = "blue",
  ...props
}: GlowTextProps) => {
  const glowClasses = {
    blue: "shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]",
    purple: "shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)]",
    green: "shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)]",
    chronos: "shadow-[0_0_60px_-10px_rgba(59,130,246,0.6)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${glowClasses[glowColor]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Glassmorphism Container
interface GlassCardProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  children: React.ReactNode;
  intensity?: "light" | "medium" | "strong";
}

export const GlassCard = ({
  children,
  className = "",
  intensity = "light",
  ...props
}: GlassCardProps) => {
  const intensityClasses = {
    light: "bg-gray-800/50 backdrop-blur-md border-gray-700",
    medium: "bg-gray-800/70 backdrop-blur-lg border-gray-600",
    strong: "bg-gray-800/90 backdrop-blur-xl border-gray-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${intensityClasses[intensity]} border rounded-2xl p-8 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Floating Animation Component
interface FloatingElementProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  children: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

export const FloatingElement = ({
  children,
  intensity = "subtle",
  className = "",
  ...props
}: FloatingElementProps) => {
  const intensityClasses = {
    subtle: { y: [-4, 4], duration: 3 },
    medium: { y: [-8, 8], duration: 2.5 },
    strong: { y: [-12, 12], duration: 2 },
  };

  return (
    <motion.div
      animate={intensityClasses[intensity]}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
