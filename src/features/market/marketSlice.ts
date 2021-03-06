import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyType } from 'src/constants/currency';
import { CoinDescription, CoinInfo, CoinType, OrderType } from 'src/model/market';
import { marketApi } from 'src/utils/api/marketApi';

const DEFAULT_LIMIT = 50;
export interface Params {
  vs_currency: CurrencyType;
  order?: OrderType;
  page: number;
  per_page?: number;
  price_change_percentage?: string;
}
export interface MarketState {
  isLoading: boolean;
  params: Params;
  marketPrice: CoinType[];
  LikeCoin: CoinType[];
  coinInfo: CoinInfoModal;
  error: Error | null;
}

interface CoinInfoModal {
  coinId: string;
  localization?: CoinDescription;
  description?: CoinDescription;
}

const initParams: Params = {
  vs_currency: CurrencyType.Krw,
  order: 'market_cap_desc',
  page: 1,
  per_page: DEFAULT_LIMIT,
  price_change_percentage: '1h,24h,7d',
};

const initCoinInfo: CoinInfoModal = {
  coinId: '',
};

const initialState: MarketState = {
  isLoading: false,
  params: initParams,
  marketPrice: [],
  LikeCoin: [],
  coinInfo: initCoinInfo,
  error: null,
};

export const getMarketPrice = createAsyncThunk('market/getMarketPrice', async (params: Params) => {
  try {
    const response = await marketApi.getMarket(params);
    return response;
  } catch (error) {
    console.log('data could not be received');
    return error;
  }
});

export const getCoinInfo = createAsyncThunk('market/getCoinInfo', async (id: string) => {
  try {
    const response = await marketApi.getCoinInfo(id);
    return response;
  } catch (error) {
    console.log('data could not be received');
    return error;
  }
});

const MarketSlice = createSlice({
  name: 'Market',
  initialState,
  reducers: {
    changeCurrency: {
      reducer: (state, action: PayloadAction<CurrencyType>) => {
        state.params.vs_currency = action.payload;
        state.params.page = 1;
      },
      prepare: (currency: CurrencyType) => ({ payload: currency }),
    },
    likeCoin: {
      reducer: (state, action: PayloadAction<CoinType>) => {
        state.LikeCoin = [...state.LikeCoin, action.payload].sort((a, b) => a.market_cap_rank - b.market_cap_rank);
      },
      prepare: (coin: CoinType) => ({ payload: coin }),
    },
    unlikeCoin: {
      reducer: (state, action: PayloadAction<CoinType>) => {
        state.LikeCoin = state.LikeCoin.filter((coin) => coin.id !== action.payload.id);
      },
      prepare: (coin: CoinType) => ({ payload: coin }),
    },
    loadMore: {
      reducer: (state, action: PayloadAction<boolean>) => {
        state.coinInfo.coinId = '';
        state.params.page = action.payload ? state.params.page + 1 : state.params.page;
      },
      prepare: () => ({ payload: true }),
    },
    resetParams: {
      reducer: (state, action: PayloadAction<Params>) => {
        state.params = action.payload;
      },
      prepare: () => ({ payload: initParams }),
    },
    resetCoinInfo: {
      reducer: (state, action: PayloadAction<CoinInfoModal>) => {
        state.coinInfo = action.payload;
      },
      prepare: () => ({ payload: initCoinInfo }),
    },
  },
  extraReducers: {
    [getMarketPrice.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getMarketPrice.fulfilled.type]: (state, action: PayloadAction<CoinType[]>) => {
      state.isLoading = false;
      state.marketPrice = state.params.page === 1 ? action.payload : [...state.marketPrice, ...action.payload];
    },
    [getMarketPrice.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getCoinInfo.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCoinInfo.fulfilled.type]: (state, action: PayloadAction<CoinInfo>) => {
      state.isLoading = false;
      state.coinInfo.coinId = action.payload.id;
      state.coinInfo.localization = action.payload.localization;
      state.coinInfo.description = action.payload.description;
    },
    [getCoinInfo.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { actions: MarketPriceActions } = MarketSlice;
export default MarketSlice;
