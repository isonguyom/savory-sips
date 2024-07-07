"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import Logo from "./Logo";
import Search from "./Search";
import IconCart from "./icons/IconCart";
import IconUser from "./icons/IconUser";

const TopNav: React.FC = () => {
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#501B1F] bg-opacity-75 px-9 py-4 flex items-center justify-between fixed top-0">
      <ul className="flex gap-x-4">
        {navLinks.map((link) => (
          <NavLink key={link.label} link={link} pathname={pathname} />
        ))}
      </ul>
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-x-8">
        <Search />
        <ul className="flex items-center gap-3">
          <li className="w-fit relative">
            <button className="w-[41px] h-[41px] bg-[#501B1F] rounded-full flex items-center justify-center">
              <IconCart />
            </button>
            <div className="w-[15px] h-[15px] absolute -top-1 -right-1 rounded-full bg-[#CF1A1A] text-[#CFC1C2] text-xs font-medium flex justify-center items-center">
              1
            </div>
          </li>
          <li className="w-fit">
            <button className="w-[41px] h-[41px] bg-[#501B1F] rounded-full flex items-center justify-center">
              <IconUser />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
