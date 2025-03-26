import { useEffect, useState, useRef} from "react";
import "./App.css";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import { weatherCodes } from "./constant";
import NoResultsDiv from "./components/NoResultsDiv";


function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [currentWeather, setCurrentWeather] = useState({});
  //ceates state for hourly forecast and pass it to hourly weather
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const searchInputRef = useRef(null);
  const [hasNoResults, setHasNoResults]= useState(false);

  
  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;
   

    const next24HoursData = hourlyData.filter(({ time }) => {
      const foreCastTime = new Date(time).getTime();
      return foreCastTime >= currentHour && foreCastTime <= next24Hours;
    });
    setHourlyForecast(next24HoursData);
  };


//Fetch weather data from API and update state
  const getWeatherDetails = async (API_URL) => {
    setHasNoResults(false);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error();
      const data = await response.json();
      console.log(data);

      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );

      setCurrentWeather({ temperature, description, weatherIcon });

      const hourlyData = data.forecast.forecastday[1].hour;
      filterHourlyForecast(hourlyData);

      searchInputRef.current.value = data.location.name;
    } catch {
      setHasNoResults(true);
    }
  };

  // Fetch default city weather data on initial render
  useEffect(() => {
    const defaultCity = "Adelaide"
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=2`;
    getWeatherDetails(API_URL);
  }, []); // it will render in only default 

  return (
    <div className="container">
      {/*This is a search section*/}
      <SearchSection 
      getWeatherDetails={getWeatherDetails} 
      searchInputRef={searchInputRef}
      />
      {hasNoResults ? (
        <NoResultsDiv/>
      ): (

      <div className="weather-section">
        {/*This is a current weather section*/}
        <CurrentWeather currentWeather={currentWeather} />

        <div className="hourly-forecast">
          <ul className="weather-list">

            {hourlyForecast.map((hourlyWeather) => (
              <HourlyWeather 
              key ={hourlyWeather.time_epoch}
              hourlyWeather={hourlyWeather}
              />
            
            ))}
            
          </ul>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
