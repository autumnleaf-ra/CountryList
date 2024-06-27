import React from "react";

// Image
import moon from "../assets/moon.svg";

const Navbar = () => {
  return (
    <div className="head">
      <div className="flex flex-row justify-between p-4 px-20 border-1 shadow-xl">
        <div className="font-bold">
          <p>Where in the world</p>
        </div>
        <div className="inline-flex">
          <img src={moon} alt="" width={"25px"} height={"25px"} /> Dark mode
        </div>
      </div>
    </div>
  );
};

export default Navbar;
