import React, { useEffect, useState } from "react";

// Image
import moon from "../assets/moon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => setDark((prevState) => !prevState);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleDark]);

  return (
    // <div className="head">
    <div className="flex flex-row justify-between p-4 px-20 border-1 shadow-xl dark:bg-dark-theme dark:text-white">
      <div className="font-bold">
        <Link to={"/"}>
          <p>Where in the world?</p>
        </Link>
      </div>
      <div className="inline-flex cursor-pointer" onClick={() => toggleDark()}>
        <img src={moon} alt="" width={"25px"} height={"25px"} />
        Dark mode
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
