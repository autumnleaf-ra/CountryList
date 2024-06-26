import React from "react";

const Search = ({ searchIcon }) => {
  return (
    // Todo Dark mode & Input text
    <div className="">
      <div className="inline-flex space-x-2">
        <img src={searchIcon} alt="" height={20} width={20} />
        <input type="text" className="focus:outline-none" />
      </div>
    </div>
  );
};

export default Search;
