import React from 'react';
import { CurrencyType, CurrencyTypeString } from 'src/constants/currency';
import * as Styles from './styles';

const SelectCurrency = () => (
  <>
    <Styles.List>
      {Object.keys(CurrencyTypeString).map((key) => (
        <Styles.Item key={key} value={key}>
          {CurrencyTypeString[key as CurrencyType]}
        </Styles.Item>
      ))}
    </Styles.List>
  </>
);
export default SelectCurrency;
