import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="https://i.ibb.co/twkJ9h2k/1000097323-removebg-preview.png" 
      alt="Logo Solução Engenharia" 
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;