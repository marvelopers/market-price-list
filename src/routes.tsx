import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarketPage from './components/MarketPage';

const RoutesMenus = [
  {
    key: 'market',
    name: '오늘의 시세',
    path: '/',
    url: () => '/',
    component: MarketPage,
  },
];

export const AppRouter = () => (
  <Router>
    <Switch>
      {RoutesMenus.map((page) => (
        <Route exact path={page.path} key={page.key} component={page.component} />
      ))}
    </Switch>
  </Router>
);
