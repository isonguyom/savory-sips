"use client";

import React, { useState } from "react";
import IconSearch from "./icons/IconSearch";

interface SearchProps {
  placeholder: string;
  onSearch: (query: string) => void; // Define the onSearch function in props
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query state as user types
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Call the onSearch prop with the current query
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <div className="w-full h-fit relative">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder={placeholder}
          className="text-xs placeholder:text-[#A8797D] w-full h-[34px] px-2.5 bg-transparent border border-[#3A1D1B] rounded-[42px]"
        />
        <button type="submit" className="absolute top-1/2 -translate-y-1/2 right-2.5">
          <IconSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
