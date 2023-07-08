import React from "react";
import { myhomedata } from "./js/Service2";
import { Col, Row } from "react-bootstrap";
const Maps2 = () => {
  return (
    <div className=" pb-16 pt-8 md:pt-20 md:pb-24 overflow-hidden bg-[#FAFAFA] ">
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-2 xl:px-0">
        <Row>
          {myhomedata
            .map((index) => {
              return (
                <Col className="pt-4 md:pt-6" xs={12} md={6} xl={4}>
                  <div className="cardBox hover:bg-[#ffb219]  max-w-xs mx-auto sm:max-w-full  duration-300 px-3  md:px-5 flex items-center py-[10px] md:py-8 h-100">
                    <img
                      className="lg:w-20 lg:h-20 w-[60px] h-[60px]"
                      src={index.img}
                      alt="cardimage"
                    />
                    <h3 className=" ff_Bariol ml-5 lg:ml-6  text-xl md:text-2xl font-bold mb-0 max-[213px]: text-[#2A2A2A]">
                      {index.heading}
                    </h3>
                  </div>
                </Col>
              );
            })
            .slice(0, 9)}
        </Row>
      </div>
    </div>
  );
};

export default Maps2;
