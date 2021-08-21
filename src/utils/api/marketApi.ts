import { Params } from 'src/features/market/marketSlice';
import { BASE_URL, HTTP } from './http';

export const marketApi = {
  getMarket: async (params: Params): Promise<any> => {
    const { data } = await HTTP.get(`${BASE_URL}/coins/markets`);
    console.log('data', params);
    return data;
  },
  getCoinInfo: async (id: string): Promise<any> => {
    const { data } = await HTTP.get(`${BASE_URL}/coins/${id}`);
    console.log('data', data);
    return data;
  },
};
