"use client";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

function NavbarSignOut() {
  const handleClick = () => {
    toast.success("Muvaffaqiyatli!");
    // toast.error("Xatolik!");
    // toast.info("Ma'lumot");
    // toast.warning("Ogohlantirish");
  };

  return (
    <div>
      <SignOutButton>
        <button onClick={handleClick} className="cursor-pointer">
          Click
        </button>
      </SignOutButton>
    </div>
  );
}
export default NavbarSignOut;
