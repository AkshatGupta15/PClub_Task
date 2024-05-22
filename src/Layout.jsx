import React from 'react'
import Navbar from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";
import { Outlet } from 'react-router-dom';
export const Layout = ({inputQuery , handleInputChange,handleInputSummit,cartItem,setCartItmes}) => {
  // console.log(inputQuery,handleInputChange )
  return (
    <>
    <div>
        <div className='fixed w-full top-0 z-50'>
          <Navbar inputQuery={inputQuery} handleInputSummit={handleInputSummit} handleInputChange={handleInputChange} cartItem={cartItem} setCartItmes={setCartItmes} />
        </div>
        {/* Body */}
        <div className=' max-w-screen-2xl mx-auto'>
        <Outlet/>
        {/* <Product_Details/> */}
        </div>
       
        {/* Body end */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}
