import { IResponse, IContext } from '../../types';
import { IDatabaseClusterConnectionPool } from '../types';

export interface ICreateConnectionPoolApiResponse {
  pool: IDatabaseClusterConnectionPool;
}

export interface ICreateConnectionPoolApiRequest {
  database_cluster_id: string;
  db_name: string;
  mode: string;
  pool_name: string;
  size: number;
  user_name: string;
}

export type CreateConnectionPoolResponse = IResponse<ICreateConnectionPoolApiResponse>;

export const createConnectionPool = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  db_name,
  mode,
  pool_name,
  size,
  user_name,
}: ICreateConnectionPoolApiRequest): Promise<Readonly<CreateConnectionPoolResponse>> => {
  const path = '/databases';
  const body = {
    db: db_name,
    mode,
    name: pool_name,
    size,
    user: user_name,
  };
  const url = `${path}/${database_cluster_id}/pools`;

  return httpClient.post<ICreateConnectionPoolApiResponse>(url, body);
};
