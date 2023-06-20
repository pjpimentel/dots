import { IResponse, IContext, IListRequest, IListResponse } from '../../types';
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
  const url = `/databases/${database_cluster_id}/dbs`;
  const query_params = {page, per_page};

  return httpClient.get<IListDatabaseClusterDbsApiResponse>(url, {params: query_params});
};
