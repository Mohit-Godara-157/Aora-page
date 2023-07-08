import React from "react";
import SliderData from "./js/slider";
import Slider from "react-slick/lib/slider";
const PasSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        autoplayspeed: 500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="mt-12 bg-[#FAFAFA] md:mt-[93px] mb-[60px] md:mb-32 px-[20px]">
            <Slider {...settings} className=" rounded-lg w-full">
                {SliderData.map((func, i) => {
                    return (
                        <div key={i} className="relative  md:mx -[40px] slider_bg_image bg-cover bg-no-repeat rounded-lg shadow-sm  object-cover pt-4 px-[12px] lg:pl-[70px] lg:pr-[125px] group">
                            <div className="grid grid-cols-2 pt-[13px]">
                                <div className="md:pt-24">
                                    <h4 className="ff_Bariol text-[24px] md:text-5xl font-bold">
                                        {func.heading}
                                    </h4>
                                    <div className="w-[145px] md:w-[296px] bg-[#FFB219] h-[6px] rounded-lg mt-[6px] md:mt-2"></div>
                                    <p className="ff_Bariol text-[#686868] font-normal text-[14px] md:text-[20px] mt-[6px] md:mt-5">
                                        {func.para}
                                    </p>
                                    <button className=" md:mt-10 bg-[#FFB219] py-[10px] px-4 rounded ff_Bariol font-bold text-base">
                                        {func.button}
                                    </button>
                                </div>
                                <div className="flex justify-end">
                                    <img
                                        className="max-w-[161px] max-h-[199px]  md:max-w-[320px] w-full md:max-h-[397px] h-full"
                                        src={func.image}
                                        alt="image"
                                    />
                                </div>
                            </div>
                            <div className="w-0 h-[31px] bg-[#FFB219] rounded-full -z-30 absolute left-0 bottom-[-2%] group-hover:w-full duration-1000 ease-in-out"></div>
                        </div>
                    );
                })}
            </Slider>
        </section>
    );
};

export default PasSlider;
