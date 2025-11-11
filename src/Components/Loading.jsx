import React from "react";

const Loading = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-64 sm:h-72 md:h-80 mt-4
                 text-center space-y-4 animate-fade-in"
      role="status"
      aria-busy="true"
    >
      {/* Spinner animation */}
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                   border-4 border-t-transparent border-white/70 
                   dark:border-gray-400 dark:border-t-transparent
                   rounded-full animate-spin"
      ></div>

      {/* Loading text */}
      <p className="text-white dark:text-gray-200 text-xl sm:text-2xl font-semibold animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
