"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";
import IconFacebook from "./icons/IconFacebook";
import IconX from "./icons/IconX";
import IconInstagram from "./icons/IconInstagram";
import IconLinkedin from "./icons/IconLinkedin";
import IconFooterArrow from "./icons/IconFooterArrow";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "" },
    { label: "Contact", href: "" },
  ];

  const resourcesLinks = [
    { label: "FAQ", href: "" },
    { label: "Return Policy", href: "" },
    { label: "Reviews", href: "" },
  ];

  const [openPages, setOpenPages] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openMailbox, setOpenMailbox] = useState(false);

 

  return (
    <footer className="w-full bg-[#6A4346] text-[#FFF8F7]">
      <div className="flex flex-col lg:flex-row justify-between gap-y-10 gap-x-14 px-5 sm:px-9 py-12">
        <div className="lg:order-2">
          <h3 className="text-white text-xl mb-4 font-medium">
            Join our mailing list and never miss out on amazing deals & offers.
          </h3>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className="lg:flex gap-x-14 justify-between">
        <div>
          <div className="lg:mb-10">
            <div className="flex justify-between gap-x-6">
              <h3 className="text-white text-xl mb-4 font-medium">Location</h3>
              <div className="lg:hidden" onClick={() => setOpenLocation((prev) => !prev)}>
                <IconFooterArrow />
              </div>
            </div>
            <p className={`${openLocation ? "flex" : "hidden"} lg:block`}>359 Gambi Crescent, Utako, Abuja.</p>
          </div>

          <div className="">
            <div className="flex justify-between gap-x-6">
              <h3 className="text-white text-xl mb-4 font-medium">Mailbox</h3>
              <div className="lg:hidden" onClick={() => setOpenMailbox((prev) => !prev)}>
                <IconFooterArrow />
              </div>
            </div>
            <p className={`${openMailbox ? "flex" : "hidden"} lg:block`}>hi@gmail.com</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between gap-x-6">
            <h3 className="text-white text-xl mb-4 font-medium">Pages</h3>
            <div className="lg:hidden" onClick={() => setOpenPages((prev) => !prev)}>
              <IconFooterArrow />
            </div>
          </div>
          <ul className={`pl-2 lg:pl-0 flex-col gap-y-2 ${openPages ? "flex" : "hidden"} lg:flex`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} passHref>
                  <span className="transition-colors hover:text-white hover:underline">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-between gap-x-6">
            <h3 className="text-white text-xl mb-4 font-medium">Resources</h3>
            <div className="lg:hidden" onClick={() => setOpenResources((prev) => !prev)}>
              <IconFooterArrow />
            </div>
          </div>
          <ul className={`pl-2 lg:pl-0 flex-col gap-y-2 ${openResources ? "flex" : "hidden"} lg:flex`}>
            {resourcesLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} passHref>
                  <span className="transition-colors hover:text-white hover:underline">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      <div className="w-full bg-[#0B0B0A] px-9 py-4 flex flex-wrap lg:order-2 justify-center md:justify-between gap-y-4 gap-x-6 items-center">
        <ul className="flex items-center gap-x-3 md:order-2">
          <li className="w-fit">
            <Link href="">
              <span className="transition-colors w-[41px] h-[41px] bg-[#501B1F] rounded-full flex items-center justify-center">
                <IconFacebook />
              </span>
            </Link>
          </li>
          <li className="w-fit">
            <Link href="">
              <span className="transition-colors w-[41px] h-[41px] bg-[#501B1F] rounded-full flex items-center justify-center">
                <IconX />
              </span>
            </Link>
          </li>
          <li className="w-fit">
            <Link href="">
              <span className="transition-colors w-[41px] h-[41px] bg-[#501B1F] rounded-full flex items-center justify-center">
                <IconInstagram />
              </span>
            </Link>
          </li>
          <li className="w-fit">
            <Link href="">
              <span className="transition-colors w-[41px] h-[41px] bg-[#501B1F] rounded-full flex items-center justify-center">
                <IconLinkedin />
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={102} height={25} />
          <span>© 2024 . All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
