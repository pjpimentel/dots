import { AxiosInstance } from 'axios';

/// Context
export interface IContext {
  endpoint: string;
  httpClient: AxiosInstance;
  // requestTimeout: number;
  // responseTimeout: number;
  // token: string;
}
