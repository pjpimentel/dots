import { IResponse, IContext, IListRequest, IListResponse } from '../../../types';
import { IDatabaseClusterDb } from '../types';

export interface IListDatabaseClusterDbsApiResponse extends IListResponse {
  dbs: IDatabaseClusterDb[];
}

export interface IListDatabaseClusterDbsApiRequest extends IListRequest {
  database_cluster_id: string;
}

export type ListDatabaseClusterDbsResponse = IResponse<IListDatabaseClusterDbsApiResponse>;

export const listDatabaseClusterDbs = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  database_cluster_id,
}: IListDatabaseClusterDbsApiRequest): Promise<Readonly<ListDatabaseClusterDbsResponse>> => {
  const path = '/databases';
  const query_params = {page, per_page};
  const url = `${path}/${database_cluster_id}/dbs`;

  return httpClient.get<IListDatabaseClusterDbsApiResponse>(url, {params: query_params});
};
