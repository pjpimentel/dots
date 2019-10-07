import { AxiosInstance } from 'axios';

export interface IGetAccountApiResponse {
  account: IAccount;
}

export type GetAccountResponse = IResponse<IGetAccountApiResponse>;

export const getAccount = ({
  httpClient,
}: IContext<AxiosInstance>) => (): Promise<Readonly<GetAccountResponse>> => {
  const path = '/account';
  const url = `${path}`;

  return httpClient.get<IGetAccountApiResponse>(url);
};
