import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { ModalType } from 'src/constants/modal';
import { ModalHandler } from 'src/utils/ModalHandler';
import MarketListItem from '../MarketListItem';
import CoinName from '../CoinName';

const MarketList = () => {
  const handleClickCoinName = (coinName: string) => {
    ModalHandler.show(ModalType.Info, {
      title: `${coinName}`,
      contents: <CoinName text="coin" />,
    });
  };
  useEffect(() => handleClickCoinName('coin'), []);
  return (
    <Wrapper>
      <button type="button" onClick={() => handleClickCoinName('coin')}>
        ************
      </button>
      {[0, 1, 2, 3, 4, 5].map((key) => (
        <MarketListItem key={key} />
      ))}
    </Wrapper>
  );
};

export default MarketList;

const Wrapper = styled.div`
  border: 1px solid pink;
  max-width: 1280px;
  margin: auto;
`;
