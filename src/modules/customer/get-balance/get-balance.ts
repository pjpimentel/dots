import { IResponse, IContext } from '../../../types';
import { IBalance } from '../';

export type GetBalanceResponse = IResponse<IBalance>;

export const getBalance = ({
  httpClient,
}: IContext) => (): Promise<Readonly<GetBalanceResponse>> => {
  const path = '/customers/my/balance';
  const url = `${path}`;

  return httpClient.get<IBalance>(url);
};
