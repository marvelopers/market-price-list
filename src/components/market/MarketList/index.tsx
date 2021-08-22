import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrencyType, selectLikeCoin } from 'src/selectors/market';
import { CoinType } from 'src/model/market';
import useGetLoadMore from 'src/hook/useGetLoadMore';
import MarketListItem from '../MarketListItem';
import * as Styles from './styles';

interface MarketListProps {
  coinList: CoinType[];
}

const MarketList = ({ coinList }: MarketListProps) => {
  const currencyType = useSelector(selectCurrencyType);
  const likeCoin = useSelector(selectLikeCoin);
  const likeCoinIds = useMemo(() => likeCoin.map((coin) => coin.id), [likeCoin]);
  const hasMore = useMemo(() => coinList.length !== 0 && coinList.length % 50 === 0, [coinList.length]);
  const handleClickLoadMore = useGetLoadMore(hasMore);

  return (
    <Styles.Wrapper>
      {coinList.map((coinPrice: CoinType) => (
        <MarketListItem
          key={coinPrice.id}
          likeCoin={likeCoinIds.includes(coinPrice.id)}
          coin={coinPrice}
          currency={currencyType}
        />
      ))}
      {hasMore && (
        <Styles.ButtonWrapper>
          <Styles.LoadMore onClick={handleClickLoadMore}>더보기</Styles.LoadMore>
        </Styles.ButtonWrapper>
      )}
    </Styles.Wrapper>
  );
};

export default MarketList;
