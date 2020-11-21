import { IResponse, IContext, IListRequest, IListResponse } from '../../../types';
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
  const path = '/databases';
  const query_params = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListDatabaseClusterApiResponse>(url, {params: query_params});
};
