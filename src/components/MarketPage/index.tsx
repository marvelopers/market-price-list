import React from 'react';
import styled from '@emotion/styled';
import ListTab from '../ListTab';

const PricePage = () => (
  <Wrapper>
    <ListTab />
  </Wrapper>
);

export default PricePage;

const Wrapper = styled.div`
  border: 1px solid pink;
  max-width: 1280px;
  margin: auto;
`;
