import React from 'react';
import styled from '@emotion/styled';
import MarketListItem from '../MarketListItem';
import SelectCurrency from '../SelectCurrency';

const PricePage = () => (
  <Wrapper>
    <SelectCurrency />
    <MarketListItem />
  </Wrapper>
);

export default PricePage;

const Wrapper = styled.div`
  border: 1px solid pink;
`;
