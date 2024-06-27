import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CardCountry = ({ countries }) => {
  //new entry data
  const [detailCountry, setdetailCountry] = useState([]);
  const [data, setData] = useState("");

  // getting data
  const nameCountry = countries?.name?.common;
  const flagsCountry = countries?.flags?.png;
  const populationCountry = countries?.population;
  const regionCountry = countries?.region;
  const capitalCountry = countries?.capital;

  // add commas feature
  const populationCommas = populationCountry.toLocaleString();

  // getting data from card
  const handleData = (nadme) => {
    setData(nadme);
  };

  // function getDetail(nc) {
  //   fetch(`https://restcountries.com/v3.1/name/${nc}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setdetailCountry(data);
  //     });
  // }

  return (
    <>
      <div className="rounded-t-md">
        <div className="flex flex-col shadow-xl ">
          <div>
            <img
              src={flagsCountry}
              alt="country-flag"
              className="h-[150px] w-full rounded-t-md cursor-pointer"
            />
          </div>
          <p
            className="font-bold ml-4 mt-1 pb-2 cursor-pointer"
            onClick={() => handleData(nameCountry)}
          >
            {nameCountry}
          </p>
          <div className="text-sm ml-4 pb-3">
            <p>Population : {populationCommas}</p>
            <p>Region : {regionCountry}</p>
            <p>Capital : {capitalCountry}</p>
          </div>
        </div>
      </div>
    </>
  );
};

CardCountry.propTypes = {
  countries: PropTypes.object,
};

export default CardCountry;
