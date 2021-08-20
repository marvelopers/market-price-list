import React from 'react';
import { AppRouter } from './routes';
import GlobalStyles from './styles/GlobalStyle';

const App = () => (
  <div>
    <GlobalStyles />
    <AppRouter />
  </div>
);

export default App;
