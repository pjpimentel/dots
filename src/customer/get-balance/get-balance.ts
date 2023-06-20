import { IResponse, IContext } from '../../types';
import { IBalance } from '../';

export type GetBalanceResponse = IResponse<IBalance>;

export const getBalance = ({
  httpClient,
}: IContext) => (): Promise<Readonly<GetBalanceResponse>> => {
  const url = '/customers/my/balance';

  return httpClient.get<IBalance>(url);
};
