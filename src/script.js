import { populateCityList } from './functions.js';

setTimeout(() => {
  alert("Check the weather of any city in the world");
}, 2000);


window.onload = function() {
  populateCityList();
};
const lat = 37.7749;
const lon = -122.4194;
const apiKey = "6fa07ab67bd148ac92c173725250206";
let pickedCity = "";

document.getElementById("cityy").addEventListener("change", (event) => {
  pickedCity = event.target.value;

  async function getWeather() {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${pickedCity}`;
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
    
  
      const cityElement = document.querySelector("#city");
      cityElement.textContent = data.location.name;
      const currentTime = document.querySelector("#date");
      currentTime.textContent = data.current.last_updated;
      const currentTemp = document.querySelector("#temp");
      currentTemp.textContent = data.current.temp_f + "°C";
      const currentHumidity = document.querySelector("p > span#humidity");
      currentHumidity.innerText = data.current.humidity + "--%";
      const currentWind = document.querySelector("p > span#wind");
      currentWind.innerText = data.current.wind_kph + "-- km/h";
  
      return data;
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  }
  
  getWeather(lat, lon, apiKey);
});









