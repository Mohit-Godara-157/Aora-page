import React from "react";
import search_icon from "../assets/img/svg/search-icon.svg";
import position_img from "../assets/img/png/hero-position-img.png";
function Herosection2() {
  return (
    <section className=" pb-8 pt-5 max-sm:pt-[15px] bg-[#FFB219] relative px-4 z-30 max-sm:h-[172px]">
      <img
        className=" absolute max-xl:h-[60px] max-sm:h-[35px] max-sm:w-[40px]  max-xl:w-[80px]  top-[10px] left-[10px] w-[110px] h-[84px]"
        src={position_img}
        alt="position_img"
      />
      <img
        className="-z-10 absolute max-sm:bottom-[42%] max-sm:h-[35px] max-sm:w-[40px] max-xl:h-[60px]  max-xl:w-[80px] bottom-[10px] right-[10px] w-[110px] h-[84px]"
        src={position_img}
        alt="position_img"
      />
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto">
        <h1 className="ff_Bariol font-bold text-[#2A2A2A] text-[48px] max-md:text-[40px] max-sm:text-[32px]  max-sm:leading-[25px] text-center leading-[63px]  max-sm:mt-1">
          Home and office
        </h1>
        <div className="shadow_input max-w-[1034px] mx-auto bg-white flex items-center h-[70px] max-md:h-[50px] max-sm:h-[40px]  m px-6 rounded-lg mt-4 max-sm:mt-4 ">
          <label className="cursor-pointer" htmlFor="search-here">
            <img
              className=" w-[30px] h-[30px] "
              src={search_icon}
              alt="search_icon"
            />
          </label>

          <input
            id="search-here"
            className=" w-full h-full outline-none ff_Bariol font-normal text-base leading-5 max-sm:text-sm max-sm:leading-[18px]  text-[#6A6A6A] pl-[10px]"
            type="search"
            placeholder="Search home and office"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection2;
