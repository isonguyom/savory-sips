import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Adjust the path as needed

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  initialQuantity?: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  initialQuantity = 1,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { addItem } = useCart();

  const handleAddToCart = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    addItem({ ...product, quantity });
    console.log(`Added ${quantity} of ${product.name} to the cart`);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (

    <button onClick={handleAddToCart} className="w-[30px] h-[30px] border border-[#501B1F] rounded-full flex items-center justify-center hover:bg-[#501B1F] hover:bg-opacity-10">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.73324 15.8537C8.37389 15.8537 8.89324 15.3343 8.89324 14.6937C8.89324 14.053 8.37389 13.5337 7.73324 13.5337C7.09259 13.5337 6.57324 14.053 6.57324 14.6937C6.57324 15.3343 7.09259 15.8537 7.73324 15.8537Z" stroke="#6B2A2A" stroke-width="0.690066" />
        <path d="M13.1467 15.8537C13.7873 15.8537 14.3067 15.3343 14.3067 14.6937C14.3067 14.053 13.7873 13.5337 13.1467 13.5337C12.506 13.5337 11.9867 14.053 11.9867 14.6937C11.9867 15.3343 12.506 15.8537 13.1467 15.8537Z" stroke="#6B2A2A" stroke-width="0.690066" />
        <path d="M2.70667 3.0935H4.25333L6.96309 11.6002H13.1467" stroke="#6B2A2A" stroke-width="0.690066" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.35984 9.66701L4.87195 5.02701H14.544C14.6053 5.02694 14.6658 5.04144 14.7204 5.06932C14.775 5.09719 14.8221 5.13766 14.858 5.18736C14.8939 5.23706 14.9175 5.29458 14.9267 5.35518C14.936 5.41577 14.9307 5.47771 14.9114 5.53587L13.6222 9.40253C13.5966 9.4795 13.5474 9.54645 13.4816 9.59391C13.4158 9.64138 13.3368 9.66695 13.2557 9.66701H6.35984Z" stroke="#6B2A2A" stroke-width="0.690066" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </button>
  );
};

export default AddToCartButton;
