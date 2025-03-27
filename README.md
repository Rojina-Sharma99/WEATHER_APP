# 🌦️ Weather Application
## 📝 Overview
This is a weather application that allows users to search for any city and view current weather conditions along with an hourly forecast for the next 24 hours. The application fetches real-time weather data from WeatherAPI and is built using React with Vite for fast and efficient development.

Current weather conditions 🌡️

Hourly forecast for the next 24 hours ⏳

The app is built with React ⚛️ and Vite ⚡, fetching real-time weather data from WeatherAPI ☁️.

## ✨ Features
✅ Search Functionality: Easily search for any city to get live weather updates 🔎

✅ Current Weather Display: See temperature 🌡️, weather conditions 🌤️, and corresponding icons 🖼️

✅ Hourly Forecast: View hourly weather updates for the next 24 hours ⏰

✅ Default City: App starts by showing Adelaide’s weather 🇦🇺

✅ Get longitude and latitude info.

✅ Error Handling: Friendly message if no results are found ❌

## 🛠️ Technologies Used
⚛️ React (with Hooks for state management)

⚡ Vite (for lightning-fast builds and development)

🌤️ WeatherAPI (for weather data fetching)

🎨 CSS (for styling and responsive design)

## 🚀 Installation & Setup
1️⃣ Clone the repository:
bash
Copy
Edit
git clone https://github.com/Rojina-Sharma99/WEATHER_APP
2️⃣ Navigate to the project folder:
bash
Copy
Edit
cd weather-app
3️⃣ Install dependencies:
bash
Copy
Edit
npm install
4️⃣ Create a .env file and add your API key:
bash
Copy
Edit
VITE_API_KEY=your_api_key_here
5️⃣ Start the development server:
bash
Copy
Edit
npm run dev
6️⃣ Open the app in your browser 🌐:
arduino
Copy
Edit
http://localhost:5173
## 🗂️ Project Structure
pgsql
Copy
Edit
weather-app/
│── public/                📁 Static assets  
│── src/  
│   ├── components/        📁 Reusable components  
│   │   ├── CurrentWeather.jsx  
│   │   ├── HourlyWeather.jsx  
│   │   ├── SearchSection.jsx  
│   │   ├── NoResultsDiv.jsx  
│   ├── constants/         📁 Weather condition codes  
│   ├── App.jsx            🎯 Main app component  
│   ├── main.jsx           🚀 Entry point  
│   ├── index.css          🎨 Global styles  
│── .env                   🔑 API key environment variables  
│── package.json           📜 Project dependencies  
│── README.md              📝 Documentation  
🔎 How It Works
## 🔄 Fetching Weather Data
The app queries WeatherAPI based on the user’s search input.

It retrieves current weather and hourly forecasts 📊.

## 📡 Displaying Data
CurrentWeather shows temperature, weather description, and an icon 🌤️.

HourlyWeatherItem lists hourly forecasts ⏰ for the next 24 hours.

Longitude and latitude from the location icon on the right and check in console for details.

## 🚫 Handling Errors
If the API fails or city is not found, a friendly NoResultsDiv appears 🙈.

## 📋 Usage Guide
Open the app in your browser 🌍.

Enter a city name in the search bar and hit Enter 🖱️.

Instantly see current weather and a 24-hour hourly forecast 🕒.

## 🌟 Future Enhancements
📅 7-Day Extended Forecast

📍 Auto-fetch weather based on user location

🌙 Dark Mode for night owls

💧 More weather metrics (humidity, wind speed, pressure, UV index)


## 🙏 Acknowledgments
WeatherAPI for free and reliable weather data ☁️

React and Vite for making development smooth and fun ⚛️⚡

☀️ Enjoy using the Weather App! Stay weather-ready! 🌧️❄️🌤️








