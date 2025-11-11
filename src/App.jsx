import React, { useState } from "react";
import axios from "axios";

// Importing custom components
import Input from "./Components/Input";
import WeatherDisplay from "./Components/WeatherDisplay";
import Loading from "./Components/Loading";
import Error from "./Components/Error";

// Importing background images based on weather conditions
import clear from "./assets/images/clear.jpg";
import cloud from "./assets/images/cloud.jpg";
import rain from "./assets/images/rain.jpg";
import snow from "./assets/images/snow.jpg";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch weather data from OpenWeatherMap API
  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    try {
      const apiKey = "40f7e6604cf067327fd804b77389a7eb"; // your API key
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      setError("City not found");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Determine background image based on weather condition
  const getBackground = () => {
    if (!weather || !weather.weather) return clear;
    const type = weather.weather[0].main.toLowerCase();
    if (type.includes("cloud")) return cloud;
    if (type.includes("rain")) return rain;
    if (type.includes("snow")) return snow;
    return clear;
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center 
                 bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-10 py-6 
                 relative transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${getBackground()})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center 
                      text-center space-y-4 sm:space-y-6 animate-fade-in">
        {/* App title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Weather App
        </h1>

        {/* Input box */}
        <Input city={city} setCity={setCity} fetchWeather={fetchWeather} />

        {/* Conditional rendering */}
        {loading && <Loading />}
        {error && <Error message={error} />}
        {weather && <WeatherDisplay weather={weather} />}

        {/* Footer / small note (optional) */}
        <p className="text-white/80 text-sm sm:text-base mt-6">
          Powered by <span className="font-semibold">OpenWeatherMap</span>
        </p>
      </div>
    </div>
  );
};

export default App;
