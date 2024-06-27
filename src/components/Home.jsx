// Library
import React, { useEffect, useState } from "react";

// Image
import moon from "../assets/moon.svg";
import searchIcon from "../assets/search.svg";

// component
import CardCountry from "./CardCountry";

function Home() {
  const [dataCountry, setDataCountry] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dataCountry.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dataCountry.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleChange = (e) => {
    if (e.target.value) {
      fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDataCountry(data);
        });
    }
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then((data) => {
          setDataCountry(data);
        });
    } else {
      syncAllCountry();
    }
  };

  function syncAllCountry() {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,population,capital,images,flags"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDataCountry(data);
      });
  }

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    syncAllCountry();
  }, []);

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
          {/* Search Bar */}
          <div className="search">
            <div className="inline-flex space-x-2">
              <img
                src={searchIcon}
                alt=""
                height={20}
                width={20}
                className="cursor-pointer"
              />
              <input
                type="text"
                className="focus:outline-none"
                onChange={handleSearch}
              />
            </div>
          </div>
          {/* Option Filter */}
          <div className="shadow-xl">
            <select
              name=""
              id=""
              defaultValue={"all"}
              className="focus:outline-none"
              onChange={handleChange}
            >
              <option value={"all"} hidden>
                Filter by Region
              </option>
              <option value={"africa"}>Africa</option>
              <option value={"america"}>America</option>
              <option value={"europe"}>Europe</option>
              <option value={"asia"}>Asia</option>
              <option value={"oceania"}>Oceania</option>
            </select>
          </div>
        </div>
        {/* Country List Component */}
        <div className="pt-10 px-20">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {dataCountry.map((countries, i) => (
              <CardCountry key={i} countries={countries} />
            ))}
          </div>
        </div>
        {/* Pagination Bar */}
        {/* <ul className="pagination">
          <li className="page-item">
            <a href="" onClick={prevPage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li key={i}>
              <a href="" onClick={changeCPage}>
                {" "}
                {n}
              </a>
            </li>
          ))}
          <li>
            <a href="" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul> */}
      </div>
    </>
  );
}

export default Home;
