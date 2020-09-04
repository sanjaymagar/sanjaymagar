import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: any;
  href?: string;
  target?: string;
  className?: string;
}

const Link = ({ to, children, ...props }: LinkProps) => {
  return (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
