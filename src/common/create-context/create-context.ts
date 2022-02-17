import { AxiosRequestConfig, AxiosStatic } from 'axios';
import { IContext } from '../../types';

export interface ICreateContextInput {
  axios: AxiosStatic;
  endpoint?: string;
  requestTimeoutInMs?: number;
  token: string;
}

export const createContext = ({
  axios,
  requestTimeoutInMs = 1000 * 15, /// 15 seconds
  endpoint = 'https://api.digitalocean.com/v2',
  token,
}: ICreateContextInput): Readonly<IContext> => {
  const headers = Object.freeze({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  });
  const axiosConfig: AxiosRequestConfig = Object.freeze({
    baseURL: endpoint,
    headers,
    timeout: requestTimeoutInMs,
  });
  const httpClient = axios.create(axiosConfig);

  return Object.freeze({ endpoint, httpClient });
};
