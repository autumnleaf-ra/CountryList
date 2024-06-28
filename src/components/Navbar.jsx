import React from "react";

// Image
import moon from "../assets/moon.svg";
import { Link } from "react-router-dom";

const handleDarkMode = () => {
  // Implement dark mode
  document.documentElement.classList.remove("dark");
};

const Navbar = () => {
  return (
    <div className="head">
      <div className="flex flex-row justify-between p-4 px-20 border-1 shadow-xl dark:bg-dark-theme">
        <div className="font-bold">
          <Link to={"/"}>
            <p>Where in the world?</p>
          </Link>
        </div>
        <div
          className="inline-flex cursor-pointer"
          onClick={() => handleDarkMode()}
        >
          <img src={moon} alt="" width={"25px"} height={"25px"} />
          Dark mode
        </div>
      </div>
    </div>
  );
};

export default Navbar;
