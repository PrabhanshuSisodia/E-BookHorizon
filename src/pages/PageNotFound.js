import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LightLogo from '../assets/logo-light.png';
import DarkLogo from '../assets/logo-dark.png';
import { useTitle } from '../hooks/useTitle';

export const PageNotFound = () => {
  useTitle("Page Not Found");

  // Determine dark mode status
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) || false);

  useEffect(() => {
    // Update darkMode based on local storage
    const handleDarkModeChange = () => {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")) || false);
    };

    window.addEventListener("storage", handleDarkModeChange);
    return () => window.removeEventListener("storage", handleDarkModeChange);
  }, []);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white text-center">404, Oops!</p>
          <div className="max-w-xs">
            <img 
              src={darkMode ? DarkLogo : LightLogo} 
              alt="E-BookHorizon Page Not Found" 
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button 
              type="button" 
              className="w-64 text-2xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};