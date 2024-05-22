import React, { useEffect, useState } from "react";
import { DropDown_Sidebar_profile } from "../Profile/DropDown_Sidebar_profile";
import { Cart_Sidebar } from "../Cart/Sidebar_cart";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const Navbar = ({ inputQuery, handleInputChange, handleInputSummit,cartItem,setCartItmes }) => {
    const navigate = useNavigate()
    const handleSummit =()=>{

    }

  return (
    <>
      <div className="bg-slate-50">
        <div className="navbar max-w-screen-2xl mx-auto ">
          <div className="navbar-start w-full">
            
       
            <a href="/" className="mx-2">
              <span className="lg:text-2xl text-lg lora-600 italic font-bold bg-gradient-to-r from-amber-500 to-pink-500 inline-block text-transparent bg-clip-text">Campus<span>Ebay</span></span>
            </a>
    
            <div className="form-control   w-full">
             <form className=" flex justify-end">
             <input
                type="text"
                placeholder="Search"
                className="input input-bordered input-md w-full max-w-xs"
                onChange={handleInputChange}
                onSubmit={handleInputSummit}
                value={inputQuery}
              />
             </form>
            </div>
          </div>
          <div className="navbar-center">
          
            
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
            <div className="lg:hidden">
            <SearchSharpIcon/>
            </div>
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
