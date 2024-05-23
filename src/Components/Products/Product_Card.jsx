import React from "react";
// import { useHistory } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';

const Product_Card = ({ more_info }) => {
  
  const navigate = useNavigate()
  const gotToNewPage=()=>{
    navigate(`/store/${more_info.category}/${more_info.id}`);
  }
  // console.log(more_info.title);
  // const history = useHistory();
  return (
    <>
      <div 
      onClick={()=>{
        gotToNewPage()
      }}
      className=" shadow-none card lg:max-w-64 max-w-68  bg-base-100 rounded-none px-2 hover:opacity-60 cursor-pointer overflow-hidden">
        <figure className=" ">
          <img
            className="hover:object-cover hover:scale-105 object-scale-down md:h-64 h-52 transition ease-in-out duration-300"
            src={more_info.img[0]}
            alt={more_info.category}
          /> 
        </figure>
        <div className="lg:pt-3 card-body lg:h-44  p-3">
          <div className=" ">
            {/* <Rating name="read-only" value={more_info.stars} readOnly style={{fontSize: isMobile ? '16px' : '24px',}}/> */}
            <div className="rating lg:rating-sm rating-xs">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  disabled/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"   disabled/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled checked={false}/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled checked={true}/>
</div>
          </div>

          <button 
          className=""
          onClick={() => gotToNewPage()}
          >
            
            <h2 className=" text-xs lg:text-base text-start card-title hover:underline">{more_info.title.substring(0,80)}...</h2>
          </button>
          <p className="text-subheading text-base font-semibold">
            {<CurrencyRupeeIcon style={{ fontSize: "18px" }} />}
            {more_info.newprice}
          </p>
          {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
        </div>
      </div>
    </>
  );
};

export default Product_Card;
