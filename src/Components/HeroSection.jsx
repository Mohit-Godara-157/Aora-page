import React from "react";
import search_icon from "../assets/img/svg/se"
function HeroSection() {
  return (
    <section className=" bg-[#FFB219] pb-8">
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto">
        <h2 className="ff_Bariol font-bold text-[32px] text-center leading-8">
          Hello july
        </h2>
        <h1 className="ff_Bariol font-bold text-[48px] text-center leading-[63px]">
          What services are you looking for?
        </h1>
        <div className=" max-w-[1034px] mx-auto bg-white">
          <input
            className=" w-full outline-none ff_Bariol font-normal text-base leading-5  text-[#6A6A6A]"
            type="text"
            placeholder="Edge: “Beyond Repara” and “Installer Horn”"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
