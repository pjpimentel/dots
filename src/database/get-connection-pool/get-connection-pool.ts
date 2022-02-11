import { IResponse, IContext } from '../../types';
import { IDatabaseClusterConnectionPool } from '..';

export interface IGetConnectionPoolApiResponse {
  pool: IDatabaseClusterConnectionPool;
}

export interface IGetConnectionPoolApiRequest {
  database_cluster_id: string;
  pool_name: string;
}

export type GetConnectionPoolResponse = IResponse<IGetConnectionPoolApiResponse>;

export const getConnectionPool = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  pool_name,
}: IGetConnectionPoolApiRequest): Promise<Readonly<GetConnectionPoolResponse>> => {
  const path = '/databases';
  const url = `${path}/${database_cluster_id}/pools/${pool_name}`;

  return httpClient.get<IGetConnectionPoolApiResponse>(url);
};
