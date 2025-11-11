import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Abouts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
      offset: 100,    
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center py-10 px-4 bg-gray-800 rounded-2xl"
      data-aos="fade-up"       
      data-aos-delay="400"        
    >
      <h1
        className="text-white text-4xl md:text-5xl font-bold text-center mb-8"
        data-aos="fade-down"      
        data-aos-delay="500"
      >
        About MovieMaster Pro
      </h1>

      <p
        className="text-gray-200 text-xl md:text-2xl text-center max-w-4xl leading-relaxed"
        data-aos="zoom-in"       
        data-aos-delay="600"
      >
        MovieMaster Pro is your comprehensive movie management platform. Discover new films,
        rate your favorites, and build a personalized collection. With advanced filtering,
        detailed information, and a beautiful interface, managing your movie library has
        never been easier.
      </p>
    </div>
  );
};

export default Abouts;

