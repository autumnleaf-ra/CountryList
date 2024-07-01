// Library
import React, { useEffect, useState } from "react";

// component
import CardCountry from "./CardCountry";
import Navbar from "./Navbar";

function Home() {
  const [dataCountry, setDataCountry] = useState([]);
  const [searchKey, setsearchKey] = useState("");
  const [firstData, setfirstData] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 25;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = searchKey
    ? dataCountry.slice(firstIndex, lastIndex)
    : firstData.slice(firstIndex, lastIndex);
  const npage = searchKey
    ? Math.ceil(dataCountry.length / recordsPerPage)
    : Math.ceil(firstData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleChange = (e) => {
    if (e.target.value) {
      fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setfirstData(data);
        });
    }
  };

  const handleSearch = (e) => {
    setsearchKey(e.target.value);
    if (e.target.value) {
      const searchData = firstData.filter((data) => {
        const dataName = data?.name?.common.toLowerCase();

        return dataName.includes(e.target.value.toLowerCase());
      });
      setCurrentPage(1);

      setDataCountry(searchData);
    }
  };

  const handleChangePage = (id) => {
    setCurrentPage(id);
  };

  function syncAllCountry() {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,population,capital,images,flags"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setfirstData(data);
      });
  }

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    syncAllCountry();
  }, []);

  return (
    <>
      {/* <div className="head"> */}
      <Navbar />
      {/* Second Bar */}
      <div className="flex flex-row justify-between p-4 px-20 pt-10 dark:bg-dark-theme-2">
        {/* Search Bar */}
        <div className="search dark:bg-dark-theme-2">
          <div className="inline-flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
              className="dark:fill-white"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
            </svg>
            <input
              type="text"
              value={searchKey}
              className="focus:outline-none dark:bg-dark-theme-2"
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
            className="focus:outline-none dark:bg-dark-theme-2 dark:text-white"
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
      <div className="pt-10 px-20 dark:bg-dark-theme-2">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {records.map((countries, i) => (
            <CardCountry key={i} countries={countries} />
          ))}
        </div>
      </div>
      {/* Pagination Bar */}
      <div className="flex justify-center pt-10 pb-10 dark:bg-dark-theme-2 dark:text-white">
        <ul className="pagination inline-flex space-x-5 ">
          <li className="page-item">
            <button href="" onClick={() => prevPage()}>
              Prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li key={i}>
              <button onClick={() => handleChangePage(n)}> {n}</button>
            </li>
          ))}
          <li>
            <button href="" onClick={() => nextPage()}>
              Next
            </button>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </>
  );
}

export default Home;
