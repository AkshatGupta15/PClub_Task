import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import profile_photo from "../../assets/images/avatar_icon.png";
import { useNavigate } from "react-router-dom";
import { Sidebar_toggle_button } from "../Usefull_Components/sidebar_toggle_button";
export const DropDown_Sidebar_profile = () => {
  const navigate = useNavigate();
  const links = [
    {
      text: "Your Porfile",
      icon: AccountCircleOutlinedIcon,
      path: "/profile",
    },
    {
      text: "Orders",
      icon: Inventory2OutlinedIcon,
      path: "/order",
    },
    {
      text: "Track Package",
      icon: TravelExploreOutlinedIcon,
      path: "#",
    },
    {
      text: "FAQs",
      icon: HelpOutlineOutlinedIcon,
      path: "#",
    },
  ];
  return (
    <>
      {/*
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] h-screen p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a className=" text-red-500">Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
        </ul> */}
      <div className="drawer drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 md:w-1/4  w-3/4 min-h-full bg-base-200 text-base-content">
            <Sidebar_toggle_button id={"my-drawer-4"}/>
            {/* Sidebar content here */}
            <div className="flex flex-col justify-center items-center ">
              <div className=" flex items-center justify-center">
                <img
                  src={profile_photo}
                  className="w-24 h-24 rounded-full object-cover object-center"
                ></img>
              </div>
              <p className="mt-3 text-xl">
                <span className=" font-extralight">Hello! User</span>{" "}
              </p>
            </div>
            <div className="divider divider-subheading"></div>

            <div>
              
              <div className="">
                {links.map((link) => (
                  <li key={link.text}>
                    <button onClick={() => navigate(link.path)}>
                      <span className="flex items-center">
                        <link.icon /> {link.text}
                      </span>
                    </button>
                  </li>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
