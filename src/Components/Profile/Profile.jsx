import React, { useEffect, useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Sidebar_profile } from "./Sidebar_profile";

const avatar =
  "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png";
// const user = {
//   firstName: "Akshat",
//   lastName: "Gupta",
//   email: "Akshat23@iitk.ac.in",
//   phone: "9389733XXX",
//   address_obj: {
//     Hall: 13,
//     Room: "A412",
//     city: "Kanpur",
//     Pincode: 208016,
//     state: "Uttar Pradesh",
//     college: "Indian Institute of Technology Kanpur",
//   },
// };

const Profile = () => {
  // const [user, setUser] = useState({
  //   city: "7909",
  //   college: "70997",
  //   firstName: "6534563 ",
  //   hall: "97909",
  //   lastName: "097907",
  //   phoneNumber: "790797",
  //   postalCode: "7099",
  //   roomNo: "9070997",
  //   state: "97977",
  // });
  // const userLoginInfo = JSON.parse(localStorage.getItem("user"));
  // const email = userLoginInfo.user.email;
  // const [isEdit, setIsEdit] = useState(false);
  // useEffect(() => {
  //   const storedUserData = JSON.parse(localStorage.getItem("userData"));
    
  //   console.log(userLoginInfo.user.email);
    
  //   console.log(storedUserData);
  //   const {
  //     firstName,
  //     lastName,
  //     phoneNumber,
  //     roomNo,
  //     hall,
  //     college,
  //     city,
  //     state,
  //     postalCode,
  //   } = storedUserData;
  //   console.log(
  //     firstName,
  //     lastName,
  //     phoneNumber,
  //     roomNo,
  //     hall,
  //     college,
  //     city,
  //     state,
  //     postalCode
  //   );
  //   if (storedUserData) {
  //     setUser(storedUserData);
  //     // setUser(firstName : storedUserData.firstName,

  //     // );
  //     // console.log(JSON.parse(storedUserData).roomNo)
  //   }
  // }, []);

  // Save userData to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify(user));
  //   console.log(user)
  // }, [user]);
  const [user, setUser] = useState({});
  const userLoginInfo = JSON.parse(localStorage.getItem("user"));
  const email = userLoginInfo?.user?.email;
  const [isEdit, setIsEdit] = useState(false);
  console.log(user)
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    setUser(storedUserData || {});
    
  }, []);
  
  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleCancelClick = () => {
    setIsEdit(false);
    setUser(userData); // Reset to original data
    
  };

  const handleSaveClick = () => {
    localStorage.setItem("userData", JSON.stringify(user));
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="mt-10 mx-auto p-10">
        <div>
          <span className="rubik-400 text-2xl font-medium ml-[20%]">
            My Profile
          </span>
          <div className="flex mt-10 gap-x-5">
            <div className="hidden sm:block w-1/5">
              <Sidebar_profile />
            </div>
            {user && (
              <div className="lg:w-4/5">
                <div className="border flex justify-between p-5 rubik-400 rounded-md">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4">
                    <div>
                      <img
                        src={avatar}
                        alt="avatar"
                        className="w-20 rounded-full"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      {isEdit ? (
                        <div>
                          {/* <input
                          type="text"
                          name="firstName"
                          value={user.firstName}
                          onChange={handleChange}
                          className="input input-bordered input-sm"
                        />
                        <input
                          type="text"
                          name="lastName"
                          value={user.lastName}
                          onChange={handleChange}
                          className="input input-bordered input-sm"
                        /> */}
                          <div>
                            {/* <p className="font-semibold text-lg">
                          {user.firstName + " " + user.lastName}
                        </p>
                        <p className="text-sub2 font-medium">{email}</p>
                        <p className="text-sub2">{user.roomNo +" hall"+user.hall+" "+ user.college +" "+user.city+" "+user.state }</p> */}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="font-semibold text-lg">
                            {user.firstName + " " + user.lastName}
                          </p>
                          <p className="text-sub2 font-medium">
                            {email}
                          </p>
                          <p className="text-sub2">
                            {user.roomNo +
                              " hall" +
                              user.hall +
                              " " +
                              user.college +
                              " " +
                              user.city +
                              " " +
                              user.state}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>{/* <EditButton onClick={handleEditClick} /> */}</div>
                </div>

                <div className="border p-5 rubik-400 mt-8">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xl font-semibold text-links">
                        Personal Information
                      </p>
                    </div>
                    <div>
                      <EditButton onClick={handleEditClick} />
                    </div>
                  </div>
                  <div>
                    <div className="mt-5 grid lg:grid-cols-2 text-sub2 gap-3">
                      <div>
                        <p>First Name</p>
                        {isEdit ? (
                          <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                            className="input input-bordered input-sm"
                          />
                        ) : (
                          <p className="font-medium">{user.firstName}</p>
                        )}
                      </div>
                      <div>
                        <p>Last Name</p>
                        {isEdit ? (
                          <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                            className="input input-bordered input-sm"
                          />
                        ) : (
                          <p className="font-medium">{user.lastName}</p>
                        )}
                      </div>
                      <div>
                        <p>Email Address</p>
                        <p className="font-medium">{email}</p>
                      </div>
                      <div>
                        <p>Phone</p>
                        {isEdit ? (
                          <input
                          type="text"
                          name="phoneNumber"
                          value={user.phoneNumber}
                          onChange={handleChange}
                          className="input input-bordered input-sm"
                        />
                        ) : (
                          <p className="font-medium">{user.phoneNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border p-5 rubik-400 mt-8">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xl font-semibold text-links">
                        Address
                      </p>
                    </div>
                    <div>
                      <EditButton onClick={handleEditClick} />
                    </div>
                  </div>
                  <div className="mt-5 grid lg:grid-cols-2 text-sub2 gap-3">
                    <div>
                      <p>College</p>
                      {isEdit ? (
                        <input
                          type="text"
                          name="college"
                          value={user.college}
                          onChange={handleChange}
                          className="input input-bordered input-sm"
                        />
                      ) : (
                        <p className="font-medium">{user.college}</p>
                      )}
                    </div>
                    <div>
                      <p>City/State</p>
                      {isEdit ? (
                        <>
                          <input
                            type="text"
                            name="city"
                            value={user.city}
                            onChange={handleChange}
                            className="input input-bordered input-sm"
                          />
                          <input
                            type="text"
                            name="state"
                            value={user.state}
                            onChange={handleChange}
                            className="input input-bordered input-sm"
                          />
                        </>
                      ) : (
                        <p className="font-medium">
                          {user.city + "/" + user.state}
                        </p>
                      )}
                    </div>
                    <div>
                      <p>Postal Code</p>
                      {isEdit ? (
                        <input
                          type="text"
                          name="postalCode"
                          value={user.postalCode}
                          onChange={handleChange}
                          className="input input-bordered input-sm"
                        />
                      ) : (
                        <p className="font-medium">{user.postalCode}</p>
                      )}
                    </div>
                    <div>
                      <p>Hall/Room</p>
                      {isEdit ? (
                        <>
                          <input
        type="text"
        name="hall" // Update name to match the key in user state
        value={user.hall}
        onChange={handleChange}
        className="input input-bordered input-sm"
      />
      <input
        type="text"
        name="roomNo" // Update name to match the key in user state
        value={user.roomNo}
        onChange={handleChange}
        className="input input-bordered input-sm"
      />

                        </>
                      ) : (
                        <p className="font-medium">
                          {user.hall + "/" + user.roomNo}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {isEdit && (
                  <ConfirmChanges
                    onSave={handleSaveClick}
                    onCancel={handleCancelClick}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

export const ConfirmChanges = ({ onSave, onCancel }) => {
  return (
    <div className="mt-8 flex gap-x-4">
      <button className="btn btn-outline btn-error btn-sm" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn btn-success btn-sm text-white" onClick={onSave}>
        Save Changes
      </button>
    </div>
  );
};

export const EditButton = ({ onClick }) => {
  return (
    <button
      className="btn btn-sm bg-white flex items-center text-slate-400"
      onClick={onClick}
    >
      <span>
        <EditOutlinedIcon />
      </span>
      <span className="lg:block hidden">Edit</span>
    </button>
  );
};
