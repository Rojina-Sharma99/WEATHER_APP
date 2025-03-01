import { useEffect, useState } from "react";
import "./App.css";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import { weatherCodes } from "./constant";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  //ceates state for hourly forecast and pass it to hourly weather
  const [hourlyForecast, setHourlyForecast] = useState([]);

  // const filterHourlyForecast = (hourlyData) => {
  //   const currentHour = new Date().setMinutes(0, 0, 0);
  //   const next24Hours = currentHour + 24 * 60 * 60 * 1000;
  //   console.log(next24Hours, "next24 hrs");

  //   const next24HoursData = hourlyData.filter(({ time }) => {
  //     const foreCastTime = new Date(time).getTime();
  //     return foreCastTime >= currentHour && foreCastTime <= next24Hours;
  //   });
  //   console.log(next24Hours, "next24 hrs");
  //   setHourlyForecast(next24HoursData);
  // };
  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;
   

    const next24HoursData = hourlyData.filter(({ time }) => {
      const foreCastTime = new Date(time).getTime();
      return foreCastTime >= currentHour && foreCastTime <= next24Hours;
    });

    console.log(next24HoursData, "next24hourdata");

    setHourlyForecast(next24HoursData);
  };

  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);

      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );

      setCurrentWeather({ temperature, description, weatherIcon });
      const combineHourlyData = [
        ...data.forecast.forecastday[0].hour,
        ...data.forecast.forecastday[1].hour,
      ];

      filterHourlyForecast(combineHourlyData);
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
