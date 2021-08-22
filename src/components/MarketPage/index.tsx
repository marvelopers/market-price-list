import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { getMarketPrice } from 'src/features/market/marketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectMarket } from 'src/selectors';
import Layout from '../Layout';
import MarketList from '../MarketList';
import Loader from '../common/Loader';

const MarketPage = () => {
  const dispatch = useDispatch();
  const { isLoading, marketPrice, params } = useSelector(selectMarket);

  useEffect(() => {
    dispatch(getMarketPrice(params));
  }, [dispatch, params]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Layout />
      <MarketList coinList={marketPrice} />
    </Wrapper>
  );
};

export default MarketPage;

const Wrapper = styled.div`
  border: 1px solid pink;
  max-width: 1280px;
  margin: auto;
`;
