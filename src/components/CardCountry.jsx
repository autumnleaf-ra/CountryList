import axios from "axios";
import React, { useEffect } from "react";

const CardCountry = ({ nameCountry }) => {
  // TODO IMPLEMENT GET COUNTRY
  return (
    <>
      <div className="bg-red-400">
        <div className="flex flex-col">
          <div>Flag Image</div>
          <div>Name Country</div>
          <div>Population</div>
          <div>Region</div>
          <div>Capital</div>
        </div>
      </div>
    </>
  );
};

export default CardCountry;
