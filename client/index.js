import {AppContainer} from 'react-hot-loader';
import React from 'react';
import {render} from 'react-dom';
import {App} from './app.js';
import './index.scss';

const renderApp = () => {
  render(<AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('root'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./app.js', () => {
    renderApp();
  })
}