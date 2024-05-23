import React, { useEffect, useState } from "react";
import { Sidebar_toggle_button } from "../Usefull_Components/sidebar_toggle_button";
import { Button, ButtonGroup } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";
import {
  GroupedCart,
  CountButton,
  TotalPrice,
  RemoveItem,
} from "../utils_func/utils";
import { Empty_cart } from "./Empty_cart";
export const Cart_Sidebar = ({ cartItem, setCartItmes }) => {
  const navigate = useNavigate();
  const gotToNewPage = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="">
        <div className="drawer drawer-end">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-2" className="drawer-button">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cartItem.length}
                  </span>
                </div>
              </div>
            </label>
          </div>
          <div className="drawer-side z-10">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu min-h-full md:w-1/3 w-[90%] bg-white block p-0 ">
              <div className=" text-base-content">
                <div className="flex flex-col justify-between ">
                  <div className="">
                    <div className="flex justify-between items-center  px-6  border-b font-medium text-lg ">
                      <div>Shopping Cart</div>
                      <div>
                        <Sidebar_toggle_button id={"my-drawer-2"} />
                      </div>
                    </div>

                    <div className="mt-8 px-4 py-2">
                      {/* cart item */}
                      {GroupedCart(cartItem).map((item, index) => {
                        return (
                          <div className="mb-4" key={index}>
                            <CartItemCardSidebar
                              item={item}
                              setCartItmes={setCartItmes}
                              cartItem={cartItem}
                            />
                            {GroupedCart(cartItem).length != index + 1 && (
                              <div className="divider"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {!cartItem.length && <div><Empty_cart/></div>}
                  </div>
                  <div>
                    <div className="flex justify-between items-center px-4 py-3 border-t border-b lora-500 text-xl">
                      <div>SubTotal:</div>
                      <div>
                        <span>
                          <CurrencyRupee />
                        </span>
                        {TotalPrice(cartItem)}
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col p-5 gap-4">
                        <button
                          className="btn bg-links text-white"
                          onClick={gotToNewPage}
                        >
                          View Cart
                        </button>
                        <button disabled={cartItem.length == 0}
                        onClick={()=>{
                          navigate("/checkout")
                        }}
                        className="btn bg-links text-white">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sidebar content here */}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export const CartItemCardSidebar = ({ item, setCartItmes, cartItem }) => {
  return (
    <>
      <div className="flex ">
        <div className="w-1/4 flex items-center  justify-center p-2">
          <figure className="">
            <img
              className="object-scale-down"
              src={item.info.img[0]}
              // alt={more_info.category}
            />
          </figure>
        </div>
        <div className="w-3/4 p-4">
          <p className=" font-medium text-base mb-5">{item.info.title}</p>
          <div>
            <div className="flex justify-between items-center">
              <ButtonGroup size="large" aria-label="Large button group">
                {CountButton(cartItem, item, setCartItmes).map((btn, index) => (
                  <React.Fragment key={index}>{btn}</React.Fragment>
                ))}
              </ButtonGroup>
              <p className="flex items-center text-base font-light text-subheading">
                <span>
                  <CurrencyRupeeIcon style={{}} />
                </span>
                <span className="font-semibold">{item.info.newprice}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <button
            className="btn btn-circle btn-xs bg-white"
            onClick={() => RemoveItem(cartItem, setCartItmes, item)}
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
    </>
  );
};
