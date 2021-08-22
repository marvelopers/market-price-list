import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalType } from 'src/constants/modal';
import { getCoinInfo, MarketPriceActions } from 'src/features/market/marketSlice';
import { selectMarket } from 'src/selectors';
import { ModalHandler } from 'src/utils/ModalHandler';

export const useGetCoinNameClick = () => {
  const dispatch = useDispatch();
  const { isLoading, coinInfo } = useSelector(selectMarket);

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

  return { handleClickCoinName };
};

export default useGetCoinNameClick;
