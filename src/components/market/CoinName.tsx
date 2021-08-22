import React from 'react';
import styled from '@emotion/styled';

interface CoinNameProps {
  text: string;
  onClickCoinName?: (coin: string) => void;
}

const CoinName = ({ text, onClickCoinName }: CoinNameProps) => (
  <StyleText onClick={() => onClickCoinName?.(text)}>{text}</StyleText>
);

export default CoinName;

const StyleText = styled.div`
  font-size: 1rem;
`;
