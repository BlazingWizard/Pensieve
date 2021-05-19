import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Routes from '../../routes';
import store from '../../store';
import Menu from '../Menu';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu>
          <Routes />
        </Menu>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
