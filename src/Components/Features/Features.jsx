import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import { Features_Card } from "./Features_Card";
const Features = () => {
  const featureList = [
    {
      text: "FREE DELIVERY",
      icon: ShoppingCartOutlinedIcon,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
    },
    {
      text: "QUALITY GUARANTEE",
      icon: BeenhereOutlinedIcon,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      text: "DAILY OFFERS",
      icon: LocalOfferOutlinedIcon,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      text: "100% SECURE PAYMENT",
      icon: ShieldOutlinedIcon,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
  ];
  return (
    <>
      <div>
        <div className="">
          <div className="mx-auto mt-10">
            <div className="lora-400 text-center">
              <div className=" group w-fit mx-auto">
                <p className="text-3xl text">Why Choose Us</p>
                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              <p className="text-subheading mt-2 mb-8">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>
            <ul className=" grid lg:grid-cols-4 md:grid-cols-2 gap-4">
              {featureList.map(({ text, icon: Icon, description }) => (
                <li key={text} className="hover:scale-[1.02] mb-4 transition-all duration-200">
                  <Features_Card
                    title={text}
                    icon={<Icon />}
                    desc={description}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
