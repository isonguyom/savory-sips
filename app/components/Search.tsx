"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import IconSearch from "./icons/IconSearch";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <div className="w-fit h-fit relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="text-xs placeholder:text-[#A8797D] h-[34px] px-2.5 bg-transparent border border-[#3A1D1B] rounded-[42px]"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-2.5">
          <IconSearch />
        </div>
      </div>
    </form>
  );
};

export default Search;
