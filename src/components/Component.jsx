import React from "react";
import "./Component.css";
import { useWeatherApi } from "../hooks/useWeatherApi";

function Cadre({ city = "Columbus" }) {
  const { weatherData, loading, error } = useWeatherApi(city);

  if (loading) {
    return (
      <div className="weather-card">
        <div className="loading">Loading weather datas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-card">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="weather-card">
        <div className="no-data">No weather data available right now</div>
      </div>
    );
  }

  // Extract weather information from WeatherAPI response
  const {
    location: { name, localtime },
    current: {
      temp_c,
      temp_f,
      condition: { text: condition },
      humidity,
      feelslike_c,
    },
  } = weatherData;

  // Convert localtime to readable date
  const date = new Date(localtime).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get weather icon based on condition
  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes("sunny") || conditionLower.includes("clear")) {
      return <div className="sun"></div>;
    } else if (conditionLower.includes("cloud")) {
      return <div className="cloud"></div>;
    } else if (conditionLower.includes("rain")) {
      return <div className="rain"></div>;
    } else if (conditionLower.includes("snow")) {
      return <div className="snow"></div>;
    } else {
      return <div className="sun"></div>;
    }
  };

  return (
    <div className="weather-card">
      <h2 id="city">{name}</h2>
      <p id="date">{date}</p>

      <div className="icon">{getWeatherIcon(condition)}</div>

      <div className="temperature">{Math.round(temp_c)}°C</div>
      <div className="condition">{condition}</div>

      <div className="details">
        <div>Feels like {Math.round(feelslike_c)}°C</div>
        <div>Humidity {humidity}%</div>
        <div>{Math.round(temp_f)}° F</div>
      </div>
    </div>
  );
}

export default Cadre;
