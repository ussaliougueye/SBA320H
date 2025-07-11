import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadre from "./components/Component";
import SearchBar from "./components/SearchBar";
import CityDetail from "./components/CityDetail";
import { cityList } from "./variables";
import "./App.css";

function Home() {
  // Take first 100 cities from the list
  const carouselCities = cityList.slice(0, 100);

  return (
    <>
      <SearchBar />

      <div className="weather-display">
        <Cadre city="New York" />
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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:cityName" element={<CityDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
