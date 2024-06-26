// Library
import React from "react";

// Image
import moon from "../assets/moon.svg";
import Search from "./Search";
import FilterBar from "./FilterBar";
import searchIcon from "../assets/search.svg";
import CardCountry from "./CardCountry";

const CountryComponent = () => {
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
      {/* Second Bar */}
      <div className="flex flex-row justify-between p-4 px-20 pt-10">
        <Search searchIcon={searchIcon} />
        <FilterBar />
      </div>
      {/* Country List Component */}
      <div className="pt-10 px-20">
        {/* Todo Implement Card */}
        <div class="grid grid-cols-4 gap-4">
          <div>
            <CardCountry />
          </div>
          <div>01</div>
          <div>01</div>
        </div>
      </div>
    </div>
  );
};

export default CountryComponent;
