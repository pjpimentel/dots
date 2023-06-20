import { IResponse, IContext } from '../../types';
import { IDatabaseClusterUser } from '..';

export interface IGetDatabaseClusterUserApiResponse {
  user: IDatabaseClusterUser;
}

export interface IGetDatabaseClusterUserApiRequest {
  database_cluster_id: string;
  user_name: string;
}

export type GetDatabaseClusterUserResponse = IResponse<IGetDatabaseClusterUserApiResponse>;

export const getDatabaseClusterUser = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  user_name,
}: IGetDatabaseClusterUserApiRequest): Promise<Readonly<GetDatabaseClusterUserResponse>> => {
  const url = `/databases/${database_cluster_id}/users/${user_name}`;

  return httpClient.get<IGetDatabaseClusterUserApiResponse>(url);
};
