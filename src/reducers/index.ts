import { combineReducers } from '@reduxjs/toolkit';
import MarketSlice, { MarketState } from 'src/features/market/marketSlice';

// TODO: 모델로 이사
interface CoinMarket {
  market: MarketState;
}

export interface State {
  coinMarket: CoinMarket;
}

export const rootReducer = combineReducers({
  market: MarketSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
