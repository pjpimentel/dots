import { IResponse, IContext } from  '../../commom/types';
import { IAccount } from '..';

export interface IGetAccountApiResponse {
  account: IAccount;
}

export type GetAccountResponse = IResponse<IGetAccountApiResponse>;

export const getAccount = ({
  httpClient,
}: IContext) => (): Promise<Readonly<GetAccountResponse>> => {
  const path = '/account';
  const url = `${path}`;

  return httpClient.get<IGetAccountApiResponse>(url);
};
