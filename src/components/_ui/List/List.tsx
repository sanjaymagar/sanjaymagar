import React from 'react';

import { IconType } from '../Icon/IconPath';

import './List.scss';
import Icon from '../Icon';

interface ListProps {
  items: React.ReactElement[];
  icon?: keyof IconType;
  startingNumber?: number;
  hasNumber?: boolean;
  className?: string;
}

const List = ({
  items = [],
  icon,
  startingNumber = 1,
  hasNumber = false,
  className,
  ...props
}: ListProps) => {
  return (
    <ul className={`List ${className}`} {...props}>
      {items.map((item, index) => (
        <li className='List__item' key={index}>
          {hasNumber ? (
            <div className='List__item__number'>{index + startingNumber}</div>
          ) : (
            icon || (
              <Icon className='List__item__icon' name='asterisk' size='m' />
            )
          )}
          <div className='List__item__text'>{item}</div>
        </li>
      ))}
    </ul>
  );
};

export default List;
