import React from 'react';

const HeroImage = ({img, subtitle, title}) => {
    return (
        <div>
            <div
        className="w-full h-96 bg-fixed bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className=" h-96  flex mx-0 items-center justify-center">
          <div className="z-10 text-white text-center ">
          <h3 className="text-xl font-bold">{subtitle}</h3>
        <h1 className="text-4xl font-extrabold">{title} </h1>
          </div>
        </div>
      </div>
        </div>
    );
};

export default HeroImage;