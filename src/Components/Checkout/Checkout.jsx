import React from "react";
import { toast } from 'react-toastify';
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";


import {
  GroupedCart,
  CountButton,
  TotalPrice,
  RemoveItem,
} from "../utils_func/utils";
import { Empty_cart } from "../Cart/Empty_cart";
const Checkout = ({cartItem,setCartItmes, handleOrder}) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userLoginInfo = JSON.parse(localStorage.getItem("user"));
  const email = userLoginInfo?.user?.email;
  return (
    <>
      <div className="mt-20 w-[90%] mx-auto min-h-screen">
        <div className="">
          <p className="text-2xl font-bold">Checkout</p>
          <div className="flex gap-x-5  ">
            <div className="w-3/5">
              <div>
                <p className="border-b  w-fit text-lg font-bold my-5">
                  Customer Information
                </p>
                <input
                  value={email}
                  disabled
                  type="text"
                  placeholder="Email Adress"
                  className=" input input-bordered w-full font-extralight rounded-none "
                />
              </div>
              <div>
                <p className="border-b  w-fit text-lg font-bold  my-5">
                  Billing details
                </p>
                <div className="  flex gap-x-3">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-sub2">First Name:</span>
                    </div>
                    <input
                    value={userData.firstName}
                      type="text"
                      placeholder="Type here"
                      className=" input input-bordered w-full font-extralight rounded-none"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-sub2">Last Name:</span>
                    </div>
                    <input
                    value={userData.lastName}
                      type="text"
                      placeholder="Type here"
                      className=" input input-bordered w-full font-extralight rounded-none"
                    />
                  </label>
                </div>
                <div className="  flex gap-x-3">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-sub2">Room No:</span>
                    </div>
                    <input
                    value={userData.roomNo}
                      type="text"
                      placeholder="Type here"
                      className=" input input-bordered w-full font-extralight rounded-none"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-sub2">Hall:</span>
                    </div>
                    <input
                    value={userData.hall}
                      type="text"
                      placeholder="Type here"
                      className=" input input-bordered w-full font-extralight rounded-none"
                    />
                  </label>
                </div>
                <div className="  flex gap-x-3">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-sub2">College:</span>
                    </div>
                    <input
                    value={userData.college}
                      type="text"
                      placeholder="Type here"
                      className=" input input-bordered w-full font-extralight rounded-none"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-sub2">City</span>
                    </div>
                    <input
                    value={userData.city}
                      type="text"
                      placeholder="Type here"
                      className=" input input-bordered w-full font-extralight rounded-none"
                    />
                  </label>
                </div>
              </div>
              <div>
                <p className="border-b  w-fit text-lg font-bold my-5">
                  Additional information
                </p>
                <textarea
                  className="textarea textarea-bordered w-full rounded-none text-sub2 font-extralight text-base"
                  placeholder="Notes about your order, eg. special notes for delivery."
                ></textarea>
              </div>
            </div>
            <div className="w-2/5">
              <BillingDetails cartItem={cartItem}/>
              <div className="w-1/2 mx-auto mt-5">
              <button 
              disabled={cartItem.length == 0}
              onClick={() => {
                handleOrder(GroupedCart(cartItem));
                setCartItmes([]);
                toast.success("Order Successful");
              }}
              
              className="btn btn-success w-full  text-white text-xl lora-500">Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;

export const BillingDetails = ({cartItem}) => {
  return (
    <>
      <div>
        <p className="text-lg font-bold my-5">Your order</p>
        <CheckoutItems  cartItem={cartItem}/>
      </div>
    </>
  );
};

export const CheckoutItems = ({cartItem, }) => {
  console.log(GroupedCart(cartItem))
  return (
    <>
      <div className="">
      {!cartItem.length && <Empty_cart />}
        {cartItem.length && <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {GroupedCart(cartItem).map((cartItem,index)=>{
              return <tr key={index}>
                <td>{cartItem.info.title}</td>
                <td>{cartItem.info.newprice}</td>
                <td>{cartItem.count}</td>
              </tr>
            })}
            
          </tbody>
        </table>}
        <div className="flex justify-between  w-full my-8 text-xl lora-500 text-subheading">
              <p>Total Price: </p>
              <p><CurrencyRupeeIcon /> {TotalPrice(cartItem)}</p>
            </div>
      </div>
    </>
  );
};
