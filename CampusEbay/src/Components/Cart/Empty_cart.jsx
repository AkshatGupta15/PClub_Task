import React from 'react'
import empty_cart from "../../assets/images/empty_cart.png"

export const Empty_cart = () => {
  return (
    <>
    <div className="">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-[#F0F0F0] backdrop-blur-[80] rounded-full w-1/3"><img className="" src={empty_cart}/></div>
                <p className="my-4 text-xl font-bold">Your Cart is Empty</p>
                </div>
            </div>
    </>
  )
}
