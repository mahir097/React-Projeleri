import React from "react";

export default function Search({ setSearchValue, searchValue }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
