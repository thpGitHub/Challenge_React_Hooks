import React from "react";
import "./Search.css";
import { IconContext } from "react-icons";
import { MdImageSearch } from "react-icons/md";

export default function Search() {
  return (
    <div className="search-container">
      <input
        type="search"
        className="searchInput"
        placeholder="Search Photos ..."
      />
      <IconContext.Provider value={{ className: "react-icons-search" }}>
        <button className="search-photos">
          <MdImageSearch />
        </button>
      </IconContext.Provider>
    </div>
  );
}
