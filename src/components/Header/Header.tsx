import React from 'react';
import { Link } from '../_ui';
import './Header.scss';

const Header = () => {
  return (
    <div className='Header'>
      <Link to='/' className='Header__link'>
        <h6>SANJAY</h6>
        <div className='Header__link__title'>Sanjay Magar</div>
      </Link>
      <Link className='Header__link Header__link--blog' to='/blog'>
        Thoughts
      </Link>
    </div>
  );
};

export default Header;
