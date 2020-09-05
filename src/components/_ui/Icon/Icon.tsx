import React from 'react';
import { IconType, sizeType, iconPaths, sizes } from './IconPath';

import './Icon.scss';

interface IconProps {
  name: keyof IconType;
  size: keyof sizeType;
  direction?: string;
  className: string;
}

const Icon = ({
  name,
  size = 'm',
  direction = 'e',
  className,
  ...props
}: IconProps) => {
  const dimension = sizes[size];
  return (
    <svg
      className={`Icon Icon--direction-${direction} ${className}`}
      width={dimension}
      height={dimension}
      viewBox='0 0 25 25'
      {...props}>
      {iconPaths[name]}
    </svg>
  );
};

export default Icon;
