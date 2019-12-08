import { IResponse, IContext } from '../../../types';
import { IDatabaseClusterUser } from '..';

export interface IGetDatabaseClusterUserApiResponse {
  user: IDatabaseClusterUser;
}

export interface IGetDatabaseClusterUserApiRequest {
  database_cluster_id: string;
  name: string;
}

export type GetDatabaseClusterUserResponse = IResponse<IGetDatabaseClusterUserApiResponse>;

export const getDatabaseClusterUser = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  name,
}: IGetDatabaseClusterUserApiRequest): Promise<Readonly<GetDatabaseClusterUserResponse>> => {
  const path = '/databases';
  const url = `${path}/${database_cluster_id}/users/${name}`;

  return httpClient.get<IGetDatabaseClusterUserApiResponse>(url);
};
