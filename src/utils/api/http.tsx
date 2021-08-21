import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const { CancelToken } = axios;

export const BASE_URL = process.env.REACT_APP_KO_BASE_URL;

export const instance = axios.create({
  headers: { 'content-type': 'application/json' },
});

export const HTTP = {
  get: <ResponseType,>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> =>
    instance.get(url, options),
};
