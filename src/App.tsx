import React from 'react';

import { AppContexts } from './AppContexts';
import { Navigation } from './Navigation';
import { Routing } from './Routing';

function App() {
  return (
    <AppContexts>
      <Navigation />
      <Routing />
    </AppContexts>
  );
}

export default App;
