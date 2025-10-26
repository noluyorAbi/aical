"use client";

type SplitTextProps = {
  text: string;
  className?: string;
};

const SplitText = ({ text, className = "" }: SplitTextProps) => {
  return <div className={className}>{text}</div>;
};

export default SplitText;
