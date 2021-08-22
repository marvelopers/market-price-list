import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/page/HomePage';
import LikePage from './components/page/LikePage';
import MarketPage from './components/page/MarketPage';
import { MenuType } from './constants/menu';

const RoutesMenus = [
  {
    key: `home`,
    name: 'home',
    path: `/`,
    url: () => `/`,
    component: HomePage,
  },
  {
    key: `${MenuType.MarKet}`,
    name: '오늘의 시세',
    path: `/${MenuType.MarKet}`,
    url: () => `/${MenuType.MarKet}`,
    component: MarketPage,
  },
  {
    key: `${MenuType.Like}`,
    name: '오늘의 시세',
    path: `/${MenuType.Like}`,
    url: () => `/${MenuType.Like}`,
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
