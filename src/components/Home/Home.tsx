import React from 'react';
import HomeHeader from './HomeHeader';
import Portfolio from '../Portfolio';

const Home = () => {
  return (
    <div className='Home'>
      <HomeHeader />
      <div className='Home__content'>
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
