import React from "react";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

interface CalloutProps {
  children: React.ReactNode;
  type?: "note" | "tip" | "warning" | "danger";
  title?: string;
}

const typeConfig = {
  note: {
    icon: Info,
    bgColor: "bg-primary/5",
    borderColor: "border-primary/30",
    textColor: "text-primary",
    iconColor: "text-primary",
  },
  tip: {
    icon: CheckCircle,
    bgColor: "bg-secondary/5",
    borderColor: "border-secondary/30",
    textColor: "text-secondary",
    iconColor: "text-secondary",
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-accent/5",
    borderColor: "border-accent/30",
    textColor: "text-accent",
    iconColor: "text-accent",
  },
  danger: {
    icon: AlertCircle,
    bgColor: "bg-destructive/5",
    borderColor: "border-destructive/30",
    textColor: "text-destructive",
    iconColor: "text-destructive",
  },
};

export default function Callout({
  children,
  type = "note",
  title,
}: CalloutProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`
        my-6 p-4 rounded-xl border-l-4 backdrop-blur-sm
        ${config.bgColor} ${config.borderColor} ${config.textColor}
      `}
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          {title && (
            <p className="font-semibold mb-1 text-sm">{title}</p>
          )}
          <div className="text-sm leading-relaxed [&_p]:my-2 [&_p]:text-inherit">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}