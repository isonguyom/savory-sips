"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import IconRatingStar from "./icons/IconRatingStar";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    selling_price: number | null;
    prices: null;
    product_image: string[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full max-w-[300px] font-InriaSerif md:w-[300px] bg-[#FFE8EA] bg-opacity-60 border border-[#F4EDED] shadow-lg rounded-[10px] px-1 pb-1 pt-4 hover:opacity-80">
      <Link href={`/products/${product.id}`}>
        <span className="w-fit block mx-auto">
          {product.product_image.length > 0 ? (
            <Image src={product.product_image[0]} alt={product.name} width={145} height={202} />
          ) : (
            <Image src="/martini.png" alt="Default" width={145} height={202} />
          )}
        </span>
        <span className="w-full px-3 py-5 text-[#180A0B] bg-[#FFFBFB] bg-opacity-40 rounded-[10px] mt-3 flex flex-col gap-y-6">
          <span className="flex items-end gap-x-2">
            <span className="font-bold lg:text-lg">
              {product.name} | {product.description}
            </span>
            <span className="text-xs font-bold flex w-fit gap-x-2">
              4.5 <IconRatingStar />
            </span>
          </span>
          <div className="flex justify-between items-center gap-x-4">
            <h4 className="text-sm md:text-base lg:text-lg">
              {product.selling_price ? `${product.selling_price} NGN` : "Price not available"}
            </h4>
            <AddToCartButton product={{ ...product, quantity: 1 }} />
          </div>
        </span>
      </Link>
    </div>
  );
};

export default ProductCard;
