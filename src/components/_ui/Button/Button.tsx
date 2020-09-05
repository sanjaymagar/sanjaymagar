import React from 'react';

import './Button.scss';

interface ButtonProps {
  children: string;
  styleType?: string;
  className?: string;
}

const Button = ({ children, styleType, className }: ButtonProps) => {
  return (
    <button className={`Button Button--style-${styleType} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
