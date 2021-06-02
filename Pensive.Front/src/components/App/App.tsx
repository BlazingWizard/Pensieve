import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Menu from '../Menu';
import store from '../../store';
import Routes from '../../routes';

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
