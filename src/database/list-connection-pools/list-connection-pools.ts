import { IResponse, IContext, IListRequest, IListResponse } from '../../types';
import { IDatabaseClusterConnectionPool } from '../types';

export interface IListdConnectionPoolsApiResponse extends IListResponse {
  pools: IDatabaseClusterConnectionPool[];
}

export interface IListdConnectionPoolsApiRequest extends IListRequest {
  database_cluster_id: string;
}

export type ListdConnectionPoolsResponse = IResponse<IListdConnectionPoolsApiResponse>;

export const listConnectionPools = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  database_cluster_id,
}: IListdConnectionPoolsApiRequest): Promise<Readonly<ListdConnectionPoolsResponse>> => {
  const url = `/databases/${database_cluster_id}/pools`;
  const query_params = {page, per_page};

  return httpClient.get<IListdConnectionPoolsApiResponse>(url, {params: query_params});
};
