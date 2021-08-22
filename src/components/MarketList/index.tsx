import React, { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrencyType, selectLikeCoin } from 'src/selectors/market';
import { CoinType } from 'src/model/market';
import { MarketPriceActions } from 'src/features/market/marketSlice';
import { GREY_2, GREY_5 } from 'src/styles/colors';
import MarketListItem from '../MarketListItem';
import { Button } from '../common/Button';

interface MarketListProps {
  coinList: CoinType[];
}

const MarketList = ({ coinList }: MarketListProps) => {
  const dispatch = useDispatch();
  const currencyType = useSelector(selectCurrencyType);
  const hasMore = useMemo(() => coinList.length !== 0 && coinList.length % 50 === 0, [coinList.length]);

  const likeCoin = useSelector(selectLikeCoin);
  const likeCoinIds = useMemo(() => likeCoin.map((coin) => coin.id), [likeCoin]);

  const handleClickLoadMore = useCallback(
    () => (hasMore ? dispatch(MarketPriceActions.loadMore()) : null),
    [dispatch, hasMore],
  );

  return (
    <Wrapper>
      {coinList.map((coinPrice: CoinType) => (
        <MarketListItem
          key={coinPrice.id}
          likeCoin={likeCoinIds.includes(coinPrice.id)}
          coin={coinPrice}
          currency={currencyType}
        />
      ))}
      {hasMore && (
        <ButtonWrapper>
          <LoadMore onClick={handleClickLoadMore}>더보기</LoadMore>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default MarketList;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  border-bottom: 1px solid ${GREY_5};
  max-width: 1280px;
  height: 40px;
  margin: auto;
  text-align: center;
`;

const LoadMore = styled(Button)`
  padding: 0.6rem 3rem;
  margin: 2px auto;
  color: ${GREY_2};
  font-size: 1rem;
  font-weight: 600;
`;
