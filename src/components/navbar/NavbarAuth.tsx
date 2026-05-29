"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { UserCircle } from "lucide-react";

export default function NavbarAuth() {
  const { isSignedIn } = useAuth();
  
  if (isSignedIn) {
    return <UserButton />;
  }
  
  return (
    <SignInButton mode="modal">
      <button className="text-white hover:opacity-75 transition">
        <UserCircle size={28} />
      </button>
    </SignInButton>
  );
}