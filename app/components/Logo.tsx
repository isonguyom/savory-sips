"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <span>
        <Image src="/logo.svg" alt="Logo" width={263} height={67} />
      </span>
    </Link>
  );
};

export default Logo;
