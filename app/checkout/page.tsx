"use client";

import Image from "next/image";
import React, { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";

export default function CheckoutPage() {
  const [query, setQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
    }
  };
  return (
    <main className="w-full pt-32 pb-14 px-4 sm:px-9 text-[#501B1F]">
      <h1 className="text-xl lg:text-3xl font-bold mb-5">Checkout</h1>
      <h4 className="text-lg lg:text-xl font-bold mb-8">Personal Information</h4>

      <section>

        <CheckoutForm />


      </section>
    </main>
  );
}
