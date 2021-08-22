import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectLikeCoin } from 'src/selectors/market';
import Layout from 'src/components/Layout';
import MarketList from 'src/components/market/MarketList';

const LikePage = () => {
  const LikeCoin = useSelector(selectLikeCoin);

  return (
    <Wrapper>
      <Layout />
      <MarketList coinList={LikeCoin} />
    </Wrapper>
  );
};

export default LikePage;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
`;
