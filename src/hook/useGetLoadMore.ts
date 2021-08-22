import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MarketPriceActions } from 'src/features/market/marketSlice';

const useGetLoadMore = (hasMore: boolean) => {
  const dispatch = useDispatch();

  const handleClickLoadMore = useCallback(
    () => (hasMore ? dispatch(MarketPriceActions.loadMore()) : null),
    [dispatch, hasMore],
  );
  return handleClickLoadMore;
};

export default useGetLoadMore;
