import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { CoinType } from 'src/model/market';
import { ModalHandler } from 'src/utils/ModalHandler';
import { ModalType } from 'src/constants/modal';
import { CurrencyType } from 'src/constants/currency';
import { useDispatch } from 'react-redux';
import { getCoinInfo, MarketPriceActions } from 'src/features/market/marketSlice';
import CoinName from '../CoinName';
import Percentage from '../Percentage';
import Price from '../Price';
import StarIcon from '../icons/StarIcon';
import { Button } from '../common/Button';

interface MarketListItemProps {
  coin: CoinType;
  currency: CurrencyType;
}
const MarketListItem = ({ coin, currency }: MarketListItemProps) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const alertMessage = useMemo(
    () => `${coin.id} 북마크가 ${selected ? '해제' : '추가'}되었습니다.`,
    [coin.id, selected],
  );

  const handleClickLike = useCallback(() => {
    setSelected(!selected);
    dispatch(MarketPriceActions.likeCoin(coin));
    ModalHandler.show(ModalType.Alert, {
      AlertMessage: alertMessage,
    });
  }, [alertMessage, coin, dispatch, selected]);

  const handleClickCoinName = useCallback(
    (coinName: string) => {
      dispatch(getCoinInfo(coinName));
      ModalHandler.show(ModalType.Info, {
        title: `${coinName}`,
        contents: <CoinName text="coin" />,
      });
    },
    [dispatch],
  );

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
  border: 1px solid purple;
  /* display: grid; */

  div {
    display: inline-block;
    min-width: 150px;
  }
`;

const IconWrapper = styled(Button)`
  display: inline-block;
`;
