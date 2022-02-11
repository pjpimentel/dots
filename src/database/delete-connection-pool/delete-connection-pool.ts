import { IResponse, IContext } from '../../types';

export interface IDeleteConnectionPoolApiRequest {
  database_cluster_id: string;
  pool_name: string;
}

export type DeleteConnectionPoolResponse = IResponse<void>;

export const deleteConnectionPool = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  pool_name,
}: IDeleteConnectionPoolApiRequest): Promise<Readonly<DeleteConnectionPoolResponse>> => {
  const path = '/databases';
  const url = `${path}/${database_cluster_id}/pools/${pool_name}`;

  return httpClient.delete<void>(url);
};
