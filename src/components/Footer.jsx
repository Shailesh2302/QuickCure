import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* --------left------------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Book doctor appointments easily with our seamless online platform.
            Find experienced healthcare professionals, schedule visits at your
            convenience, and manage your health effortlessly. We prioritize your
            well-being with a user-friendly experience and secure data handling.
            Stay connected with top doctors anytime, anywhere. Your health, our
            priority!
          </p>
        </div>

        {/* -----------center------- */}
        <div>
          <p className="text-xl">COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ---------right---------- */}
        <div>
          <p>GET IN TOUCH</p>
          <ul>
            <li>+9198974874</li>
            <li>quickCure18@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* -------Copyright text--------- */}
      <div>
        <hr />
        <p>Copyright 2025@ QuickCure - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
