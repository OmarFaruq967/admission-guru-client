import React from "react";

const Heading = ({subtitle, title}) => {
  return (
    <div>
        <h1 className="text-4xl font-extrabold">{title} </h1>
        <h3 className="text-xl font-bold">{subtitle}</h3>
    </div>
  );
};

export default Heading;
