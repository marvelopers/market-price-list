import React from 'react';
import { MenuBar } from 'src/components/common/MenuBar';
import MarketListHead from 'src/components/market/MarketListHead';
import SelectCurrency from 'src/components/market/SelectCurrency';

const Layout = () => (
  <>
    <MenuBar />
    <SelectCurrency />
    <MarketListHead />
  </>
);

export default Layout;
