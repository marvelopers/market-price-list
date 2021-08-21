import { combineReducers } from '@reduxjs/toolkit';
import MarketSlice, { MarketState } from 'src/features/market/marketSlice';

export interface State {
  market: MarketState;
}

export const rootReducer = combineReducers({
  market: MarketSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
