import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const InfoCountry = () => {
  let countryName = useParams();

  const [detailCountry, setdetailCountry] = useState([]);

  async function getDetail() {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName?.country}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setdetailCountry(data);
  }

  useEffect(() => {
    getDetail();
    console.log(detailCountry);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-10 px-20">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default InfoCountry;
