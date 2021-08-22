import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalType } from 'src/constants/modal';
import { MarketPriceActions } from 'src/features/market/marketSlice';
import { CoinType } from 'src/model/market';
import { ModalHandler } from 'src/utils/ModalHandler';

export const useGetCoinLikeClick = (coin: CoinType, likeCoin: boolean) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(likeCoin);

  const alertMessage = useMemo(
    () => `${coin.id} 북마크가 ${selected ? '해제' : '추가'}되었습니다.`,
    [coin.id, selected],
  );

  const handleClickLike = useCallback(() => {
    setSelected(!selected);
    dispatch(likeCoin ? MarketPriceActions.unlikeCoin(coin) : MarketPriceActions.likeCoin(coin));
    ModalHandler.show(ModalType.Alert, {
      AlertMessage: alertMessage,
    });
  }, [alertMessage, coin, dispatch, likeCoin, selected]);

  return { selected, handleClickLike };
};

export default useGetCoinLikeClick;
