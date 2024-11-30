import React, { useState } from "react";
import "./SearchBar.css"; // Import CSS for styling the search bar
import searchicon from "../../assets/search_icon.png"; // Import search icon

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // State to hold the search query

  // Handler for input change
  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update the query state
  };

  // Handler for the form submit or "Enter" key press
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (query.trim()) {
      onSearch(query); // Pass the query to the parent component
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-bar-form">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for donations..."
          className="search-bar-input"
        />
        <img
          src={searchicon}
          alt="Search Icon"
          className="search-bar-icon"
          onClick={handleSubmit} // Trigger handleSubmit when the icon is clicked
        />
      </form>
    </div>
  );
};

export default SearchBar;
