import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Sidebar_profile } from "./Sidebar_profile";
const userData = {
  firstName: "Akshat",
  lastName: "Gupta",
  email: "Akshat23@iitk.ac.in",
  //   rollno :"230094",
  age: 18,
  gender: "Male",
  phone: "9389733XXX",
  pronouns: "He/Him",
  address_obj: {
    Hall: 13,
    Room: "A412",
    city: "Kanpur",
    Pincode: 208016,
    state: "Uttar Pradesh",
    country: "INDIA",
  },
  address: "A412 Hall 13 IIT Kanpur, Kalyanpur, Kanpur, UttarPradesh, INDIA ",
  avatar:
    "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png",
};
const Profile = () => {
  const [username, setUsername] = useState(userData.username);
  const [isUsernameChanged, setIsUsernameChanged] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [email, setEmail] = useState(userData.email);
  const [isEmailChanged, setIsEmailChanged] = useState(false);
  const handleUsernameChange = (e) => {
    // alert("Changed")
    setUsername(e.target.value);
    setIsUsernameChanged(true);
  };
  const handleUsernameEnableChange = () => {
    setIsEdit(true);
  };
  return (
    <>
      <div className=" mt-20 mx-auto border  p-10">
        <div>
        <span className="rubik-400 text-2xl font-medium  ml-[20%]">My Profile</span>

          <div className="flex mt-10 gap-x-5">
            <div className=" hidden sm:block w-1/5">
              <Sidebar_profile />
            </div>
            <div className="lg:w-4/5">
              <div className="border flex justify-between p-5 rubik-400 rounded-md">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 ">
                  <div>
                    <img
                      src={userData.avatar}
                      alt="avatar"
                      className="w-20 rounded-full"
                    ></img>
                  </div>
                  <div className=" text-center sm:text-left">
                    <p className=" font-semibold text-lg">
                      {userData.firstName + " " + userData.lastName}
                    </p>
                    <p className="text-sub2 font-medium">{userData.email}</p>
                    <p className="text-sub2">{userData.address}</p>
                  </div>
                </div>
                <div>
                  <EditButton />
                </div>
              </div>
              <div className="border  p-5 rubik-400 mt-8">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xl font-semibold text-links">
                      Personal Information
                    </p>
                  </div>
                  <div>
                    <EditButton />
                  </div>
                </div>
                <div>
                  <div className="">
                    <div className="mt-5 grid lg:grid-cols-2 text-sub2 gap-3">
                      <div>
                        <p>First Name</p>
                        <p className=" font-medium">{userData.firstName}</p>
                      </div>
                      <div>
                        <p>Last Name</p>
                        <p className=" font-medium">{userData.lastName}</p>
                      </div>
                      <div>
                        <p>Email Address</p>
                        <p className=" font-medium">{userData.email}</p>
                      </div>
                      <div>
                        <p>Phone</p>
                        <p className=" font-medium">{userData.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border  p-5 rubik-400 mt-8">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xl font-semibold text-links ">Address</p>
                  </div>
                  <div>
                    <EditButton />
                  </div>
                </div>
                <div>
                  <div className="">
                    <div className="mt-5 grid lg:grid-cols-2 text-sub2 gap-3">
                      <div>
                        <p>Country</p>
                        <p className=" font-medium">
                          {userData.address_obj.country}
                        </p>
                      </div>
                      <div>
                        <p>City/State</p>
                        <p className=" font-medium">
                          {userData.address_obj.city +
                            "/" +
                            userData.address_obj.state}
                        </p>
                      </div>
                      <div>
                        <p>Postal Code</p>
                        <p className=" font-medium">
                          {userData.address_obj.Pincode}
                        </p>
                      </div>
                      <div>
                        <p>Hall/Room</p>
                        <p className=" font-medium">
                          {userData.address_obj.Hall +
                            "/" +
                            userData.address_obj.Room}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex">
            
            <div className="w-1/2 border p-5 flex flex-col gap-y-12">
              <div className="flex flex-col gap-y-4">
                
                <div className="flex">
                  <p className=" text-lg mb-2 font-semibold lora-500 italic mr-4">
                    Name:
                  </p>
                  <input
                    disabled={!isEdit}
                    type="text"
                    placeholder="Type here"
                    value={username}
                    onChange={handleUsernameChange}
                    className="input input-bordered w-full max-w-xs input-sm lora-400 italic"
                  />
                </div>
                <div className="flex ">
                  <p className="text-lg mb-2 font-semibold lora-500 italic mr-4">
                    Email:
                  </p>
                  <input
                    disabled={!isEdit}
                    type="text"
                    placeholder="Type here"
                    value={email}
                    onChange={handleUsernameChange}
                    className="input input-bordered w-full max-w-xs input-sm lora-400 italic"
                  />
                </div>
                <div className="flex justify-between items-center w-[80%]">
                  <div className="lora-500 flex items-center gap-x-5 italic">
                    <span>Gender</span>
                    <select className="select select-sm  w-24 max-w-xs " disabled={!isEdit}>
                      <option disabled selected>
                        {userData.gender}
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>
                  <div className="lora-500 flex items-center gap-x-5 italic">
                    <span>Age</span>
                    <input disabled={!isEdit} type="text" placeholder="Type here" value={userData.age} className="input input-bordered input-sm w-12 max-w-xs text-center" />
                  </div>
                </div>
                <div className="flex">
                  <p className=" text-lg mb-2 font-semibold lora-500 italic mr-4">
                    Address:
                  </p>
                  <textarea disabled={!isEdit} value={userData.address} className="textarea textarea-ghost" placeholder="Address"></textarea>
                  <input
                    
                    type="text"
                    placeholder="Type here"
                    value={userData.address}
                    onChange={handleUsernameChange}
                    className="input input-bordered w-full max-w-xs input-sm lora-400 italic"
                  />
                </div>
              </div>
              <ConfirmChanges />

            </div>
            <div className="w-1/2">
                <div>

                </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Profile;

export const ConfirmChanges = () => {
  return (
    <>
      <div>
        <div className="flex gap-x-4">
          <button className="btn btn-outline btn-error btn-sm ">Cancel</button>
          <button className="btn btn-success btn-sm text-white">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export const EditButton = () => {
  return (
    <>
      <div>
        <button className="btn btn-sm bg-white flex items-center text-slate-400">
          <span>
            <EditOutlinedIcon />
          </span>
          <span className="lg:block hidden">Edit</span>
        </button>
      </div>
    </>
  );
};
