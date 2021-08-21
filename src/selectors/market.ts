import { createSelector } from '@reduxjs/toolkit';
import { selectCoinMarket } from 'src/selectors';

export const selectMarket = createSelector(selectCoinMarket, (state) => state.market);
export const selectMarketPrice = createSelector(selectMarket, (market) => market.marketPrice);
export const selectParams = createSelector(selectMarket, (market) => market.params);
