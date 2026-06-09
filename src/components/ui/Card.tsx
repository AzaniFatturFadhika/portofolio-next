import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({
  children,
  className = "",
  onClick,
  hoverable = true,
}: CardProps) {
  const baseStyles = "bg-card text-card-foreground border border-border/80 rounded-2xl p-6 shadow-sm overflow-hidden";
  const hoverStyles = hoverable
    ? "hover:shadow-md hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    : "";

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
export default Card;
