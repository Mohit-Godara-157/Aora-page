import React from "react";
import { mydata } from "./js/Service";

const Maps = () => {
  return (
    <>
      <section className=" pt-16">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-2 xl:px-0">
          <h2 className="text-[#2A2A2A]  font-bold text-center ff_Bariol text-[40px]">
            Our Services
          </h2>
          <p className=" text-base font-normal ff_Bariol text-[#686868] text-center mt-3">
            Available for guayaquil and quito
          </p>
          {mydata
            .map((fun) => {
              return (
                <Col  className="my-3 px-2" sm={6} lg={4} xl={3}>
                  <div></div>
                </Col>
              );
            })
            .slice(0, 4)}
        </div>
      </section>
    </>
  );
};

export default Maps;
