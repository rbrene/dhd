import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './ui-core/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Colors from './styles/global/colors';
import Fonts from './styles/global/fonts';
import Styles from './styles/global/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Colors />
    <Fonts />
    <Styles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
