import React from 'react';
import MeImage from './me.png';
import { Link } from '../_ui';
import { withRouter } from 'react-router-dom';

import './Footer.scss';

const FullYear = new Date().getFullYear();

interface FooterProps {
  location: { pathname: string };
}

const Footer = ({ location: { pathname } }: FooterProps) => {
  return (
    <footer className='Footer'>
      <img src={MeImage} alt='Sanjay' className='Footer__image' />
      <div className='Footer__text'>
        <div className='Footer_name'>Sanjay Magar &copy; {FullYear}</div>
        <div className='Footer_siblings'>
          <div className='Footer__links'>
            {pathname !== '/' && (
              <Link className='Footer__link' to='/'>
                <img
                  src='https://twemoji.maxcdn.com/2/svg/1f44b.svg'
                  className='Footer__link__emoji'
                  alt='wave'
                />
                Go home
              </Link>
            )}
            <Link className='Footer__link' to='https://twitter.com/sanjmagr'>
              <img
                src='https://twemoji.maxcdn.com/2/svg/1f426.svg'
                className='Footer__link__emoji'
                alt='bird'
              />
              Ask me anything on Twitter
            </Link>
            <Link
              className='Footer__link'
              to='http://fullstack.io/fullstack-d3'>
              <img
                src='https://twemoji.maxcdn.com/2/svg/1f4d6.svg'
                className='Footer__link__emoji'
                alt='book'
              />
              Learn Data Viz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
