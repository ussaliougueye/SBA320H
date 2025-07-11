import { useState, useEffect } from "react";

const API_KEY = "bda265604ef64666b7a43601251107";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const useWeatherApi = (city = "New York") => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);

    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(cityName)}`;
    console.log("Fetching weather data for:", cityName);
    console.log("API URL:", url);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(
          `HTTP error! status: ${response.status} - ${errorText}`
        );
      }

      const data = await response.json();
      console.log("Weather data received:", data);
      setWeatherData(data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return {
    weatherData,
    loading,
    error,
    refetch: () => fetchWeatherData(city),
  };
};
