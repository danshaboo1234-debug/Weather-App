import React from "react";

const Error = ({ message }) => {
  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-10 mt-6">
      <div
        className="bg-red-500/10 dark:bg-red-900/20 border border-red-400/50 text-red-600 
                   dark:text-red-300 backdrop-blur-md rounded-2xl shadow-lg 
                   px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 
                   text-center max-w-lg w-full 
                   transition-all duration-500 ease-in-out
                   animate-fade-in"
      >
        <p className="text-base sm:text-lg md:text-2xl font-semibold capitalize tracking-wide">
          ⚠️ {message}
        </p>
      </div>
    </div>
  );
};

export default Error;
