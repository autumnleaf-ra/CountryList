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
            <button>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <path
                  d="M1 16l15 15v-9h16v-12h-16v-9z"
                  className="dark:fill-white"
                ></path>
              </svg>
            </button>
            <span className="ml-1">Back</span>
          </Link>
        </div>
        {detailCountry.map((dcountry, i) => (
          <div
            className="sm:flex flex-col md:flex-col lg:flex-row justify-evenly"
            key={i}
          >
            <div>
              <img
                src={dcountry?.flags?.png}
                alt="country-flags"
                className="shadow-2xl h-[200px] w-full"
              />
            </div>
            <div className="flex-col space-y-5 sm:pt-10 md:pt-10 lg:pt-0">
              <div className="">
                <p className="font-bold">{dcountry?.name?.common}</p>
              </div>
              <div className="sm:flex flex-col md:flex-row">
                <div className="flex-col">
                  <p>
                    <strong>Native name: </strong>
                    {Object.values(dcountry?.name?.nativeName)[0]?.common}
                  </p>
                  <p>
                    <strong>Population:</strong> {dcountry?.population}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {dcountry?.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong>
                    {dcountry?.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {dcountry?.capital}
                  </p>
                </div>
                <div className="flex-col">
                  <p>
                    <strong>Top Level Domain: </strong>
                    {dcountry?.tld}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {Object.values(dcountry?.currencies)[0]?.name}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {Object.values(dcountry?.languages).toString()}
                  </p>
                </div>
              </div>
              <div className="flex-col space-y-2">
                <p>
                  <strong>Border Countries:</strong>
                </p>
                <div className="sm:flex flex-col md:flex-row text-[10px]">
                  {dcountry?.borders?.map((data, i) => (
                    <div className="space-x-3" key={i}>
                      <a className="border border-3 border-black px-5 dark:border-dark-theme">
                        {firstData?.map((datas) => {
                          const isFound = datas?.cca3.includes(data);
                          if (isFound) {
                            return (
                              <a href={`${datas?.name?.common}`}>
                                {datas?.name?.common}
                              </a>
                            );
                          }
                        })}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoCountry;
