import React from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import profile_photo from "../../assets/images/avatar_icon.png";
import {useNavigate} from "react-router-dom"
export const Sidebar_profile = () => {
  const navigate = useNavigate()
  const links = [
    {
        text: "Your Porfile",
        icon :AccountCircleOutlinedIcon,
        path: "/profile",
      },
    {
      text: "Orders",
      icon :Inventory2OutlinedIcon,
      path: "/order",
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
            <div className=" mt-10">
              {links.map((link)=><li className="mb-4"><button
                onClick={()=>navigate(link.path)}
               className="flex justify-center items-center hover:bg-links focus:bg-links focus:text-white hover:text-white bg-white border-none "><span className=""><link.icon />{link.text}</span></button></li>)}

            </div>
          </ul>
        
    </>
  );
};
