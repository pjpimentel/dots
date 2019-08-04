import { AxiosInstance } from 'axios';

export interface IGetAccountApiResponse {
  account: IAccount;
}

type GetAccountResponse = IResponse<IGetAccountApiResponse>;

export const getAccount = ({
  endpoint,
  httpClient,
}: IContext<AxiosInstance>) => async (): Promise<GetAccountResponse> => {
  const path = '/account';
  const url = `${endpoint}${path}`;

  return httpClient.get<IGetAccountApiResponse>(url);
};
