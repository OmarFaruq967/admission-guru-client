import React from "react";
import heroImage from "../../../../public/images/Hero Image/find-courses-from-bg.jpg";
import Search from "./Search";

const HeroSection = () => {
  return (
    <div>
      <div className="relative">
        {/* Background Image */}
        <img
          src={heroImage}
          alt=""
          className="w-[100vw] h-[100vh] object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-bold">Life the journey get</h2>
            <h2 className="text-4xl md:text-7xl font-bold mt-5">the bright career</h2>
            <div className=" mt-12">
            <Search/>
            </div>
            
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
