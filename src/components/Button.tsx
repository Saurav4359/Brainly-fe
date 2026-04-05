import type { ReactElement, ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactNode;
  onClick?: () => void;
  fullwidth?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
}

const variantClasses = {
  primary:
    "border border-[#74bfff] bg-gradient-to-r from-[#dff4ff] via-[#aee2ff] to-[#77c8ff] text-[#163653] shadow-[0_12px_32px_rgba(74,168,255,0.18)] hover:from-[#eff9ff] hover:via-[#bfe8ff] hover:to-[#87cfff]",
  secondary:
    "border border-[#b4dcff] bg-white/80 text-[#1f4d74] hover:border-[#8dcfff] hover:bg-[#f4fbff]",
  ghost:
    "border border-transparent bg-transparent text-[#4d82aa] hover:bg-[#edf7ff]",
};

const defaultStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-[0.18em] uppercase transition duration-200 disabled:cursor-not-allowed disabled:opacity-50";

export function Button({
  variant,
  text,
  startIcon,
  endIcon,
  onClick,
  fullwidth,
  loading,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClasses[variant]} ${defaultStyles}${fullwidth ? " w-full" : ""}`}
      disabled={loading}
    >
      {startIcon}
      <span>{loading ? "Processing" : text}</span>
      {endIcon}
    </button>
  );
}
