import axios, { AxiosInstance } from 'axios';

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
};

export default AxiosConfig;
