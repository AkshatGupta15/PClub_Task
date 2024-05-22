import React, { useEffect, useState } from "react";
import { DropDown_Sidebar_profile } from "../Profile/DropDown_Sidebar_profile";
import { Cart_Sidebar } from "../Cart/Sidebar_cart";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png"
const Navbar = ({ inputQuery, handleInputChange, handleInputSummit,cartItem,setCartItmes }) => {
    const navigate = useNavigate()
    const handleSummit =()=>{

    }

  return (
    <>
      <div className="bg-slate-50">
        <div className="navbar max-w-screen-2xl mx-auto">
          <div className="navbar-start">
            {/* <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/store">Store</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div> */}
            <a href="/" className=" border rounded-full overflow-hidden mx-2 w-12">
              <img src={logo} className="w-12"/>
            </a>
            
          </div>
          <div className="navbar-center">
          <div className="form-control border w-full">
             <form>
             <input
                type="text"
                placeholder="Search"
                className="input input-bordered max-w-lg"
                onChange={handleInputChange}
                onSubmit={handleInputSummit}
                value={inputQuery}
              />
             </form>
            </div>
            
          </div>
          {/* <div className="navbar-end">
            <a className="btn">Button</a>
          </div> */}
          <div className="flex-none justify-end">
          <ul className="menu menu-horizontal px-1  hidden lg:flex">
              <li>
                <a href="/store">Store</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
            
            <div className="">
              <Cart_Sidebar cartItem={cartItem} setCartItmes={setCartItmes} />
            </div>
            <div className="dropdown dropdown-end flex">
              <DropDown_Sidebar_profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
