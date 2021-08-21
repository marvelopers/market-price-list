import styled from '@emotion/styled';
import React from 'react';
import { BACKGROUND_GREY, GREY_3 } from 'src/styles/colors';

const MarketListHead = () => (
  <Wrapper>
    <div>자산</div>
  </Wrapper>
);

export default MarketListHead;

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${BACKGROUND_GREY};
  color: ${GREY_3};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  border-radius: 0.25rem;
`;
