// Library
import React, { useEffect } from "react";
import axios from "axios";

// Image
import moon from "./assets/moon.svg";
import Search from "./components/Search";
import FilterBar from "./components/FilterBar";
import searchIcon from "./assets/search.svg";
import CardCountry from "./components/CardCountry";

function App() {
  let nameCountry = [];

  axios.get("https://restcountries.com/v3.1/all?fields=name").then((res) => {
    const dataFull = res.data;
    dataFull.map((data) => {
      nameCountry.push(data?.name?.common);
    });
  });

  return (
    <>
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
          <div className="grid grid-cols-4 gap-4">
            <div>
              <CardCountry nameCountry={nameCountry} />;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
