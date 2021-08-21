import { createSelector } from '@reduxjs/toolkit';
import { selectMarket } from 'src/selectors';

export const selectMarketPrice = createSelector(selectMarket, (market) => market.marketPrice);
export const selectParams = createSelector(selectMarket, (market) => market.params);
export const selectCurrencyType = createSelector(selectParams, (params) => params.vs_currency);
