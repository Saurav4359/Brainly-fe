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
    "border border-[#d6defa] bg-gradient-to-r from-[#eef1ff] via-[#dce4ff] to-[#cfdcff] text-[#182331] shadow-[0_14px_30px_rgba(73,95,165,0.12)] hover:from-[#f6f7ff] hover:via-[#e4e9ff] hover:to-[#d6defa]",
  secondary:
    "border border-[#d9dee6] bg-white/80 text-[#24313f] hover:border-[#bcc4d1] hover:bg-white",
  ghost:
    "border border-transparent bg-transparent text-[#415468] hover:bg-black/5",
};

const defaultStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-[0.01em] transition duration-200 disabled:cursor-not-allowed disabled:opacity-50";

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
      <span>{loading ? "Loading" : text}</span>
      {endIcon}
    </button>
  );
}
