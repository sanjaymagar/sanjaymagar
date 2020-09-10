import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.scss';
import { Link } from './components';
import Wave from './components/Blog/posts/D3AndReact/Wave';
import { D3AndReact } from './components/Blog/posts/D3AndReact';

const Home = React.lazy(() => import('./components/Home'));
const Header = React.lazy(() => import('./components/Header'));
const Blog = React.lazy(() => import('./components/Blog'));
const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Sanjay Magar</title>
        <link rel='canonical' href='https://wattenberger.com' />
        <meta property='og:type' content='article' />
        <meta
          name='description'
          content='Learn how to make charts interactive using d3.js'
        />
      </Helmet>
      <Suspense fallback='Loading...'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/wave' component={Wave} />
          <Route exact path='/blog/react-and-d3' component={D3AndReact} />
          <Route>
            <div
              style={{
                height: '90vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <h2>Uh oh, there's nothing here</h2>
              <Link to='/'>Take me Home</Link>
            </div>
          </Route>
        </Switch>
        <Header />
        {/* <Footer /> */}
      </Suspense>
    </div>
  );
};

export default withRouter(App);
