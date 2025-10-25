"use client";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const AnimatedText = ({
  text,
  className = "",
}: AnimatedTextProps) => {
  return <h1 className={className}>{text}</h1>;
};

export default AnimatedText;
