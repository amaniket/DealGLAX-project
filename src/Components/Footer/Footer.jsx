import React from "react";
import uni from '../assests/Untitled.png';

const Footer = () => {
  return (
    <div className="bg-black text-white-alpha-700 min-h-40 px-14 py-16 md:py-6 rounded">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-8">
          <div className="text-white font-bold">About Us</div>
          <div className="text-sm tracking-widest text-center md:text-left text-white">
            This is the Major project.
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img className="w-28 h-24 mb-4 md:mb-0 rounded" src={uni} alt="Uni Logo"  />
          <div className="text-white">Developers</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
