import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Button, ButtonGroup } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useParams } from "react-router-dom";
import Product_Card from "./Product_Card";
import More_Products from "./More_Products/More_Products";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import login_user from "../../assets/images/login_user.png";

const messages = [
  {
    email: "ak@dev.com",
    message: "Hello Akshat",
  },
  {
    email: "ak1@dev.com",
    message: "Hello Akshat1",
  },
  {
    email: "ak@dev.com",
    message: "What's up Bro",
  },
  {
    email: "ak1@dev.com",
    message: "I'm doing great",
  },
];

const Product_Details = ({ handleAddToCart, AllProducts, filterByCategory }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [chatBar, setChatBar] = useState(false);
  const [counterCart, setCounterCart] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const product = AllProducts.find((product) => product.id == id);
    setSelectedProduct(product || {});
    window.scrollTo(0, 0);
    setIsAdded(false)
    setCounterCart(1)
  }, [id]);

  const [isAdded, setIsAdded] = useState(false);
  const buttons = [
    <Button
      onClick={() => {
        if (counterCart > 1) {
          setCounterCart(counterCart - 1);
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
    <div key="count" className="border flex items-center justify-center w-10">
      <p>{counterCart}</p>
    </div>,
    <Button
      onClick={() => {
        setCounterCart(counterCart + 1);
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
      <label htmlFor={chatBar ? 'chat' : ''}>
      <div className="mt-20">
        {selectedProduct.Keyfeatures && (
          <div className="w-[90%] mx-auto ">
            <div className="lg:flex">
              <div className="lg:w-1/2 ">
                <div className=" flex items-center justify-center mt-16"><img className="object-scale-down md:h-96 h-52 " src={selectedProduct.img[0]}></img></div>
                {/* <div className="flex gap-x-5">
                  <div className="border flex items-center justify-center"><img className="object-scale-down md:h-28 h-24 " src={selectedProduct.img[0]}></img></div>
                  <div className="border flex items-center justify-center"><img className="object-scale-down md:h-28 h-24 " src={selectedProduct.img[0]}></img></div>
                  <div className=" border flex items-center justify-center"><img className="object-scale-down md:h-28 h-24" src={selectedProduct.img[0]}></img></div>
                </div> */}
              </div>
              <div className="lg:w-1/2 border p-7">
                <div className="text-base breadcrumbs text-subheading lora-400 no-underline">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/store">Store</a>
                    </li>
                    <li>{selectedProduct.title}</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">
                    {selectedProduct.title}
                  </h1>
                  <h2 className="text-2xl text-[#48515B] font-medium mt-3">
                    <span className="line-through text-[#A0A6AB]">
                      <CurrencyRupeeIcon style={{ fontSize: "28px" }} />
                      {selectedProduct.prevprice}{" "}
                    </span>
                    <CurrencyRupeeIcon />
                    {selectedProduct.newprice}
                  </h2>
                  <div className="mt-2">
                    <p className="font-medium">Key features</p>
                    <ul className="ml-8 list-disc p-4">
                      {selectedProduct.Keyfeatures.map((feature) => (
                        <li key={feature} className="text-sm font-extralight">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center mb-10 mt-10">
                    <ButtonGroup size="large" aria-label="Large button group">
                      {buttons}
                    </ButtonGroup>
                    <button
                      onClick={() => {
                        setIsAdded(true);
                        handleAddToCart(selectedProduct, counterCart);
                      }}
                      className="h-10 bg-slate-700 text-white mx-4 rounded-sm btn btn-sm px-3 py-1 hover:bg-links"
                    >
                      <p className="font-semibold text-sm">
                        {isAdded ? (
                          <span>
                            Added to Cart <DoneIcon style={{ fontSize: "23px" }} />
                          </span>
                        ) : (
                          "Add to Cart"
                        )}
                      </p>
                    </button>
                    {isAdded && (
                      <div>
                        <a href="#">
                          <p className="text-links font-extralight text-sm">
                            <ShoppingCartOutlinedIcon style={{ fontSize: "20px" }} />
                            View Cart
                          </p>
                        </a>
                      </div>
                    )}
                  </div>
                  <hr />
                  <p className="font-extralight text-sm py-3">
                    Category: <span className="text-links">{selectedProduct.category}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-[95%] mx-auto">
          <More_Products products={filterByCategory(selectedProduct.category)} text={"Related Products"} />
        </div>
      </div>
      </label>
      <div className="fixed bottom-8 right-8">
        <div className="drawer drawer-end">
          <input id="chat" type="checkbox" onChange={() => setChatBar(!chatBar)} className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="chat" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
              <ChatBubbleOutlineOutlinedIcon />
              Chat
            </label>
          </div>
          <div className="drawer-side bg-opacity-100 bg-none w-1/3 mt-[90px] h-[80vh] ml-[65%] rounded-xl">
            <label htmlFor="chat" className="bg-none drawer-overlay "></label>
            <div className="p-0 menu w-full min-h-full bg-white text-base-content z-[100] border flex flex-col">
              <div className="w-full h-[2.5rem] shadow-xl bg-links sticky top-0 z-10"></div>
              <div className="flex-1 overflow-auto p-3 w-full">
                {user ? (
                  messages.map((message) => <ChatBubble key={message.email} message={message} />)
                ) : (
                  <div className="mt-[30%]">
                    <img className="w-48 mx-auto" src={login_user} alt="Login" />
                    <p className="text-center mt-3 text-xl text-sub2 lora-500">
                      Please Login from <span className="text-links"><a href="/login">Here</a></span>
                    </p>
                  </div>
                )}
              </div>
              {user && (
                <div className="sticky bottom-4 gap-2 w-[95%] mx-auto flex justify-center border">
                  <input type="text" placeholder="Type here" className="lora-400 input focus:outline-none input-bordered w-[90%]" />
                  <button className="bg-links rounded-lg px-2 text-white font-medium lora-600 italic text-base">Send</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_Details;

export const ChatBubble = ({ message }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="User" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="chat-bubble">{message.message}</div>
    </div>
  );
};
