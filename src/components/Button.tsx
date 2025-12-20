import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick ?: ()=> void;
  fullwidth? : boolean;
  loading?: boolean;
}
const variantClasses = {
  primary: "bg-[#7164c0] text-black",
  secondary: "bg-[#9492db] text-black",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center ";
export function Button({ variant, text, startIcon ,onClick,fullwidth,loading}: ButtonProps) {
  return (
    <button onClick ={onClick}  className={variantClasses[variant] + " " + defaultStyles + `${fullwidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45" :""}`} disabled={loading}>
        <div className="pr-2">
      {startIcon}
        </div>
      {text}
    </button>
  );
}
