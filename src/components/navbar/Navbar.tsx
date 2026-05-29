import { Suspense } from "react";
import Container from "../global/Container";
import NavbarBasket from "./NavbarBasket";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";
import NavbarAuth from "./NavbarAuth";

function Navbar() {
  return (
    <header className="bg-brand-green py-3">
      {/* 🚀 max-[730px]:grid -> 730px dan kichik ekranda tartib buzilmasligi uchun Grid tizimiga o'tamosiz.
        🚀 max-[730px]:grid-cols-2 -> Chapda Logo, o'ngda tugmalar turishi uchun 2 ta ustun hosil qilamiz.
      */}
      <Container className="flex justify-between items-center gap-x-7 gap-y-4 max-[730px]:grid max-[730px]:grid-cols-2">
        
        {/* 1. LOGO: Har doim tepada chap burchakda qoladi */}
        <div className="max-[730px]:col-span-1 max-[730px]:justify-self-start order-1">
          <NavbarLogo />
        </div>

        {/* 2. O'NG TOMON TUGMALARI: Har doim tepada o'ng burchakda qoladi */}
        <div className="flex justify-between gap-3 items-center max-[730px]:col-span-1 max-[730px]:justify-self-end order-3  max-[730px]:order-2">
          <NavbarAuth />
          <NavbarBasket href="/" />
          <NavbarMenu />
        </div>

        {/* 3. QIDIRUV PANELI: 730px da pastga tushadi va butun kenglikni (2 ta ustunni) egallaydi */}
        <div className="flex-1 w-full max-[730px]:col-span-2 order-2">
          <Suspense fallback={<div className="w-full h-10 bg-white/10 animate-pulse rounded-lg" />}>
            <NavbarSearch />
          </Suspense>
        </div>

      </Container>
    </header>
  );
}

export default Navbar;