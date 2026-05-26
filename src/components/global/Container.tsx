import React from "react";
import { twMerge } from "tailwind-merge";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {

  const base = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-5";
  const classes = twMerge(base, className);
  return <div className={classes}>{children}</div>;
}
export default Container;
