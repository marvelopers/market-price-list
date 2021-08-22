import React from 'react';
import { MenuBar } from '../common/MenuBar';
import MarketListHead from '../MarketListHead';
import SelectCurrency from '../SelectCurrency';

const Layout = () => (
  <>
    <MenuBar />
    <SelectCurrency />
    <MarketListHead />
  </>
);

export default Layout;
