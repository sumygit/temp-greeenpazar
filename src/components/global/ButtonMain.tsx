
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: "default" | "green" | "red" | "productButton" | "gold";
};
type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "default" | "green" | "red" | "productButton" | "gold";
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles = {
  default: " text-gray-500",
  //   default: "text-white hover:bg-blue-600 border rounded-md  bg-gray-400 px-5 py-1",

  green: "bg-green-900  text-white rounded-md  px-5 py-1 hover:bg-green-700",
  red: "bg-red-600  text-white rounded-md  px-1 py-1 hover:bg-red-500",
  gold: "bg-gradient-to-r from-[#D4A017] via-[#FFF176] to-[#D4A017] text-black px-4 py-1 rounded-lg",
  productButton:
    "bg-gradient-to-r from-[#15a545] via-[#02ff2c] to-[#15a545] text-black px-4 py-1 rounded-lg hover:bg-gradient-to-r hover:from-[#02ff2c] hover:via-[#15a545] hover:to-[#02ff2c] hover:text-white",
};

function ButtonMain({
  href,
  variant = "red",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "cursor-pointer ";
  const combinedClasses = twMerge(base, variantStyles[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
export default ButtonMain;
