import { IResponse, IContext, IListRequest, IListResponse } from '../../types';
import { IDatabaseCluster } from '..';

export interface IListDatabaseClusterApiResponse extends IListResponse {
  databases: IDatabaseCluster[];
}

export type ListDatabaseClusterResponse = IResponse<IListDatabaseClusterApiResponse>;

export const listDatabaseClusters = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListDatabaseClusterResponse>> => {
  const url = '/databases';
  const query_params = {page, per_page};

  return httpClient.get<IListDatabaseClusterApiResponse>(url, {params: query_params});
};
