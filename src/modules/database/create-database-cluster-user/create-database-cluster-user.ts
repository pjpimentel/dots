import { IResponse, IContext } from '../../../types';
import { IDatabaseClusterUser } from '../types';

export interface ICreateDatabaseClusterUserApiResponse {
  user: IDatabaseClusterUser;
}

export interface ICreateDatabaseClusterUserApiRequest {
  database_cluster_id: string;
  user_name: string;
}

export type CreateDatabaseClusterUserResponse = IResponse<ICreateDatabaseClusterUserApiResponse>;

export const createDatabaseClusterUser = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  user_name,
}: ICreateDatabaseClusterUserApiRequest): Promise<Readonly<CreateDatabaseClusterUserResponse>> => {
  const path = '/databases';
  const body = {name: user_name};
  const url = `${path}/${database_cluster_id}/users`;

  return httpClient.post<ICreateDatabaseClusterUserApiResponse>(url, body);
};
