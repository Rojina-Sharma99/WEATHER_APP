const SearchSection = ({ getWeatherDetails , searchInputRef}) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    console.log(searchInput);
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    //get the weather details from the entered city
    getWeatherDetails(API_URL);
  };


  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        console.log(position);
        const {latitude, longitude} = position.coords;
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        getWeatherDetails(API_URL);
      },
      () => {
        alert("location access denied, Please enable permission to use this feature");
      }
    );

  };

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <span className="material-symbols-rounded">search</span>
        <input
          type="search"
          placeholder="Enter a city name"
          className="search-input"
          required
          ref={searchInputRef}
         
        />
      </form>

      {/*This is a button section*/}
      <button className="location-button" onClick={handleLocationSearch}>
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </div>
  );
};

export default SearchSection;
