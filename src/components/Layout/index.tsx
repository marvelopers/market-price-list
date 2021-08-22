import React from 'react';
import { MenuBar } from '../common/MenuBar';
import MarketListHead from '../market/MarketListHead';
import SelectCurrency from '../market/SelectCurrency';

const Layout = () => (
  <>
    <MenuBar />
    <SelectCurrency />
    <MarketListHead />
  </>
);

export default Layout;
