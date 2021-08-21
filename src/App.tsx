import React from 'react';
import { ModalController } from './components/modals/ModalController';
import { AppRouter } from './routes';
import GlobalStyles from './styles/GlobalStyle';

const App = () => (
  <div>
    <GlobalStyles />
    <ModalController />
    <AppRouter />
  </div>
);

export default App;
