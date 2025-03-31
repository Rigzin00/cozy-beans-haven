
import React, { useEffect, useState } from 'react';
import { Loader } from "lucide-react";

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-tan transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="animate-float mb-4">
        <img 
          src="/coffee-logo.svg" 
          alt="Coffee Shop Logo" 
          className="w-32 h-32"
          onError={(e) => {
            // Fallback if logo doesn't exist
            e.currentTarget.style.display = 'none';
          }} 
        />
      </div>
      
      <h1 className="text-3xl font-bold text-coffee-dark mb-2">Happy Coffee Shop</h1>
      <p className="text-coffee-medium mb-6">A cozy place where happiness is brewed daily</p>
      
      <Loader className="animate-spin text-coffee-dark" size={36} />
    </div>
  );
};

export default LoadingScreen;
