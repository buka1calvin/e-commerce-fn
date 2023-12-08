import React from "react";
import Logo from "../assets/logo-ecommerce.svg";
import Facebook from "../public/icons/socials/facebook.svg";
import Instagram from "../public/icons/socials/instagram.svg";
import Twitter from "../public/icons/socials/twitter.svg";
import Pinterest from "../public/icons/socials/pinterest.svg";

const Footer = () => {
  const helpLinks = [
    "Privacy Policy",
    "Shipping & Delivery",
    "Refund Policy",
    "Track Your Order",
  ];
  const supportLinks = [
    "Feedback",
    "Contact Us",
    "Download App",
    "Terms and Conditions",
  ];
  const socialIcons = [Facebook, Instagram, Twitter, Pinterest];
  const additionalLinks = ["Privacy", "Security", "Terms"];

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container m-auto flex items-center justify-between flex-wra xs:flex-col px-3">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 lg:px-5">
          <a href="/" className="flex items-center mb-4">
            <img src={Logo} className="h-10 sm:h-9" alt="Destructors Logo" />
          </a>
          <p className="text-gray-600 mb-4">
            Elevate your online shopping experience with our premier e-commerce
            platform. Crafted with precision and expertise, our platform is the
            result of dedicated efforts during the Andela ATLP program, ensuring
            a seamless and enhanced journey for our users.
          </p>
          <ul className="flex justify-around">
            {socialIcons.map((icon, index) => (
              <li key={`footer_social_${index}`} className="mr-4">
                <a href="#">
                  <img
                    src={icon}
                    alt="Social Network Icon"
                    className="h-6 w-6 xs:w-12 xs:h-12"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
          <h1 className="text-gray-800 text-lg font-semibold mb-4">Help</h1>
          <ul className="text-gray-600">
            {helpLinks.map((link) => (
              <li key={`help_link_${link}`} className="mb-2">
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
          <h1 className="text-gray-800 text-lg font-semibold mb-4">Support</h1>
          <ul className="text-gray-600">
            {supportLinks.map((link) => (
              <li key={`support_link_${link}`} className="mb-2">
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="mx-auto w-4/5 border-t border-gray-300 my-6" />
      <div className="container mx-auto flex justify-between items-center flex-wrap px-4 xs:flex-col">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Destructors - All rights reserved
        </p>
        <ul className="flex gap-4 text-center">
          {additionalLinks.map((link) => (
            <li key={`additional_link_${link}`}>
              <a href="#" className="text-gray-600 hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
