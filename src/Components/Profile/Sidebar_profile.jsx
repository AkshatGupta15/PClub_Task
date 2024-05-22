import React from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import profile_photo from "../../assets/images/avatar_icon.png";
export const Sidebar_profile = () => {
  const links = [
    {
        text: "Your Porfile",
        icon :AccountCircleOutlinedIcon,
        path: "#",
      },
    {
      text: "Orders",
      icon :Inventory2OutlinedIcon,
      path: "#",
    },
    {
        text: "Change Delivery Address",
        icon : AddLocationAltOutlinedIcon,
        path: "#",
      },
    {
      text: "Track Package",
      icon:TravelExploreOutlinedIcon,
      path: "#",
    },
    {
      text: "FAQs",
      icon:HelpOutlineOutlinedIcon,
      path: "#",
    },
    
  ];
  return (
    <>
      
     
          <ul className="menu min-h-full text-base-content">
            <div className="">
              {links.map((link)=><li className="mb-4"><button className="hover:bg-links focus:bg-links focus:text-white hover:text-white bg-white border-none"><span className="flex items-center"><link.icon /> {link.text}</span></button></li>)}

            </div>
          </ul>
        
    </>
  );
};
