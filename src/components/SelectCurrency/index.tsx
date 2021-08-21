import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CurrencyType, CurrencyTypeString } from 'src/constants/currency';
import { MarketPriceActions } from 'src/features/market/marketSlice';
import * as Styles from './styles';

const SelectCurrency = () => {
  const dispatch = useDispatch();
  const handleChangeCurrencyType = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(MarketPriceActions.changeCurrency(e.target.value as CurrencyType));
    },
    [dispatch],
  );

  return (
    <Styles.Wrapper>
      <Styles.List onChange={handleChangeCurrencyType}>
        {Object.keys(CurrencyTypeString).map((key) => (
          <Styles.Item key={key} value={key}>
            {CurrencyTypeString[key as CurrencyType]}
          </Styles.Item>
        ))}
      </Styles.List>
    </Styles.Wrapper>
  );
};
export default SelectCurrency;
