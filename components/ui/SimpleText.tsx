"use client";
import { motion } from "framer-motion";

type SimpleTextProps = {
  text: string;
  className?: string;
};

const SimpleText = ({ text, className = "" }: SimpleTextProps) => {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {text}
    </motion.h1>
  );
};

export default SimpleText;
