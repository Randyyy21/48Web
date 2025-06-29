"use client";

import React from 'react';
import ParallaxWrapper from '@/styles/animations/ParallaxWrapper';

const Hero: React.FC = () => {
  return (
    <ParallaxWrapper>
      <div className="hero bg-dreamland-light text-center py-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <h1 className="text-5xl font-bold text-dreamland-dark animate-fade-in">Welcome to 48Dreamland</h1>
        <p className="text-xl mt-4 text-gray-700">Your gateway to the world of JKT48</p>
        <button className="mt-6 bg-dreamland-default text-white px-6 py-3 rounded-full hover:bg-dreamland-dark">
          Explore Now
        </button>
      </div>
    </ParallaxWrapper>
  );
};

export default Hero;