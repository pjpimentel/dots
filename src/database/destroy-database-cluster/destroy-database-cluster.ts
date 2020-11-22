import { IResponse, IContext } from '../../commom/types';

export interface IDestroyDatabaseClusterApiRequest {
  database_cluster_id: string;
}

export type DestroyDatabaseClusterResponse = IResponse<void>;

export const destroyDatabaseCluster = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
}: IDestroyDatabaseClusterApiRequest): Promise<Readonly<DestroyDatabaseClusterResponse>> => {
  const path = '/databases';
  const url = `${path}/${database_cluster_id}`;

  return httpClient.delete<void>(url);
};
