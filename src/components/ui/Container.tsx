import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export function Container({
  children,
  className = "",
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`max-w-6xl mx-auto px-6 w-full ${className}`}
    >
      {children}
    </Component>
  );
}
export default Container;
