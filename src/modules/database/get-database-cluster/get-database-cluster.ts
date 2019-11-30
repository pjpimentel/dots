import { IResponse, IContext } from '../../../types';
import { IDatabaseCluster } from '..';

export interface IGetDatabaseClusterApiResponse {
  database: IDatabaseCluster;
}

export interface IGetDatabaseClusterApiRequest {
  database_cluster_id: string;
}

export type GetDatabaseClusterResponse = IResponse<IGetDatabaseClusterApiResponse>;

export const getDatabaseCluster = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
}: IGetDatabaseClusterApiRequest): Promise<Readonly<GetDatabaseClusterResponse>> => {
  const path = '/databases';
  const url = `${path}/${database_cluster_id}`;

  return httpClient.get<IGetDatabaseClusterApiResponse>(url);
};
