"use client";

import React from "react";
import Link from "next/link";

interface NavLinkProps {
  link: {
    label: string;
    href: string;
  };
  pathname: string;
}

const NavLink: React.FC<NavLinkProps> = ({ link, pathname }) => {
  return (
    <li>
      <Link href={link.href} passHref>
        <span
          className={`text-lg font-medium transition-colors ${pathname === link.href
            ? "text-white underline"
            : "text-[#A09192] hover:text-white"
            }`}
        >
          {link.label}
        </span>
      </Link>
    </li>
  );
};

export default NavLink;
