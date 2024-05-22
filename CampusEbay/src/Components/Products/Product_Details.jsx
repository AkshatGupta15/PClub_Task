import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Button, ButtonGroup } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useParams } from "react-router-dom";
import Product_Card from "./Product_Card";
import More_Products from "./More_Products/More_Products";
import { useContext } from "react";
import MyContext from "../../context/myContext";


//   id : 1,
//   title: "Hindware 45 L Room/Personal Air Cooler",
//   img: [
//     "https://rukminim2.flixcart.com/image/612/612/xif0q/air-cooler/z/u/i/-original-imahyaf6gqgxwkbd.jpeg?q=70",
//   ],
//   company: "Hindware",
//   category: "Cooler",
//   prevprice: 13990,
//   newprice: 1999,
//   color: "white",
//   reviews: 120,
//   stars: 3,
//   Keyfeatures: [
//     "Newest technology",
//     "Best in class components",
//     "Dimensions -69.5 x 75.0 x 169.0",
//     "Maintenance free",
//     "12 years warranty",
//   ],
// };
export const Product_Details = ({handleAddToCart, AllProducts,filterByCategory}) => {
  const context = useContext(MyContext)  
  console.log(context)
   
  const [counterCart, setCounterCart] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState({})
  const {category,id} = useParams()
  // const selectedProduct1 = AllProducts.filter((product) => id == product.id);
  useEffect(()=>{
    const product = AllProducts.find(product => product.id == id);
    setSelectedProduct(product || {});

  },[])
  // console.log(selectedProduct)
  // console.log(params)
  const [isAdded, setIsAdded] = useState(false);
  const buttons = [
    <Button
    onClick={()=>{
      if (counterCart>1){
        setCounterCart(counterCart - 1)
      }
      
    }}
      key="-"
      style={{
        width: "40px",
        padding: "3px",
        borderColor: "#DDDDDD",
        background: "#F7FBFC",
      }}
    >
      -
    </Button>,
    // <Button key="two">Two</Button>,
    <div className="border flex items-center justify-center w-10">
      <p>{counterCart}</p>
    </div>,
    <Button
    onClick={()=>{
      setCounterCart(counterCart+ 1)
    }}
      key="+"
      style={{
        width: "40px",
        padding: "3px",
        borderColor: "#DDDDDD",
        background: "#F7FBFC",
      }}
    >
      +
    </Button>,
  ];
  return (
    <>
      <div className="mt-20">
        {/* section */}
        {selectedProduct.Keyfeatures &&
        <div className="w-[90%] mx-auto  border ">
          <div>
            {/* product info */}
            <div>
              <div className="lg:flex">
                {/* img */}
                <div className="lg:w-1/2 border ">
                  <div>Big Image</div>
                  <div> More Image</div>
                </div>
                {/* text */}
                <div className="lg:w-1/2 border p-7">
                  <div className="">
                    {/* breadcrumbs */}
                    <div className=" text-base breadcrumbs text-subheading lora-400  no-underline">
                      <ul>
                        <li>
                          <a>Home</a>
                        </li>
                        <li>
                          <a>store</a>
                        </li>
                        <li>{selectedProduct.title}</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">
                      {selectedProduct.title}
                    </h1>
                    <h2 className="text-2xl text-[#48515B] font-medium mt-3">
                      {" "}
                      <span className="line-through text-[#A0A6AB]">
                        <CurrencyRupeeIcon style={{ fontSize: "28px" }} />
                        {selectedProduct.prevprice}{" "}
                      </span>
                      <CurrencyRupeeIcon />
                      {selectedProduct.newprice}
                    </h2>
                    <div className="mt-2">
                      <p className=" font-medium">Key features</p>
                      <ul className="ml-8 list-disc p-4">
                        {selectedProduct.Keyfeatures.map((feature) => (
                          <li key={feature} className="text-sm font-extralight">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center mb-10 mt-10">
                      {/* quanity */}
                      <div>
                        <ButtonGroup
                          size="large"
                          aria-label="Large button group"
                        >
                          {buttons.map((btn, index) => (
    <React.Fragment key={index}>{btn}</React.Fragment>
  ))}
                        </ButtonGroup>
                      </div>
                      <div className="">
                        <button onClick={
                          ()=>(setIsAdded(true),
                          handleAddToCart(selectedProduct, counterCart),
                          console.log("Product_Adde")
                        )
                        }className="h-0 bg-slate-700 text-white mx-4 rounded-sm btn btn-sm px-3 py-1 hover:bg-links"><p className="font-semibold text-sm"> {isAdded ?  <span> Added to Cart <DoneIcon style={{fontSize:"23px"}}/></span> : "Add to Cart"} </p></button>
                      </div>
                      { isAdded && <div className="" >
                        <a href="#"><p className=" text-links font-extralight text-sm"><ShoppingCartOutlinedIcon style={{fontSize:"20px"}}/>View Cart</p></a>
                      </div>}
                    </div>
                    <hr></hr>
                    <div><p className=" font-extralight text-sm py-3">Category : <span className="text-links">{selectedProduct.category}</span></p></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Desc & Reviews */}
            <div></div>
          </div>
        </div>
}
        {/* Related Products */}
        <div>
          {/* {console.log(filterByCategory(selectedProduct.category))} */}
          {/* {<div className='mx-auto'>
                <div className='flex flex-wrap items-center justify-center gap-3 py-8'>
                  {filterByCategory(selectedProduct.category).map((product)=> <Product_Card more_info={product}/>)}

                
                
                </div>
                </div>} */}
          <div className="w-[95%] mx-auto"><More_Products products={filterByCategory(selectedProduct.category)} text={"Related Products"}/></div>
        </div>
  
      </div>
    </>
  );
};
