import React from 'react';
import styled from '@emotion/styled';

interface PriceProps {
  num: number;
}
const Price = ({ num }: PriceProps) => <StylePrice>{num}</StylePrice>;

export default Price;

const StylePrice = styled.div``;
