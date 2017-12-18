// @flow
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from './home/home';
import { About } from './about/about';

export const App = () => {
  return <BrowserRouter>
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>;
}
