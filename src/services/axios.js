import axios from 'axios';
import {ApiPaths, AUTH} from './api-constants';

const {BASE_URL} = ApiPaths;

export const BaseAxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Cache-Control': 'no-cache',
    Authorization: AUTH.API_KEY,
  },
});

export const setGlobalHeader = (token) => {
  // eslint-disable-next-line no-use-before-define
  BaseAxiosInstance.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
    token,
  };
};

BaseAxiosInstance.interceptors.request.use((config) => {
  config.params = config.params || {};
  // config.params['apiKey'] = AUTH.API_KEY;
  return config;
});
