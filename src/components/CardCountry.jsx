import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardCountry = ({ countries }) => {
  // getting data
  const nameCountry = countries?.name?.common;
  const flagsCountry = countries?.flags?.png;
  const populationCountry = countries?.population;
  const regionCountry = countries?.region;
  const capitalCountry = countries?.capital;

  // add commas feature
  const populationCommas = populationCountry.toLocaleString();

  return (
    <>
      <div className="rounded-t-md">
        <div className="flex flex-col shadow-xl">
          <div>
            <img
              src={flagsCountry}
              alt="country-flag"
              className="h-[150px] w-full rounded-t-md cursor-pointer"
            />
          </div>
          <Link to={{ pathname: `/${encodeURIComponent(nameCountry)}` }}>
            <p className="font-bold ml-4 mt-1 pb-2 cursor-pointer">
              {nameCountry}
            </p>
          </Link>
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
