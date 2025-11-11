import React from "react";
import { FaSearch } from "react-icons/fa";

const Input = ({ city, setCity, fetchWeather }) => {
  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather();
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 w-full px-4">
      {/* Input field */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Enter city name"
        aria-label="City Name"
        className="w-full sm:w-3/4 md:w-1/2 
                   px-4 py-2 sm:py-3 md:py-4 
                   rounded-xl border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   text-gray-800 placeholder-gray-400 
                   shadow-sm transition-all duration-300
                   text-base sm:text-lg bg-white"
                   
      />

      {/* Search button */}
      <button
        onClick={handleSearch}
        aria-label="Search Weather"
        className="flex items-center justify-center gap-2 
                   bg-gradient-to-r from-blue-600 to-blue-700 
                   hover:from-blue-700 hover:to-blue-800 
                   text-white px-5 sm:px-6 md:px-8 
                   py-2 sm:py-3 md:py-4 
                   rounded-xl font-semibold 
                   shadow-md hover:shadow-lg 
                   transition-all duration-300 
                   w-full sm:w-auto"
      >
        <FaSearch className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="hidden sm:inline text-base sm:text-lg">Search</span>
      </button>
    </div>
  );
};

export default Input;
