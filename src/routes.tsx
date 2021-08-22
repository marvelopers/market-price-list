import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LikePage from './components/LikePage';
import MarketPage from './components/MarketPage';

const RoutesMenus = [
  {
    key: 'market',
    name: '오늘의 시세',
    path: '/market',
    url: () => '/market',
    component: MarketPage,
  },
  {
    key: 'like',
    name: '오늘의 시세',
    path: '/like',
    url: () => '/like',
    component: LikePage,
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
