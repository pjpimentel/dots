import { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios';

interface ICreateContextInput {
  axios: AxiosStatic;
  endpoint?: string;
  requestTimeout?: number;
  token: string;
}

export const createContext = ({
  axios,
  requestTimeout = 1000 * 15, /// 15 seconds
  endpoint = 'https://api.digitalocean.com/v2',
  token,
}: ICreateContextInput): Readonly<IContext<AxiosInstance>> => {

  const {freeze} = Object;
  const headers = freeze({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  });
  const axiosConfig: AxiosRequestConfig = freeze({
    baseURL: endpoint,
    headers,
    timeout: requestTimeout,
  });
  const httpClient = axios.create(axiosConfig);

  return freeze({ endpoint, httpClient });
};
