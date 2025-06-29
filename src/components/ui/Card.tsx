"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <motion.div
      className="card bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-dreamland-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          className="bg-dreamland-default text-white px-4 py-2 rounded hover:bg-dreamland-dark"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default Card;