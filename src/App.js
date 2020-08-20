import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { FullPage, Slide } from 'react-full-page';

import './App.css';
import Home from './pages/home';

import Wrapper from './components/wrapper';

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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pride">
            <h1>test</h1>
          </Route>
          <Route path="/">
          <FullPage>
            <Slide>
              <Home />
            </Slide>
            <Slide>
              <Link to="/pride">
                <Wrapper image={pride} color="black">
                  <h1>Pride</h1>
                </Wrapper>
              </Link>
            </Slide>
            <Slide>
              <Wrapper image={hackweek} color="white">
                <h1>Hack Week</h1>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper image={tweets} />
            </Slide>
            <Slide>
              <Wrapper image={blackbirds}>
                <h1>Blackbirds</h1>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper image={twitterTogether}>
                <h1>Twitter Together</h1>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper image={oneteam}>
                <h1>OneTeam</h1>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper image={mini}>
                <h1>Mini</h1>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper image={fantasticBeasts}>
                <h1>Fantastic Beasts</h1>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper image={bcaa}>
                <h1>BCAA</h1>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper image={aw}>
                <h1>A&amp;W</h1>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper image={up}>
                <h1>UP</h1>
              </Wrapper>
            </Slide>
          </FullPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
