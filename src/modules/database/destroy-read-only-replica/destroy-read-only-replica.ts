import { IResponse, IContext } from '../../../types';

export interface IDestroyReadOnlyReplicaApiRequest {
  database_cluster_id: string;
  read_only_replica_name: string;
}

export type DestroyReadOnlyReplicaResponse = IResponse<void>;

export const destroyReadOnlyReplica = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  read_only_replica_name,
}: IDestroyReadOnlyReplicaApiRequest): Promise<Readonly<DestroyReadOnlyReplicaResponse>> => {
  const path = '/databases';
  const url = `${path}/${database_cluster_id}/replicas/${read_only_replica_name}`;

  return httpClient.delete<void>(url);
};
