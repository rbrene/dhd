import React from 'react';
import { Theme } from '../components/context/Theme';
import Routes from '../routes/Routes';


const App = () => {
  return (
    <Theme>
      <Routes />
    </Theme>
  );
}

export default App;
