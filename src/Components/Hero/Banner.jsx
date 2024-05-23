import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";

export const Banner = () => {
  const banner = [banner1, banner2];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        <div className="w-full h-64 lg:h-72 overflow-hidden">
          <img
            className="object-cover w-full h-full object-center"
            src={banner[0]}
            alt="Banner 1"
          />
        </div>
        <div className="w-full  h-64 lg:h-72  overflow-hidden">
          <img
            className="object-cover w-full h-full object-center"
            src={banner[1]}
            alt="Banner 2"
          />
        </div>
      </Slider>
    </div>
  );
};
