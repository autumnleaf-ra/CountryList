import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";

const InfoCountry = () => {
  let countryName = useParams();

  const [firstData, setfirstData] = useState([]);
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

  async function getAllDetail() {
    const response = await fetch(
      `https://restcountries.com/v3.1/all?fields=name,borders,cca3`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setfirstData(data);
  }

  useEffect(() => {
    getDetail();
    getAllDetail();
  }, []);

  console.log(firstData);

  // const countryCode = firstData?.map((data) => setcountryData(data?.cca3));
  // console.log(countryData);

  return (
    <>
      <Navbar />
      <div className="pt-10 px-20 h-screen dark:bg-dark-theme-2 dark:text-white">
        <div className="pb-20">
          <Link to={"/"}>
            <button>back</button>
          </Link>
        </div>
        {detailCountry.map((dcountry, i) => (
          <div className="flex flex-row space-x-40" key={i}>
            <div>
              <img
                src={dcountry?.flags?.png}
                alt="country-flags"
                className="shadow-2xl h-[200px] w-full"
              />
            </div>
            <div className="flex-col space-y-5">
              <div>
                <p>{dcountry?.name?.common}</p>
              </div>
              <div className="flex flex-row space-x-10">
                <div className="flex-col">
                  <p>
                    Native name:{" "}
                    {Object.values(dcountry?.name?.nativeName)[0]?.common}
                  </p>
                  <p>Population: {dcountry?.population}</p>
                  <p>Region: {dcountry?.region}</p>
                  <p>Sub Region: {dcountry?.subregion}</p>
                  <p>Capital: {dcountry?.capital}</p>
                </div>
                <div className="flex-col">
                  <div>Top Level Domain: {dcountry?.tld}</div>
                  <div>
                    Currencies: {Object.values(dcountry?.currencies)[0]?.name}
                  </div>
                  <div>
                    Languages: {Object.values(dcountry?.languages).toString()}
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-2">
                <p>Border Countries: </p>
                {dcountry?.borders?.map((data, i) => (
                  <div className="space-x-3" key={i}>
                    <button className="border border-3 border-black px-5">
                      {firstData?.map((datas) => {
                        const isFound = datas?.cca3.includes(data);
                        if (isFound) {
                          return <a href="">{datas?.name?.common}</a>;
                        }
                      })}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoCountry;
