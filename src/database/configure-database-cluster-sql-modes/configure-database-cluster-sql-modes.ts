import { IResponse, IContext } from '../../types';

export interface IConfigureDatabaseClusterSqlModeApiRequest {
  database_cluster_id: string;
  sql_mode: string;
}

export type ConfigureDatabaseClusterSqlModeResponse = IResponse<void>;

export const configureDatabaseClusterSqlModes = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  sql_mode,
}: IConfigureDatabaseClusterSqlModeApiRequest): Promise<Readonly<ConfigureDatabaseClusterSqlModeResponse>> => {
  const path = '/databases';
  const body = {sql_mode};
  const url = `${path}/${database_cluster_id}/sql_mode`;

  return httpClient.put<void>(url, body);
};
