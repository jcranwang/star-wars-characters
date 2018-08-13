import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Name"
        className="pa2 ba b--black"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
