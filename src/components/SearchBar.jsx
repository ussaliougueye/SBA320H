import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cityList } from "../variables";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSearchTerm(selectedCity);
    if (selectedCity) {
      // Navigate to the city detail page
      navigate(`/city/${encodeURIComponent(selectedCity)}`);
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
