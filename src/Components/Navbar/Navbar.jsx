import React, { useEffect, useState } from "react";
import { DropDown_Sidebar_profile } from "../Profile/DropDown_Sidebar_profile";
import { Cart_Sidebar } from "../Cart/Sidebar_cart";
import { useNavigate } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import logo from "../../assets/images/logo.png"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const Navbar = ({ inputQuery, handleInputChange, handleInputSummit,cartItem,setCartItmes }) => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [isExtended, setIsExtended] = useState(false)
    const navigate = useNavigate()
    const handleLogout =()=>{
      localStorage.removeItem("user")
      // localStorage.removeItem("order")
      // localStorage.removeItem("userData")
      // localStorage.removeItem("cart")
      navigate("/")

    }

  return (
    <>
      <div className="bg-slate-50">
        <div className="h-[69px] navbar max-w-screen-2xl mx-auto shadow-md">
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
                onChange={(e)=>{
                  handleInputChange(e)
                  navigate("/store")
                }}
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
                <a href="/order">Orders</a>
              </li>
              {/* <li>
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
              </li> */}
              {user ? <li><button onClick={handleLogout}>Logout</button></li> : <li><a href="/login">Login</a></li>}

              {(user ? user.user.email === "ak@dev.com" : false ) && <li>
                <a href="/dashboard">Admin</a>
              </li>}
            </ul>
            <div className="lg:hidden flex justify-center items-center">
            <button className="" onClick={()=>navigate("/store")}><ShoppingBagOutlinedIcon style={{fontSize:"26px"}}/></button>
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
