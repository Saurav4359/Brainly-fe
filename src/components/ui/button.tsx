import type { ReactElement } from "react";

type Variants = "primary" | "secondary";
interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-[#5D3FD3] text-white",
  secondary: "bg-[#7A63DD] text-[white] ",
};

const sizeStyles = {
  sm: " py-1   px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultstyles = "rounded-md flex ";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultstyles} ${
        sizeStyles[props.size]
      }`}
    >
     
      {props.startIcon ? <div className="pr-2"> {props.startIcon}</div> : null }
      {props.text}
      {props.endIcon}
    </button>
  );
};
