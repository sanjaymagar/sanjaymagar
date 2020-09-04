import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';

const Home = React.lazy(() => import('./components/Home'));

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
        </Switch>
        <Header />
      </Suspense>
    </div>
  );
};

export default withRouter(App);
