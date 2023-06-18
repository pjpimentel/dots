import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IVpc } from '..';

export interface IListVpcsApiResponse extends IListResponse {
  vpcs: IVpc[];
}

export type ListVpcsResponse = IResponse<IListVpcsApiResponse>;

export const listVpcs = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListVpcsResponse>> => {
  const url = `/vpcs`;
  const query_params = {page, per_page};

  return httpClient.get<IListVpcsApiResponse>(url, {params: query_params});
};
