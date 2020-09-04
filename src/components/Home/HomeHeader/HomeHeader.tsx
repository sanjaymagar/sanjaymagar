import React from 'react';
import { Link } from '../../_ui';

import './HomeHeader.scss';

const HomeHeader = () => {
  return (
    <div className='HomeHeader'>
      <div className='HomeHeader__content'>
        <div className='HomeHeader__content__text'>
          <div className='HomeHeader__content__text__top'>Hi, I'm</div>
          <h1 className='HomeHeader__content__text__title'>Sanjay Magar</h1>
          <div className='HomeHeader__content__text__description'>
            I write code, think about data, and create digital experiences.
            <br />
            Currently Software Engineer at{' '}
            <Link to='' href='https://zakipointhealth.com/' target='_blank'>
              Zakipoint Health
            </Link>
            .
            <br />
            <br />
            Listen to <Link to='/podcasts'>podcasts I've been on</Link>, or read
            <Link to='/blog'> articles I've written.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
