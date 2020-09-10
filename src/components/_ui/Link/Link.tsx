// https://gist.github.com/shprink/bf9599e1d66b9dc4d151e89c1199ccb8#gistcomment-1950886
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './Link.scss';

interface LinkProps {
  to: string;
  children: any;
  className?: string;
  type?: string;
}

const isInternalURL = (to: string) => {
  try {
    const url = new URL(to, window.location.origin);
    return url.hostname === window.location.hostname;
  } catch {
    return false;
  }
};

const Link = ({
  to,
  children,
  type = 'inline',
  className,
  ...props
}: LinkProps) => {
  const isInternalUrl = isInternalURL(to);
  className = `Link Link--type-${type} ${className ? className : ''}`;
  const link = isInternalUrl ? (
    <RouterLink to={to} className={className} {...props}>
      {children}
    </RouterLink>
  ) : (
    <a
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      className={className}
      {...props}>
      {children}
    </a>
  );
  return link;
};

export default Link;
