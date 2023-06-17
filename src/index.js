import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import SnackbarRootProvider from './SnackbarRootProvider';
import { Provider } from 'react-redux';
import store from "./redux/store";
import ThemeProviderContainer from './ThemeProviderContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <ThemeProviderContainer>
      <SnackbarRootProvider>
        <App/>
      </SnackbarRootProvider>
    </ThemeProviderContainer>
  </Provider>
);

