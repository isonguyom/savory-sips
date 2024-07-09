import React from "react";
import IconCertified from "./icons/IconCertified";
import IconShipping from "./icons/IconShipping";
import IconTransparent from "./icons/IconTransparent";

const ValuesCard = () => {
  const values = [
    {
      title: "Certified",
      desc: "Certified Marketplace since 2024",
      icon: IconCertified,
    },
    {
      title: "Shipping",
      desc: "Fast and reliable nationwide",
      icon: IconShipping,
    },
    {
      title: "Transparent",
      desc: "Seamless return experience",
      icon: IconTransparent,
    },
  ];

  return (
    <div className="w-full bg-[#786062] bg-opacity-45 flex justify-center sm:px-4 py-10 lg:py-14 rounded-[3px] lg:rounded-[10px]">
      {values.map((val) => (
        <div
          key={val.title}
          className="text-[#180A0B] text-xs sm:text-sm lg:text-lg text-center px-2 sm:px-6 md:px-10 border-r border-black border-opacity-30 last:border-r-0"
        >
          <div className="w-[13px] h-[13px] sm:w-[45px] sm:h-[45px] mx-auto mb-2">
            <val.icon />
          </div>
          <h4 className="font-bold my-1 md:text-base lg:text-2xl">
            {val.title}
          </h4>
          <p>{val.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuesCard;
