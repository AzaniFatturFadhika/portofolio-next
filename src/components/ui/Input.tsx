import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor={id}
          className="text-xs font-semibold text-foreground/90 tracking-wide"
        >
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`px-4 py-3 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 transition-all duration-200 ${
            error
              ? "border-red-500/80 focus:ring-red-500/20 focus:border-red-500"
              : "border-border/80 focus:ring-primary/10 focus:border-primary dark:focus:border-secondary"
          } ${className}`}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 font-medium">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
