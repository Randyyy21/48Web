"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CardHover: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
};

export default CardHover;