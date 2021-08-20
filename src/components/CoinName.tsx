import React from 'react';
import styled from '@emotion/styled';

interface CoinNameProps {
  text: string;
}
const CoinName = ({ text }: CoinNameProps) => <StyleText>{text}</StyleText>;

export default CoinName;

const StyleText = styled.div`
  font-size: 1rem;
  min-width: 300px;
`;
