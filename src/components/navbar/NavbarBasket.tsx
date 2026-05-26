"use client";

import { SlBasket } from "react-icons/sl";
import Link from "next/link";

function NavbarBasket({ href }: { href: string }) {
  return (
    <Link
     href={href}
      className="relative h-7  w-7 flex justify-center items-center rounded-md cursor-pointer   bg-brand-orange p-1"
    >
      <SlBasket className="fill-white size-6" />
      <div className="absolute  h-5 w-5 rounded-full bg-red-600 flex justify-center items-center -top-3 -right-3 text-white text-[13px]">
        3
      </div>
    </Link>
  );
}
export default NavbarBasket;
