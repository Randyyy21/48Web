"use client";

import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Parallax translateY={[-20, 20]}>{children}</Parallax>;
};

export default ParallaxWrapper;