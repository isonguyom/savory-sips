"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import IconCart from "./icons/IconCart";
import IconCartDark from "./icons/IconCartDark";
import IconRatingStar from "./icons/IconRatingStar";

const ProductCard = () => {
  return (
    <div className="w-[180px] lg:w-[220px] bg-[#FFE8EA] bg-opacity-60 border border-[#F4EDED] shadow-lg rounded-[6px] px-1 pb-1 pt-4">
      <div className="w-fit mx-auto">
        <div className="w-fit">
          <Image src="/martini.png" alt="Logo" width={100} height={130} />
        </div>
      </div>
      <div className="w-full px-3 py-5 text-[#180A0B] bg-[#D3D3D3] bg-opacity-45 rounded-[4px] mt-3 flex flex-col gap-y-6">
        <div className="flex items-end gap-x-2">
          <h3 className="font-bold text-sm lg:text-lg">
            <Link href="/products/product"> Cabernet Sauvignon</Link> | Red Wine | 12% | 75cl
          </h3>
          <h5 className="text-xs font-bold">
            4.5
            <span className="inline-block w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
              <IconRatingStar />
            </span>
          </h5>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <h4 className="text-sm md:text-base lg:text-lg">10,0000 NGN</h4>
          <div className="w-[16px] h-[16px] md:w-[30px] md:h-[30px] border border-[#501B1F] rounded-full flex items-center justify-center">
            <div className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] flex items-center justify-center">
              <IconCartDark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
