import React from "react";

const FilterBar = () => {
  return (
    <>
      {/* Todo Selection bar */}
      <div className="shadow-xl">
        <select name="" id="" value={1} className="focus:outline-none">
          <option value={1}>Filter by Region</option>
          <option value={2}>Africa</option>
          <option value={3}>America</option>
          <option value={4}>Europe</option>
          <option value={5}>Europe</option>
          <option value={6}>Oceania</option>
        </select>
        {/* <label for="cars">Choose a car:</label>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit" value="Submit" /> */}
      </div>
    </>
  );
};

export default FilterBar;
