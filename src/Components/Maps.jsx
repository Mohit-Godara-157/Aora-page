import React from "react";
import { mydata } from "./js/Service";
import { Col, Row } from "react-bootstrap";

const Maps = () => {
  return (
    <>
      <section className=" pt-14 lg:pt-16 bg-[#FAFAFA] overflow-hidden">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-2 xl:px-0">
          <div className="lg:block hidden">
            <h2 className="text-[#2A2A2A]  font-bold text-center ff_Bariol text-[40px]">
              Our Services
            </h2>
            <p className=" text-base font-normal ff_Bariol text-[#686868] text-center mt-3">
              Available for guayaquil and quito
            </p>
          </div>
          <Row>
            {mydata
              .map((fun) => {
                return (
                  <Col className=" pt-4  md:pt-6 group" xs={6} md={6} xl={4}>
                    <div className="bg-[#fff]  group-hover:bg-[#ffb219] duration-300 px-3 md:px-[18px] flex flex-col items-center rounded-lg py-[10px] md:py-9 h-100">
                      <img
                        className="lg:w-20 lg:h-20 w-[50px] h-[50px]"
                        src={fun.img}
                        alt="cardimage"
                      />
                      <h3 className="mt-[10px] md:mt-5 ff_Bariol text-center text-base md:text-2xl font-bold mb-0  text-[#2A2A2A]">
                        {fun.heading}
                      </h3>
                      <p className="md:text-base text-sm font-normal  group-hover:text-[#6A5325] mt-1 ff_Bariol mb-0 text-[#6A6A6A] text-center">
                        {fun.para}
                      </p>
                    </div>
                  </Col>
                );
              })
              .slice(0, 6)}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Maps;
