"use client";

import React, { useState } from "react";
import ValuesCard from "../components/ValuesCard";
import IconSortByArrow from "../components/icons/IconSortByArrow";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const products = [
    "Red wine",
    "White wine",
    "Rose wine",
    "Sparkling wine",
    "Dessert  wine",
    "Fortified  wine",
    "Natural & Organic  wine",
  ];
  const brands = [
    "Robert Mondavi",
    "Hugel & Fils",
    "Beringer",
    "Veuve Clicquot",
    "Cantine Florio",
    "Frey Vineyards",
  ];

  const drinks = [
    "Robert Mondavi",
    "Hugel & Fils",
    "Hugel & Fils",
    "Hugel & Fils",
    "Hugel & Fils",
    "Hugel & Fils",
    "Beringer",
    "Veuve Clicquot",
    "Cantine Florio",
    "Frey Vineyards",
  ];
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <main>
      <section className="Header-bg w-full min-h-[300px] px-4 sm:px-9 flex items-end pb-8">
        <h1 className="text-2xl text-[#501B1F]">
          Elevate your wine experience
        </h1>
      </section>

      <section className="w-full px-4 sm:px-9 pt-[60px] pb-[40px]">
        <ValuesCard />
      </section>

      <section className="w-full px-4 sm:px-9 pb-[60px] lg:py-[80px] lg:flex lg:gap-x-6">
        <div
          className={`w-full lg:w-fit h-screen lg:h-fit flex z-30 lg:z-0 flex-col gap-y-8 lg:gap-y-14 bg-white lg:bg-transparent shadow-md lg:shadow-none fixed lg:relative top-0 left-0 lg:top-auto lg:left-auto px-4 sm:px-6 lg:px-0 lg:py-0 py-4 overflow-y-auto lg:overflow-y-hidden max-w-[300px] lg:max-w-auto transition-all duration-300 ${
            sideNavOpen ? "block" : "hidden"
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
              {products.map((product) => (
                <li key={product} className="w-full">
                  <button
                    onClick={() => setSideNavOpen((prev) => !prev)}
                    className="w-full block text-left lg:text-lg font-medium text-[#501B1F] rounded-[16px] px-1 hover:bg-[#FFE8EA]"
                  >
                    {product}
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
              <div className="w-fit h-fit relative tet-[#180A0B] text-xs font-medium">
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
              <div className="w-fit h-fit relative tet-[#180A0B] text-xs font-medium">
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

            <Search placeholder="Search for product" />
            <div className="flex items-center gap-x-3">
              <button className="w-[14px] h-[14px] lg:w-[30px] lg:h-[30px] rounded-full border border-[#441F1D] flex justify-center items-center text-xs lg:text-base font-medium">
                &lt;
              </button>
              <button className="w-[14px] h-[14px] lg:w-[30px] lg:h-[30px] rounded-full border border-[#441F1D] flex justify-center items-center text-xs lg:text-base font-medium">
                &gt;
              </button>
            </div>
          </div>
          <ul className="flex flex-wrap gap-10 justify-between items-center">
            {drinks.map((item) => (
              <ProductCard key={item} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
