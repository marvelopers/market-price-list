import React from 'react';
import styled from '@emotion/styled';

interface PriceProps {
  currency: string;
  num: number;
}
const Price = ({ currency, num }: PriceProps) => (
  <StylePrice>
    {currency === 'krw' ? '₩' : '$'}
    {num.toLocaleString()}
  </StylePrice>
);

export default Price;

const StylePrice = styled.div`
  text-align: right;
`;
