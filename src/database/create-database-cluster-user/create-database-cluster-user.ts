import { IResponse, IContext } from '../../types';
import {
  IDatabaseClusterUser,
  IDatabaseClusterMysqlUserSettings,
} from '../types';

export interface ICreateDatabaseClusterUserApiResponse {
  user: IDatabaseClusterUser;
}

export interface ICreateDatabaseClusterUserApiRequest {
  database_cluster_id: string;
  user_name: string;
  mysql_settings?: IDatabaseClusterMysqlUserSettings
}

export type CreateDatabaseClusterUserResponse = IResponse<ICreateDatabaseClusterUserApiResponse>;

export const createDatabaseClusterUser = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  mysql_settings,
  user_name,
}: ICreateDatabaseClusterUserApiRequest): Promise<Readonly<CreateDatabaseClusterUserResponse>> => {
  const url = `/databases/${database_cluster_id}/users`;
  const body = {name: user_name, mysql_settings};

  return httpClient.post<ICreateDatabaseClusterUserApiResponse>(url, body);
};
