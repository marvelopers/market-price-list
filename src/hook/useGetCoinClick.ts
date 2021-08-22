import { useCallback, useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalType } from 'src/constants/modal';
import { getCoinInfo, MarketPriceActions } from 'src/features/market/marketSlice';
import { CoinType } from 'src/model/market';
import { selectMarket } from 'src/selectors';
import { ModalHandler } from 'src/utils/ModalHandler';

export const useGetCoinClick = (coin: CoinType, likeCoin: boolean) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(likeCoin);
  const { isLoading, coinInfo } = useSelector(selectMarket);
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

  const handleClickCoinName = useCallback(
    (coinName: string) => {
      dispatch(getCoinInfo(coinName));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!isLoading && coinInfo.coinId) {
      ModalHandler.show(ModalType.Info, {
        title: `${coinInfo.localization?.ko ? coinInfo.localization.ko : coinInfo.localization?.en}`,
        contents: `${coinInfo.description?.ko ? coinInfo.description.ko : coinInfo.description?.en}`,
        onClose: () => dispatch(MarketPriceActions.resetCoinInfo()),
      });
    }
  }, [coinInfo, dispatch, isLoading]);

  return { selected, handleClickLike, handleClickCoinName };
};

export default useGetCoinClick;
