import React, { useContext, useState } from 'react'
import MyContext from '../context/myContext'
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
export const EditProfile = () => {
  const navigate = useNavigate()
  const context = useContext(MyContext)
  const {firstName,
    lastName,
    phoneNumber,
    roomNo,
    hall,
    city,
    state,
    college,
    postalCode,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setRoomNo,
    setHall,
    setState,
    setCity,
    setCollege,
    setPostalCode} = context

    const [userData,setUserData] = useState({})
    const areValuesNotNull = () => {
      for (const key in userData) {
        if (!userData[key]) {
          return false;
        }
      }
      return true;
    };
    const handleSummit = (e) =>{
      e.preventDefault()
      setUserData({firstName,
        lastName,
        phoneNumber,
        roomNo,
        hall,
        city,
        state,
        college,
      postalCode})
      localStorage.setItem("userData", JSON.stringify(userData))
      localStorage.setItem("userData", JSON.stringify({firstName,
        lastName,
        phoneNumber,
        roomNo,
        hall,
        city,
        state,
        college,
      postalCode}))
      if(!areValuesNotNull){
        return toast.error(error.message)
      }
      console.log(userData)
      
      toast.success("Data Added Succesfully")
      navigate("/login")

      
      // addUserDetailsToDB()
    }
  return (
    <>
    <div className='mt-20'>
        <form >
        <div className=' min-h-screen max-w-screen-sm mx-auto'>
        <div className='w-full'>
          <p className='md:text-3xl  text-xl font-semibold lora-600 text-orange-600 text-center p-5'>Shipping Details</p>
          <div className='flex flex-wrap gap-y-5 m-8 justify-between'>
            <input
                    onChange={(e)=>setFirstName(e.target.value)}
                    value = {firstName}
                    type="text"
                    placeholder="First Name"
                    className=" input input-bordered w-full font-extralight rounded-none block mx-auto"
                  />
              <input
                    onChange={(e)=>setLastName(e.target.value)}
                    value = {lastName}
                    type="text"
                    placeholder="Last Name"
                    className=" input input-bordered w-full font-extralight rounded-none block mx-auto"
                  />
              <input
                    type="number"
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    value = {phoneNumber}
                    placeholder="Phone Number"
                    className="mx-auto input input-bordered w-full font-extralight rounded-none block [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />

<input
                    type="text"
                    onChange={(e)=>setRoomNo(e.target.value)}
                    value = {roomNo}
                    placeholder="Room No"
                    className=" input input-bordered w-[45%] font-extralight rounded-none block"
                  />
          <input
                    type="text"
                    onChange={(e)=>setHall(e.target.value)}
                    value = {hall}
                    placeholder="Hall"
                    className="input input-bordered w-[45%] font-extralight rounded-none block"
                  />
            
                  
              <input
                    type="text"
                    onChange={(e)=>setCity(e.target.value)}
                    value = {city}
                    placeholder="City"
                    className=" input input-bordered w-[45%] font-extralight rounded-none block"
                  />
              <input
                    type="text"
                    onChange={(e)=>setState(e.target.value)}
                    value = {state}
                    placeholder="State"
                    className=" input input-bordered w-[45%] font-extralight rounded-none block"
                  />
                  
                  
              <input
                    type="number"
                    onChange={(e)=>setPostalCode(e.target.value)}
                    value = {postalCode}
                    placeholder="Postal Code"
                    className=" input input-bordered w-[45%] font-extralight rounded-none block [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
              <input
                    type="text"
                    onChange={(e)=>setCollege(e.target.value)}
                    value = {college}
                    placeholder="College"
                    className=" input input-bordered w-[45%] font-extralight rounded-none block"
                  />
                  <button 
                  onClick={handleSummit}
                  className='btn btn-warning w-3/4 mx-auto text-xl lora-500 '>Summit</button>
          </div>
        </div>
        <div className='w-1/2 mx-auto p-8'>
          
          <div className='w-full mx-auto mt-10 flex flex-wrap'>
          
              

          </div>
        </div>

        </div>
        </form>
    </div>
    </>
  )
}
