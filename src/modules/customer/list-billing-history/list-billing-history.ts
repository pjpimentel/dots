import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { IBillingHistory } from '..';

export interface IListBillingHistoryApiResponse extends IListResponse {
  billing_history: IBillingHistory[];
}

export type ListBillingHistoryResponse = IResponse<IListBillingHistoryApiResponse>;

export const listBillingHistory = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListBillingHistoryResponse>> => {
  const path = '/customers/my/billing_history';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListBillingHistoryApiResponse>(url, {params: queryParams});
};
