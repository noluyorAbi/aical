// React Bits inspired components
import React from "react";
import { motion } from "framer-motion";

// Button Component inspired by React Bits
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  [key: string]: any;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  loading = false,
  as: Component,
  href,
  target,
  rel,
  download,
  ...props
}: ButtonProps) => {
  // Automatically determine the component type
  const ComponentType = Component || (href ? "a" : "button");
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 focus:ring-sky-500 shadow-lg hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300",
    secondary:
      "bg-slate-800 text-slate-50 border border-slate-700 hover:bg-slate-700 focus:ring-sky-500 shadow-sm hover:shadow-md",
    ghost:
      "text-slate-400 hover:text-slate-50 hover:bg-slate-800/50 focus:ring-sky-500",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm rounded-lg",
    md: "px-4 py-2 text-base rounded-xl",
    lg: "px-6 py-3 text-lg rounded-xl",
    xl: "px-8 py-4 text-xl rounded-2xl",
  };

  const buttonProps = {
    className: `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`,
    onClick,
    disabled: disabled || loading,
    ...(href && { href, target, rel, download }),
    ...props,
  };

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      <ComponentType {...buttonProps}>
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </ComponentType>
    </motion.div>
  );
};

// Card Component inspired by React Bits
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  [key: string]: any;
}

export const Card = ({
  children,
  className = "",
  hover = false,
  gradient = false,
  ...props
}: CardProps) => {
  const baseClasses =
    "bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-800";
  const hoverClasses = hover
    ? "hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300"
    : "";
  const gradientClasses = gradient
    ? "bg-gradient-to-br from-slate-900/50 to-slate-800/50"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Input Component inspired by React Bits
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

export const Input = ({
  className = "",
  error = false,
  ...props
}: InputProps) => {
  const baseClasses =
    "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200 bg-slate-900 text-slate-50 placeholder-slate-400";
  const errorClasses = error
    ? "border-red-300 focus:ring-red-500"
    : "border-slate-700 focus:border-sky-500";

  return (
    <input
      className={`${baseClasses} ${errorClasses} ${className}`}
      {...props}
    />
  );
};

// Textarea Component inspired by React Bits
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: boolean;
}

export const Textarea = ({
  className = "",
  error = false,
  ...props
}: TextareaProps) => {
  const baseClasses =
    "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200 resize-none bg-slate-900 text-slate-50 placeholder-slate-400";
  const errorClasses = error
    ? "border-red-300 focus:ring-red-500"
    : "border-slate-700 focus:border-sky-500";

  return (
    <textarea
      className={`${baseClasses} ${errorClasses} ${className}`}
      {...props}
    />
  );
};

// Badge Component inspired by React Bits
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  [key: string]: any;
}

export const Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: BadgeProps) => {
  const baseClasses = "inline-flex items-center font-medium rounded-full";

  const variants = {
    default: "bg-slate-700 text-slate-200",
    primary: "bg-sky-600 text-sky-100",
    success: "bg-green-600 text-green-100",
    warning: "bg-yellow-600 text-yellow-100",
    danger: "bg-red-600 text-red-100",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// Alert Component inspired by React Bits
interface AlertProps {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  className?: string;
  [key: string]: any;
}

export const Alert = ({
  children,
  variant = "info",
  className = "",
  ...props
}: AlertProps) => {
  const baseClasses = "p-4 rounded-xl border flex items-start gap-3";

  const variants = {
    info: "bg-sky-950/20 border-sky-800 text-sky-200",
    success: "bg-green-950/20 border-green-800 text-green-200",
    warning: "bg-yellow-950/20 border-yellow-800 text-yellow-200",
    error: "bg-red-950/20 border-red-800 text-red-200",
  };

  const icons = {
    info: "ℹ️",
    success: "✅",
    warning: "⚠️",
    error: "❌",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="text-lg">{icons[variant]}</span>
      <div className="flex-1">{children}</div>
    </motion.div>
  );
};

// Container Component inspired by React Bits
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  [key: string]: any;
}

export const Container = ({
  children,
  className = "",
  maxWidth = "xl",
  ...props
}: ContainerProps) => {
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  };

  return (
    <div
      className={`container mx-auto px-4 ${maxWidthClasses[maxWidth]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
