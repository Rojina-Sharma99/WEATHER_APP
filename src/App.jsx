import { useEffect, useState } from "react";
import "./App.css";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import { weatherCodes } from "./constant";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});

  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);

      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) => 
          weatherCodes[icon].includes(data.current.condition.code)
      ) ;

      setCurrentWeather({ temperature, description,weatherIcon});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      {/*This is a search section*/}
      <SearchSection getWeatherDetails={getWeatherDetails} />

      {/*This is a weather section*/}
      <div className="weather-section">
        {/*This is a current weather section*/}
        <CurrentWeather currentWeather={currentWeather} />

        <div className="hourly-forecast">
          <ul className="weather-list">
            <HourlyWeather />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
