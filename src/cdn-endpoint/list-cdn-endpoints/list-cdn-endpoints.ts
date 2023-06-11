import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { ICdnEndpoint } from '..';

export interface IListCdnEndpointsApiResponse extends IListResponse {
  endpoints: ICdnEndpoint[]
}

export type ListCdnEndpointsResponse = IResponse<IListCdnEndpointsApiResponse>;

export const listCdnEndpoints = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListCdnEndpointsResponse>> => {
  const url = '/cdn/endpoints';
  const query_params = {page, per_page};

  return httpClient.get<IListCdnEndpointsApiResponse>(url, {params: query_params});
};
