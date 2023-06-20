import { IResponse, IContext, IListRequest, IListResponse } from '../../types';
import { IDatabaseClusterUser } from '../types';

export interface IListDatabaseClusterUsersApiResponse extends IListResponse {
  users: IDatabaseClusterUser[];
}

export interface IListDatabaseClusterUsersApiRequest extends IListRequest {
  database_cluster_id: string;
}

export type ListDatabaseClusterUsersResponse = IResponse<IListDatabaseClusterUsersApiResponse>;

export const listDatabaseClusterUsers = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  database_cluster_id,
}: IListDatabaseClusterUsersApiRequest): Promise<Readonly<ListDatabaseClusterUsersResponse>> => {
  const url = `/databases/${database_cluster_id}/users`;
  const query_params = {page, per_page};

  return httpClient.get<IListDatabaseClusterUsersApiResponse>(url, {params: query_params});
};
