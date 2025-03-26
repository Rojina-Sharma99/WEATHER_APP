🌤️ Weather Application
Overview
This is a weather application that allows users to search for any city and view current weather conditions along with an hourly forecast for the next 24 hours. The application fetches real-time weather data from WeatherAPI and is built using React with Vite for fast and efficient development.

Features
Search Functionality: Search for any city to retrieve up-to-date weather information.

Current Weather Display: View temperature, weather descriptions, and relevant weather icons.

Hourly Forecast: Displays hourly weather updates for the next 24 hours.

Default City: The app loads by default with the weather details of Adelaide.

Error Handling: Displays a user-friendly message when no results are found or the API call fails.

Technologies Used
React (with Hooks for state and lifecycle management)

Vite (for fast development and build processes)

WeatherAPI (for weather data)

CSS (for responsive and clean UI styling)

Installation & Setup
1. Clone the repository:
bash
Copy
Edit
git clone https://github.com/upadhyaybikram/weather-app.git
2. Navigate to the project directory:
bash
Copy
Edit
cd weather-app
3. Install dependencies:
bash
Copy
Edit
npm install
4. Create a .env file in the root directory and add your WeatherAPI key:
bash
Copy
Edit
VITE_API_KEY=your_api_key_here
5. Start the development server:
bash
Copy
Edit
npm run dev
6. Open the application in your browser:
arduino
Copy
Edit
http://localhost:5173
Project Structure
bash
Copy
Edit
weather-app/
│── public/                # Static assets  
│── src/  
│   ├── components/        # Reusable components  
│   │   ├── CurrentWeather.jsx  
│   │   ├── HourlyWeather.jsx  
│   │   ├── SearchSection.jsx  
│   │   ├── NoResultsDiv.jsx  
│   ├── constants/         # Weather condition codes  
│   ├── App.jsx            # Main application file  
│   ├── main.jsx           # Entry point  
│   ├── index.css          # Global styles  
│── .env                   # Environment variables  
│── package.json           # Dependencies and scripts  
│── README.md              # Project documentation  
How It Works
Fetching Weather Data
The app calls WeatherAPI when a user searches for a city.

It retrieves current weather conditions and hourly forecasts.

Displaying Data
The CurrentWeather component displays temperature, weather description, and an icon.

The HourlyWeatherItem component shows hourly forecasts for the next 24 hours.

Error Handling
If the API call fails or the city is not found, a user-friendly NoResultsDiv is displayed.

Usage
Open the app in your browser.

Enter a city name in the search bar and press Enter.

View the current weather details and the hourly forecast for the next 24 hours.

Future Enhancements
7-Day Weather Forecast

User Location-Based Weather Fetching

Dark Mode

Additional Weather Metrics (Wind Speed, Humidity, Air Pressure, etc.)

License
This project is licensed under the MIT License.

Acknowledgments
WeatherAPI for providing free weather data.

React and Vite for enabling smooth and fast development.

Enjoy using the Weather App! 🌦️






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
