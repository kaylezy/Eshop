import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/#AboutUs",
  },
  {
    title: "Blog",
    link: "/#Blog",
  },
  {
    title: "Contact Us",
    link: "/#ContactUs",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/*company details*/}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white lg:pr-24 pt-3">
              Eshop is a platform where you can buy and sell products. We have a
              wide range of products available for you to choose from.
            </p>
            <p className="text-gray-500 mt-4">Made with ❤️ by kngkay</p>
          </div>
          {/*Footer links*/}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/*Second footer links*/}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/*Company Address*/}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="" />
                  <p>123, Main Street, New York, USA</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt className="" />
                  <p>+1 234 567 890</p>
                </div>

                {/*social links*/}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration -200" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration -200" />
                  </a>
                  <a href="#">
                    <FaTwitter className="text-3xl hover:text-primary duration -200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration -200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
