import { IResponse, IContext } from '../../../types';

export interface IConfigureDatabaseClusterMaintenanceWindowApiRequest {
  database_cluster_id: string;
  day: string;
  hour: string;
}

export type ConfigureDatabaseClusterMaintenanceWindowResponse = IResponse<void>;

export const configureDatabaseClusterMaintenanceWindow = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  day,
  hour,
}: IConfigureDatabaseClusterMaintenanceWindowApiRequest): Promise<Readonly<ConfigureDatabaseClusterMaintenanceWindowResponse>> => {
  const path = '/databases';
  const body = {day,hour};
  const url = `${path}/${database_cluster_id}/maintenance`;

  return httpClient.put<void>(url, body);
};
