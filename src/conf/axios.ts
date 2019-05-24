import axios, { AxiosInstance } from 'axios';

import appSettings from './app-settings';

const axiosInstance: AxiosInstance = axios.create({
  validateStatus: status => status >= 200 && status < 400,
  timeout: 10000,
});

const axiosInstanceMock: AxiosInstance = axios.create({
  headers: {
    MOCK: true,
  },
  validateStatus: status => status >= 200 && status < 400,
});

const AxiosConfig = {
  setAuthToken: (token: string) =>
    (axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`),
  setDefaultHeaders: (headers: any) => (axiosInstance.defaults.headers.common = { ...headers }),
  getAxiosInstance: () => axiosInstance,
  getAxiosInstanceMock: () => axiosInstanceMock,
  init() {
    axiosInstance.defaults.baseURL = appSettings.SERVICE_BASE_URL;
    axiosInstanceMock.defaults.baseURL = appSettings.MOCK_URL;
  },
};

export default AxiosConfig;
