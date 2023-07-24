import React from "react";
import image1 from "../../../../public/Images/Images/image-1.webp";
import Heading from "../../Shared/Heading/Heading";

const CollegeHero = () => {
  return (
    <div>
      <div
        className="w-full h-96 bg-fixed bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className=" h-96  flex mx-0 items-center justify-center">
          <div className="z-10 text-white text-center ">
           <Heading title='Our Colleges' subtitle='See Our Colleges'></Heading>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeHero;
