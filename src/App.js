import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import Home from './pages/home';

import Wrapper from './components/wrapper';

// Images
import pride from './images/pride.jpg';
import hackweek from './images/hack-week.jpg';
import tweets from './images/tweets.jpg';
import blackbirds from './images/blackbirds.jpg';
import oneteam from './images/oneteam.jpg';
import fantasticBeasts from './images/fantastic-beasts.jpg';
import twitterTogether from './images/twitter-together.jpg';
import aw from './images/aw.jpg';
import up from './images/up.jpg';
import mini from './images/mini.jpg';
import bcaa from './images/bcaa.jpg';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pride">
            <h1>Pride page content goes here!</h1>
          </Route>
          <Route path="/">
              <Home />
              <Link to="/pride">
                <LazyLoadComponent>
                  <Wrapper image={pride} color="black">
                    <h1>Pride</h1>
                  </Wrapper>
                </LazyLoadComponent>
              </Link>
              <LazyLoadComponent>
                <Wrapper image={hackweek} color="white">
                  <h1>Hack Week</h1>
                </Wrapper>
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Wrapper image={tweets} />
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Wrapper image={blackbirds}>
                  <h1>Blackbirds</h1>
                </Wrapper>
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Wrapper image={twitterTogether}>
                  <h1>Twitter Together</h1>
                </Wrapper>
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Wrapper image={oneteam}>
                  <h1>OneTeam</h1>
                </Wrapper>
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Wrapper image={mini}>
                  <h1>Mini</h1>
                </Wrapper>
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Wrapper image={fantasticBeasts}>
                  <h1>Fantastic Beasts</h1>
                </Wrapper>
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Wrapper image={bcaa}>
                  <h1>BCAA</h1>
                </Wrapper>
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Wrapper image={aw}>
                  <h1>A&amp;W</h1>
                </Wrapper>
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Wrapper image={up}>
                  <h1>UP</h1>
                </Wrapper>
              </LazyLoadComponent>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
