import styled from '@emotion/styled';
import React from 'react';
import MarketListItem from '../MarketListItem';

const MarketList = () => (
  <Wrapper>
    {[0, 1, 2, 3, 4, 5].map((key) => (
      <MarketListItem key={key} />
    ))}
  </Wrapper>
);

export default MarketList;

const Wrapper = styled.div`
  border: 1px solid pink;
  max-width: 1280px;
  margin: auto;
`;
