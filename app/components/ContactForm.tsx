"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import IconSend from "./icons/IconSend";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSend} className="flex flex-col gap-y-2">
      <div className="w-full max-w-[246px] h-fit relative">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          className="text-xs w-full placeholder:text-[#A8797D] h-[34px] px-2.5 bg-transparent border border-[#3A1D1B] rounded-[42px]"
        />
      </div>

      <div className="w-full max-w-[246px] h-fit relative">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="text-xs w-full placeholder:text-[#A8797D] h-[34px] px-2.5 bg-transparent border border-[#3A1D1B] rounded-[42px]"
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-2.5 w-[25px] h-[25px] rounded-full bg-[#501B1F] flex justify-center items-center">
          <IconSend />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
