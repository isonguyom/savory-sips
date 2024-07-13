"use client";

import React, { useState } from "react";
import ValuesCard from "../components/ValuesCard";
import IconSortByArrow from "../components/icons/IconSortByArrow";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const ProductsPage = () => {
  const categories = [
    "Red wine",
    "White wine",
    "Rose wine",
    "Sparkling wine",
    "Dessert wine",
    "Fortified wine",
    "Natural & Organic wine",
  ];
  const brands = [
    "Robert Mondavi",
    "Hugel & Fils",
    "Beringer",
    "Veuve Clicquot",
    "Cantine Florio",
    "Frey Vineyards",
  ];

  const products = [
    { id: 1, name: "Cabernet Sauvignon", price: 10000, description: "Red Wine | 12% | 75cl", quantity: 1 },
    { id: 2, name: "Chardonnay", price: 8000, description: "White Wine | 11% | 75cl", quantity: 1 },
    { id: 3, name: "Merlot", price: 7500, description: "Red Wine | 13% | 75cl", quantity: 1 },
    { id: 4, name: "Pinot Grigio", price: 6500, description: "White Wine | 10% | 75cl", quantity: 1 },
    { id: 5, name: "Rosé", price: 7000, description: "Rose Wine | 11.5% | 75cl", quantity: 1 },
    { id: 6, name: "Prosecco", price: 9000, description: "Sparkling Wine | 11% | 75cl", quantity: 1 },
    // Add more products as needed
  ];

  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const productsPerPage = 10; // Number of products per page

  // Calculate total pages based on products length and products per page
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Function to handle pagination page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Function to filter products based on search query
  const getDisplayedProducts = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  // Handler function to update search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset pagination to first page when searching
  };

  return (
    <main>
      <section className="Header-bg w-full min-h-[300px] px-4 sm:px-9 flex items-end pb-8">
        <h1 className="text-2xl text-[#501B1F]">Elevate your wine experience</h1>
      </section>

      <section className="w-full px-4 sm:px-9 pt-[60px] pb-[40px]">
        <ValuesCard />
      </section>

      <section className="w-full px-4 sm:px-9 pb-[60px] lg:py-[80px] lg:flex lg:gap-x-6">
        <div
          className={`w-full lg:w-fit h-screen lg:h-fit flex z-30 lg:z-0 flex-col gap-y-8 lg:gap-y-14 bg-white lg:bg-transparent shadow-md lg:shadow-none fixed lg:relative top-0 left-0 lg:top-auto lg:left-auto px-4 sm:px-6 lg:px-0 lg:py-0 py-4 overflow-y-auto lg:overflow-y-hidden max-w-[300px] lg:max-w-auto transition-all duration-300 ${sideNavOpen ? "block" : "hidden"
            } lg:flex`}
        >
          <button
            onClick={() => setSideNavOpen((prev) => !prev)}
            className="text-lg font-medium text-black text-opacity-75 hover:text-opacity-100 block ml-auto mr-0 lg:hidden"
          >
            x
          </button>
          <div>
            <h4 className="text-lg lg:text-2xl font-bold text-[#180A0B] mb-4">
              Product by Category
            </h4>
            <ul className="flex flex-col gap-y-2">
              {categories.map((category) => (
                <li key={category} className="w-full">
                  <button
                    onClick={() => setSideNavOpen((prev) => !prev)}
                    className="w-full block text-left lg:text-lg font-medium text-[#501B1F] rounded-[16px] px-1 hover:bg-[#FFE8EA]"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg lg:text-2xl font-bold text-[#180A0B] mb-4">
              Brand by Category
            </h4>
            <ul className="flex flex-col gap-y-2">
              {brands.map((brand) => (
                <li key={brand} className="w-full">
                  <button
                    onClick={() => setSideNavOpen((prev) => !prev)}
                    className="w-full block text-left lg:text-lg font-medium text-[#501B1F] rounded-[16px] px-1 hover:bg-[#FFE8EA]"
                  >
                    {brand}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg lg:text-2xl font-bold text-[#180A0B] mb-4">
              Price
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              <div className="w-fit h-fit relative text-[#180A0B] text-xs font-medium">
                <input
                  type="text"
                  value="5,000"
                  placeholder="5,000"
                  className="text-xs placeholder:text-[#A8797D] h-[34px] px-2.5 bg-transparent border border-[#3A1D1B] rounded-[42px]"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-2.5">
                  NGN
                </div>
              </div>
              <span className="text-[#B19A9A] text-sm">&gt;</span>
              <div className="w-fit h-fit relative text-[#180A0B] text-xs font-medium">
                <input
                  type="text"
                  value="20,000"
                  placeholder="20,000"
                  className="text-xs placeholder:text-[#A8797D] h-[34px] px-2.5 bg-transparent border border-[#3A1D1B] rounded-[42px]"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-2.5">
                  NGN
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center gap-x-4 w-full mb-6">
            <button
              onClick={() => setSideNavOpen((prev) => !prev)}
              className="flex items-center gap-x-2 text-xs font-bold w-fit lg:hidden"
            >
              <h4>Sort by</h4>
              <IconSortByArrow />
            </button>

            <div className="w-full max-w-[350px]">
              <Search placeholder="Search for product" onSearch={handleSearch} />
            </div>
            <div className="flex items-center gap-x-6">
              <button className="w-[30px] h-[30px] rounded-full border border-[#441F1D] flex justify-center items-center text-xs lg:text-base font-medium hover:bg-[#501B1F] hover:bg-opacity-10">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33744 14.1887L8.13937 15.4639L1.18722 8.94092C1.07518 8.83642 0.984907 8.71079 0.921602 8.57126C0.858298 8.43174 0.823211 8.28107 0.81836 8.12794C0.81351 7.9748 0.838993 7.82222 0.893341 7.67897C0.947689 7.53571 1.02983 7.40463 1.13504 7.29324L7.66035 0.339857L8.93555 1.53676L2.81108 8.06307L9.33744 14.1887Z" fill="black" />
                </svg>

              </button>
              <button className="w-[30px] h-[30px] rounded-full border border-[#441F1D] flex justify-center items-center text-xs lg:text-base font-medium hover:bg-[#501B1F] hover:bg-opacity-10">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.860651 1.67708L2.09848 0.440418L8.84065 7.18025C8.94933 7.28825 9.03558 7.41667 9.09444 7.55813C9.15329 7.69958 9.18359 7.85129 9.18359 8.0045C9.18359 8.15771 9.15329 8.30942 9.09444 8.45087C9.03558 8.59233 8.94933 8.72075 8.84065 8.82875L2.09848 15.5721L0.861817 14.3354L7.18982 8.00625L0.860651 1.67708Z" fill="black" />
                </svg>

              </button>
            </div>
          </div>

          <ul className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-center sm:justify-between items-center mt-16">
            {getDisplayedProducts().map((product) => (
              <ProductCard key={product.id} product={product} />

            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
