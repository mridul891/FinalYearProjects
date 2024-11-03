import React from "react";

const Box = ({ children }) => {
  return (
    <div className="w-[80vw] md:h-[50vw] md:w-[30vw]  lg:w-[15vw] lg:h-[60vh] bg-white p-10 shadow-[0_2px_6px_rgb(0,0,0,10)] rounded-lg  text-center">
      {children}
    </div>
  );
};

export default Box;
