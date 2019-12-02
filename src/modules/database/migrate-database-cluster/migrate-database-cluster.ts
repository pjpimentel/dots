import { IResponse, IContext } from '../../../types';

export interface IMigrateDatabaseClusterApiRequest {
  database_cluster_id: string;
  region: string;
}

export type MigrateDatabaseClusterResponse = IResponse<void>;

export const migrateDatabaseCluster = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  region,
}: IMigrateDatabaseClusterApiRequest): Promise<Readonly<MigrateDatabaseClusterResponse>> => {
  const path = '/databases';
  const body = {region};
  const url = `${path}/${database_cluster_id}/migrate`;

  return httpClient.put<void>(url, body);
};
