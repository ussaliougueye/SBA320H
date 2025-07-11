import React, { useState } from "react";
import Cadre from "./components/Component";
import SearchBar from "./components/SearchBar";
import { cityList } from "./variables";
import "./App.css";

function Home() {
  const [selectedCity, setSelectedCity] = useState("New York");

  const handleCitySearch = (city) => {
    setSelectedCity(city);
  };

  // Take first 100 cities from the list
  const carouselCities = cityList.slice(0, 100);

  return (
    <>
      <SearchBar onSearch={handleCitySearch} />

      <div className="weather-display">
        <Cadre city={selectedCity} />
      </div>

      <div className="carousel-wrapper">
        
        <div className="carousel-slides">
          {carouselCities.map((city, index) => (
            <div key={index} className="carousel-item">
              <Cadre city={city} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
