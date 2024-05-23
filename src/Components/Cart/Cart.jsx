import { Button, ButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import {useNavigate} from "react-router-dom"
import {
  GroupedCart,
  CountButton,
  TotalPrice,
  RemoveItem,
} from "../utils_func/utils";
import { Empty_cart } from "./Empty_cart";
const Cart = ({ cartItem, setCartItmes }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userData")) || {});
  const navigate= useNavigate()
  return (
    <>
      <div className=" mt-20 lg:flex justify-between">
        <div className="lg:block hidden lg:w-1/6 border"></div>
        <div className=" border lg:w-5/6">
          <p className=" p-5 text-xl font-semibold">Shopping Cart</p>
          <div className="flex lora-500  md:flex-row flex-col">
            {/* cart */}
            <div className="md:w-2/3 p-5">
              <div>
                {GroupedCart(cartItem).map((item, index) => {
                  return (
                    <CartItem
                      selectedItem={item}
                      key={index}
                      TotalPrice={TotalPrice}
                      setCartItmes={setCartItmes}
                      cartItem={cartItem}
                    />
                  );
                })}
              </div>
              {!cartItem.length && <Empty_cart />}

              <div className="border text-center p-5 mt-10">
                <p>
                  <span>
                    <LocalShippingOutlinedIcon />
                  </span>
                  <span className=" text-red-500"> FREE</span> Delivery over{" "}
                  <span>
                    <CurrencyRupeeIcon />
                    500
                  </span>{" "}
                  |{" "}
                  <a href="#" className="underline underline-offset-2">
                    Register Now
                  </a>{" "}
                  + your 1st order ships{" "}
                  <span className="text-red-500">FREE</span>
                </p>
              </div>
            </div>
            {/* checkout */}
            <div className="md:w-1/3 p-5">
              <div>
                <div className="flex justify-between border-b py-2">
                  <div>Order Summary:</div>
                  <div>{cartItem.length}</div>
                </div>
                <div className="flex justify-between border-b py-2">
                  <div>Item(s) Subtotal:</div>
                  <div>
                    <span className="">
                      <CurrencyRupeeIcon />
                      {TotalPrice(cartItem)}.00
                    </span>
                  </div>
                </div>
                <div className="flex justify-between border-b py-2">
                  <div>Total:</div>
                  <div>
                    <span className="">
                      <CurrencyRupeeIcon />
                      {TotalPrice(cartItem)}.00
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    className="btn w-full btn-success text-white text-xl"
                    disabled={TotalPrice(cartItem) == 0}
                    onClick={()=>navigate("/checkout")}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>offeer</div>
        </div>
      </div>
    </>
  );
};

export const CartItem = ({
  selectedItem,
  TotalPrice,
  cartItem,
  setCartItmes,
}) => {
  return (
    <>
      <div className="mb-5">
        <div>
          <div className="border px-3 py-2  justify-between flex">
            <div className="flex lg:flex-row flex-col gap-x-5 gap-y-5 ">
              <div className="flex gap-5">
                <div>
                  <img
                    className="w-28 h-28 object-scale-down "
                    src={selectedItem.info.img[0]}
                  ></img>
                </div>
                <div>
                  <a className="hover:underline  underline-offset-2 cursor-pointer" href={`/store/${selectedItem.info.category}/${selectedItem.info.id}`}><p className=" text-lg font-semibold">
                    {selectedItem.info.title}
                  </p></a>
                  <div className="text-subheading">
                    <p>Color: {selectedItem.info.color}</p>
                    <p>Category: {selectedItem.info.category}</p>
                    <p>Price: {selectedItem.info.newprice}</p>
                  </div>
                </div>
              </div>
              <div className="">
                <ButtonGroup size="large" aria-label="Large button group">
                  {CountButton(cartItem, selectedItem, setCartItmes).map(
                    (btn, index) => (
                      <React.Fragment key={index}>{btn}</React.Fragment>
                    )
                  )}
                </ButtonGroup>
                <div className="mt-4">
                  <p>
                    <span className="font-semibold text-lg">SubTotal:</span>{" "}
                    <span className="text-subheading">
                      <CurrencyRupeeIcon />
                      {TotalPrice(cartItem)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="btn btn-circle btn-xs"
                onClick={() => RemoveItem(cartItem, setCartItmes, selectedItem)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
