import React, { useState } from "react";
import { cityList } from "../variables";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSearchTerm(selectedCity);
    if (selectedCity) {
      onSearch(selectedCity);
    }
  };

  return (
    <div className="search-container">
      <select
        id="cityy"
        value={searchTerm}
        onChange={handleCityChange}
        className="search-input"
      >
        <option value="" disabled>
          Choose a city
        </option>
        {cityList.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
