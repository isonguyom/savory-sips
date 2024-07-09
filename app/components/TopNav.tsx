"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import Logo from "./Logo";
import Search from "./Search";
import IconCart from "./icons/IconCart";
import IconUser from "./icons/IconUser";
import IconHamburger from "./icons/IconHamburger";

const TopNav: React.FC = () => {
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-[#501B1F] z-20 lg:z-40 bg-opacity-75 px-4 sm:px-9 py-4 flex items-center justify-between fixed top-0">
      <div className="mt-8 lg:mt-0">
        <button onClick={handleToggleMenu} className="lg:hidden">
          <IconHamburger />
        </button>
        <ul
          className={`fixed lg:relative shadow-md lg:shadow-none left-0 top-[95px] lg:left-auto lg:top-auto bg-[#0B0B0A] lg:bg-transparent w-full max-w-[300px] lg:max-w-auto lg:w-fit px-6 py-10 lg:p-0 flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-4 transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} link={link} pathname={pathname} />
          ))}
        </ul>
      </div>
      <div className="w-[120px] sm:w-fit">
        <Logo />
      </div>
      <div className="flex items-center gap-x-8 mt-8 lg:mt-0">
        <div className="w-fit hidden lg:block">
          <Search placeholder="Search" />
        </div>
        <ul className="flex items-center gap-3">
          <li className="w-fit relative">
            <button className="w-[32px] md:w-[41px] h-[32px] md:h-[41px] bg-[#501B1F] rounded-full flex items-center justify-center">
              <Link href="/cart">
                <IconCart />
              </Link>
            </button>
            <div className="w-[15px] h-[15px] absolute -top-1 -right-1 rounded-full bg-[#CF1A1A] text-[#CFC1C2] text-xs font-medium flex justify-center items-center">
              1
            </div>
          </li>
          <li className="w-fit">
            <button className="w-[32px] md:w-[41px] h-[32px] md:h-[41px] bg-[#501B1F] rounded-full flex items-center justify-center">
              <IconUser />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
