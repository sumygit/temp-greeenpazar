import Image from "next/image";
import Link from "next/link";

function NavbarLogo() {
  return (

    
    
      <Link href="/" className="  cursor-pointer ">
      {/* 1. Logotipning ikonka qismi (Chetlari kesilgan, tiniq holatda) */}
      <div className="relative w-35 p-3  flex items-center justify-center">
        <Image
          src="/images/greenpazartext.png"
          alt="Greenpazar Icon"
          fill
          priority
             sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
          className="object-contain  transition-transform duration-300 scale-115"
        />
      </div>

      {/* 2. Logotipning matnli qismi (Sof vektor - SVG) */}
  
    </Link>

  );
}
export default NavbarLogo;
