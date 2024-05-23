import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import Product_Card from "../Product_Card";
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

let slidesToShow = 5;

function NextBtn(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <ArrowForwardIosIcon style={{ color: 'blue', fontSize: '30px' }} />
    </div>
  );
}

function PreviousBtn(props) {
  const { className,onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <div className=" text-sky-600  h-12 flex items-center justify-center w-8">
      <ArrowBackIosIcon style={{ fontSize: '30px'}} />
      </div>
      
    </div>
  );
}

function More_Products({products, text}) {
  // console.log(products)
  const navigate = useNavigate()
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    // slidesToScroll={3}
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          slidesToScroll: 2,
        },
      },
    ],
  };
  
  return (
    <div className="p-5" >
      <div className=" flex justify-between">
        <div className="mb-6">
          <p className=" lg:text-2xl text-lg  poetsen-one-regular font-normal mb-5 text-[#51A8A6]">{text}</p>
        </div>
        <div className="domine-500  text-blue-800   "> 
        <button onClick={() => navigate("/store")}><p className="underline underline-offset-2 text-sm">Go to Shop</p></button>
          
        </div>
      </div>
      <Slider {...carouselProperties} className="">
      {products.map((product)=> <Product_Card more_info={product} key={product.title}/>)}
        

      
      </Slider>
    </div>
  );
}



export default More_Products;

