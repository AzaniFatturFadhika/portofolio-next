import React, { forwardRef } from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  id: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor={id}
          className="text-xs font-semibold text-foreground/90 tracking-wide"
        >
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          className={`px-4 py-3 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/70 min-h-[120px] focus:outline-none focus:ring-2 transition-all duration-200 resize-y ${
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

Textarea.displayName = "Textarea";
export default Textarea;
