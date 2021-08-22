import React from 'react';
import styled from '@emotion/styled';
import { CoinType } from 'src/model/market';
import { CurrencyType } from 'src/constants/currency';
import useGetCoinLikeClick from 'src/hook/useGetCoinLikeClick';
import useGetCoinNameClick from 'src/hook/useGetCoinNameClick';

import { GREY_5 } from 'src/styles/colors';
import CoinName from './CoinName';
import Percentage from './Percentage';
import Price from './Price';
import StarIcon from '../icons/StarIcon';
import { Button } from '../common/Button';

interface MarketListItemProps {
  coin: CoinType;
  currency: CurrencyType;
  likeCoin: boolean;
}
const MarketListItem = ({ coin, currency, likeCoin }: MarketListItemProps) => {
  const { handleClickCoinName } = useGetCoinNameClick();
  const { selected, handleClickLike } = useGetCoinLikeClick(coin, likeCoin);

  return (
    <Wrapper>
      <IconWrapper onClick={handleClickLike}>
        <StarIcon selected={selected} />
      </IconWrapper>
      <CoinName text={coin.id} onClickCoinName={handleClickCoinName} />
      <CoinName text={coin.symbol} />
      <Price currency={currency} num={coin.current_price} />
      <Percentage num={coin.price_change_percentage_1h_in_currency} />
      <Percentage num={coin.price_change_percentage_24h_in_currency} />
      <Percentage num={coin.price_change_percentage_7d_in_currency} />
      <Price currency={currency} num={coin.total_volume} />
    </Wrapper>
  );
};

export default MarketListItem;

const Wrapper = styled.li`
  height: 40px;
  border-bottom: 1px solid ${GREY_5};
  display: grid;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.75rem;
  grid-template-columns: 0.2fr 2fr 1fr 2fr repeat(3, 1fr) 2fr;
`;

const IconWrapper = styled(Button)``;
