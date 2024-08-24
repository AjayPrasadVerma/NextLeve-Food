import Link from "next/link";
import React from "react";

import logoImg from "@/assets/logo.png";

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>
    </header>
  );
};

export default MainHeader;
