import { useState } from "react";
import "./Search.css";
import { IconContext } from "react-icons";
import { MdImageSearch } from "react-icons/md";

export default function Search({ onChangeQuery }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log("handleChange ===", searchInput);
    console.log("e target value ===", e.target.value);
  };

  const handleChangeQuery = (e) => {
    e.preventDefault();
    onChangeQuery(searchInput);
    setSearchInput("");
  };

  return (
    <form className="search-container" onSubmit={handleChangeQuery}>
      {/* <form className="search-container" onSubmit={()=>handleChangeQuery}> */}
      {/* <form className="search-container" onSubmit={()=>onChangeQuery(searchInput)}> */}
      {console.log("in Search")}
      <input
        type="search"
        className="search-input"
        placeholder=" Search Photos ..."
        onChange={handleChange}
        value={searchInput}
      />
      <IconContext.Provider value={{ className: "react-icons-search" }}>
        <button type="submit" className="search-button">
          <MdImageSearch />
        </button>
      </IconContext.Provider>
    </form>
  );
}
