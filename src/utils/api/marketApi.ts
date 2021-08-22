import qs from 'qs';
import { Params } from 'src/features/market/marketSlice';
import { BASE_URL, HTTP } from './http';

export const marketApi = {
  getMarket: async (params: Params): Promise<any> => {
    const queryString = qs.stringify(params);
    const { data } = await HTTP.get(`${BASE_URL}/coins/markets?${queryString}`);

    return data;
  },
  getCoinInfo: async (id: string): Promise<any> => {
    const { data } = await HTTP.get(
      `${BASE_URL}/coins/${id}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`,
    );
    return data;
  },
};
