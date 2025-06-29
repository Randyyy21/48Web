import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-dreamland-dark text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/images/logo.png" alt="48Dreamland" className="h-10" />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;