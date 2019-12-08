import { IResponse, IContext } from '../../../types';

export interface IGetDatabaseClusterSqlModeApiResponse {
  sql_mode: string;
}

export interface IGetDatabaseClusterSqlModeApiRequest {
  database_cluster_id: string;
}

export type GetDatabaseClusterSqlModeResponse = IResponse<IGetDatabaseClusterSqlModeApiResponse>;

export const getDatabaseClusterSqlMode = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
}: IGetDatabaseClusterSqlModeApiRequest): Promise<Readonly<GetDatabaseClusterSqlModeResponse>> => {
  const path = '/databases';
  const url = `${path}/${database_cluster_id}/sql_mode`;

  return httpClient.get<IGetDatabaseClusterSqlModeApiResponse>(url);
};
