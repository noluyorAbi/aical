"use client";

type FadeTextProps = {
  text: string;
  className?: string;
};

const FadeText = ({ text, className = "" }: FadeTextProps) => {
  return <div className={className}>{text}</div>;
};

export default FadeText;
