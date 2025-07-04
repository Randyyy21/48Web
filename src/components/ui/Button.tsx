import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-dreamland-default text-white px-4 py-2 rounded hover:bg-dreamland-dark ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;