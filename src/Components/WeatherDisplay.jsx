import React from "react";
import backgroundImage from "../assets/images/backgroundimage.jpg"; // Ensure path is correct

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const { name, weather: details, wind, main } = weather;
  const icon = details[0].icon;

  return (
    <div
      className="relative w-full flex justify-center items-center py-8 px-4 sm:px-6 md:px-10 lg:px-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

      {/* Weather Card */}
      <div className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-white shadow-xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{name}</h2>

        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={details[0].description}
          className="mx-auto w-24 sm:w-28 md:w-32"
        />

        <p className="text-lg sm:text-xl capitalize font-medium">{details[0].main}</p>

        <div className="mt-4 space-y-2 text-sm sm:text-base md:text-lg">
          <p>🌡️ <span className="font-semibold">Temp:</span> {main.temp}°C</p>
          <p>💧 <span className="font-semibold">Humidity:</span> {main.humidity}%</p>
          <p>💨 <span className="font-semibold">Wind:</span> {wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
