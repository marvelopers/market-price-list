import React from 'react';
import { TabBar } from '../common/TabBar';
import MarketList from '../MarketList';
// import MarketListItem from '../MarketListItem';

// enum Menu {
//   MarKet = 'market',
//   Like = 'like',
// }

// const List = {
//   [Menu.MarKet]: '가상자산 시세목록',
//   [Menu.Like]: '북마크 목록',
// };

const ListTab = () => (
  <TabBar initIndex={0} tabList={['가상자산 시세목록', '북마크 목록']}>
    <MarketList />
    <MarketList />
  </TabBar>
);

export default ListTab;
