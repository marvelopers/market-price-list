import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CoinType } from 'src/model/market';
import { marketApi } from 'src/utils/api/marketApi';

export interface Params {
  page: number;
}
export interface MarketState {
  isLoading: boolean;
  params: Params;
  marketPrice: CoinType[];
  error: Error | null;
}

const initParams: Params = {
  page: 0,
};

const initialState: MarketState = {
  isLoading: false,
  params: initParams,
  marketPrice: [],
  error: null,
};

const getMarketPrice = createAsyncThunk('market/getMarketPrice', async () => {
  try {
    const response = await marketApi.getMarket({ page: 0 });
    return response.tags;
  } catch (error) {
    console.log('Tag list data could not be received');
    return error;
  }
});

console.log(getMarketPrice);

const MarketSlice = createSlice({
  name: 'Market',
  initialState,
  reducers: {},
});

export const { actions: MarketPriceActions } = MarketSlice;
export default MarketSlice;
