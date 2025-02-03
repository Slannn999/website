import Image1 from './assets/Image1.jpeg';
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${Image1})` }}
    >
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

      {/* Centered content */}
      <div className="relative text-center">
        <h1 className="text-5xl font-bold mb-4">DreamRun</h1>
        <p className="text-xl mb-4">Run for a dream. Run for a cause. Run for a change.</p>
        {/* Register button */}    
        <button className="bg-green-600 rounded-lg hover:bg-green-700 transition delay-75 font-semibold px-3 py-2">
          Register
        </button> 
      </div>
    </div>
  );
};

export default Hero;

