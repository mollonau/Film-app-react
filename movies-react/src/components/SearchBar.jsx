import React from "react";
import "./SearchBar.css"; 
import Input from "./Input";
import { useMovieContext } from "../Context";

function SearchBar() {
  const { language, changeLanguage, searchTerm, setSearchTerm } = useMovieContext();

  const handleSelectChange = (e) => {
    changeLanguage(e.target.value);
  };
  const text = language === "LT" ? "Dabartine kalba yra" : "Current Language:";

  return (
    <div className="search-bar">
      <Input value={searchTerm} setValue={setSearchTerm} />
      <div className="lang">
        <p>{text}: {language}</p>
        <select value={language} onChange={handleSelectChange}>
          <option value="Lietuvių">LT</option>
          <option value="English">EN</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;

