import { Button, ButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Empty_cart } from "../Cart/Empty_cart";
import { Sidebar_profile } from "../Profile/Sidebar_profile";
const Order = ({ orderItems }) => {
  console.log(orderItems);
  return (
    <>
      <div className=" mt-20 lg:flex justify-between min-h-screen">
        <div className="lg:block hidden lg:w-1/6 ">
        <Sidebar_profile />
        </div>
        <div className="  lg:w-5/6">
          <p className=" p-5 text-xl font-semibold">Your Orders</p>
          <div className="flex lora-500  md:flex-row flex-col">
            {/* cart */}
            <div className="md:w-2/3 p-5">
              <div>
              <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderItems.map((cartItem, index) => {
                          return (
                            <tr key={index}>
                              <td>{cartItem.info.title}</td>
                              <td>{cartItem.info.newprice}</td>
                              <td>{cartItem.count}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
              </div>
              {!orderItems.length && <div className="my-12"><Empty_cart /></div>}

              <div className="border text-center p-5 mt-10 bottom-0 absolute">
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
            {/* <div className="md:w-1/3 p-5">
              <div>
                <div className="flex justify-between border-b py-2">
                  <div>Order Summary:</div>
                  <div>{orderItems.length}</div>
                </div>
                <div className="flex justify-between border-b py-2">
                  <div>Item(s) Subtotal:</div>
                  <div>
                    <span className="">
                      <CurrencyRupeeIcon />
                      {TotalPrice(orderItems)}.00
                    </span>
                  </div>
                </div>
                <div className="flex justify-between border-b py-2">
                  <div>Total:</div>
                  <div>
                    <span className="">
                      <CurrencyRupeeIcon />
                      {TotalPrice(orderItems)}.00
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    className="btn w-full btn-success text-white text-xl"
                    disabled={TotalPrice(cartItem) == 0}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

 export default Order;