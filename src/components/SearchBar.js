import { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-input"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search"
      /> 
      <button className="search-button" type="submit">Search</button>   
    </form>
  )
};

export default SearchBar;
