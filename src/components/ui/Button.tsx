import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  isExternal?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  isExternal = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus:ring-primary",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/25 focus:ring-secondary",
    accent:
      "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 focus:ring-accent",
    outline:
      "border-2 border-border bg-transparent hover:bg-border/20 text-foreground focus:ring-border",
    ghost:
      "bg-transparent text-foreground hover:bg-border/25 focus:ring-border",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
export default Button;
