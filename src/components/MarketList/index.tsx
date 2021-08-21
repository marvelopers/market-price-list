import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrencyType, selectMarketPrice, selectParams } from 'src/selectors/market';
import { getMarketPrice } from 'src/features/market/marketSlice';
import { CoinType } from 'src/model/market';
import MarketListItem from '../MarketListItem';
import MarketListHead from '../MarketListHead';

const MarketList = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);
  const MarketPrice = useSelector(selectMarketPrice);
  const currencyType = useSelector(selectCurrencyType);

  useEffect(() => {
    dispatch(getMarketPrice(params));
  }, [dispatch, params]);

  return (
    <Wrapper>
      <MarketListHead />
      {MarketPrice.map((coinPrice: CoinType) => (
        <MarketListItem key={coinPrice.id} coin={coinPrice} currency={currencyType} />
      ))}
    </Wrapper>
  );
};

export default MarketList;

const Wrapper = styled.div`
  border: 1px solid pink;
  max-width: 1280px;
  margin: auto;
`;
