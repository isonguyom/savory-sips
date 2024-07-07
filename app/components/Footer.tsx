import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";
import IconFacebook from "./icons/IconFacebook";
import IconX from "./icons/IconX";
import IconInstagram from "./icons/IconInstagram";
import IconLinkedin from "./icons/IconLinkedin";

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

  return (
    <footer className="w-full bg-[#6A4346] text-[#FFF8F7]">
      <div className="flex justify-between gap-x-14 px-9 py-12">
        <div>
          <div className="mb-10">
            <h3 className="text-white text-xl mb-4 font-medium">Location</h3>
            <p>359 Gambi Crescent, Utako, Abuja.</p>
          </div>

          <div className="">
            <h3 className="text-white text-xl mb-4 font-medium">Mailbox</h3>
            <p>hi@gmail.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-white text-xl mb-4 font-medium">Pages</h3>
          <ul className="flex flex-col gap-y-2">
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
          <h3 className="text-white text-xl mb-4 font-medium">Resources</h3>
          <ul className="flex flex-col gap-y-2">
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

        <div className="">
          <h3 className="text-white text-xl mb-4 font-medium">
            Join our mailing list and never miss out on amazing deals & offers.
          </h3>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0B0B0A] px-9 py-4 flex justify-between gap-x-6 items-center">
        <div className="flex gap-x-2 items-center">
          <Image src="/logo.svg" alt="Logo" width={102} height={25} />
          <p>© 2024 . All rights reserved.</p>
        </div>
        <ul className="flex items-center gap-x-3">
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
      </div>
    </footer>
  );
};

export default Footer;
