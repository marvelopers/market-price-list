import React, { useState } from 'react';

import styled from '@emotion/styled';
import CoinName from '../CoinName';
import Percentage from '../Percentage';
import Price from '../Price';
import StarIcon from '../icons/StarIcon';

const MarketListItem = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <Wrapper>
      <IconWrapper onClick={handleClick}>
        <StarIcon selected={selected} />
      </IconWrapper>
      <CoinName text="conin" />
      <CoinName text="conin" />
      <Price currency="usd" num={19000} />
      <Percentage num={19} />
      <Percentage num={-19} />
      <Percentage num={19} />
      <Price currency="krw" num={19000} />
    </Wrapper>
  );
};

export default MarketListItem;

const Wrapper = styled.li`
  height: 40px;
  border: 1px solid purple;
  /* display: grid; */

  div {
    display: inline-block;
    min-width: 150px;
  }
`;

const IconWrapper = styled.button``;

// {
//   "id": "bitcoin",
//   "symbol": "btc",
//   "name": "Bitcoin",
//   "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//   "current_price": 47100,
//   "market_cap": 884046810410,
//   "market_cap_rank": 1,
//   "fully_diluted_valuation": 987928057199,
//   "total_volume": 37503668110,
//   "high_24h": 47379,
//   "low_24h": 44669,
//   "price_change_24h": 2384.61,
//   "price_change_percentage_24h": 5.33282,
//   "market_cap_change_24h": 46199585882,
//   "market_cap_change_percentage_24h": 5.51408,
//   "circulating_supply": 18791837,
//   "total_supply": 21000000,
//   "max_supply": 21000000,
//   "ath": 64805,
//   "ath_change_percentage": -27.40623,
//   "ath_date": "2021-04-14T11:54:46.763Z",
//   "atl": 67.81,
//   "atl_change_percentage": 69277.50623,
//   "atl_date": "2013-07-06T00:00:00.000Z",
//   "roi": null,
//   "last_updated": "2021-08-20T13:13:04.780Z"
// },
