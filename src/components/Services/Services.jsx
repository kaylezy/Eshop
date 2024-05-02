import React from "react";
import {
  FaCarSide,
  FaHeadphones,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    desc: "Free shipping on all orders over $100",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    desc: "30 days money back guarantee",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    desc: "We ensure secure payment ",
  },
  {
    id: 4,
    icon: <FaHeadphones className="text-4xl md:text-5xl text-primary" />,
    title: "Online 24/7 Support",
    desc: "We provide 24/7 online support",
  },
];

const Services = () => {
  return (
    <div className="container m-4 md:my-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
        {ServiceData.map((data) => (
          <div className="flex flex-col items-start sm:flex-row gap-4">
            {data.icon}
            <div>
              <h1 className="lg:text-xl font-bold">{data.title}</h1>
              <h1 className="text-gray-400 text-sm">{data.desc}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
