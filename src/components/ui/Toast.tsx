import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, X, Info } from "lucide-react";
import { motion } from "framer-motion";

export interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const config = {
    success: {
      bg: "bg-emerald-500",
      border: "border-emerald-600",
      icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    },
    error: {
      bg: "bg-red-500",
      border: "border-red-600",
      icon: <AlertCircle className="w-5 h-5 text-white" />,
    },
    info: {
      bg: "bg-blue-500",
      border: "border-blue-600",
      icon: <Info className="w-5 h-5 text-white" />,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3.5 rounded-2xl shadow-xl border text-white ${config[type].bg} ${config[type].border} max-w-sm`}
    >
      <div className="flex-shrink-0">{config[type].icon}</div>
      <p className="text-sm font-semibold leading-snug pr-4">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-150 cursor-pointer"
        aria-label="Dismiss toast"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
export default Toast;
