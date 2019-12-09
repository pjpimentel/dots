import { IResponse, IContext, IListRequest, IListResponse } from '../../../types';
import { IDatabaseClusterReadOnlyReplica } from '../types';

export interface IListReadOnlyReplicasApiResponse extends IListResponse {
  replicas: IDatabaseClusterReadOnlyReplica[];
}

export interface IListReadOnlyReplicasApiRequest extends IListRequest {
  database_cluster_id: string;
}

export type ListReadOnlyReplicasResponse = IResponse<IListReadOnlyReplicasApiResponse>;

export const listReadOnlyReplicas = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  database_cluster_id,
}: IListReadOnlyReplicasApiRequest): Promise<Readonly<ListReadOnlyReplicasResponse>> => {
  const path = '/databases';
  const queryParams = {page, per_page};
  const url = `${path}/${database_cluster_id}/replicas`;

  return httpClient.get<IListReadOnlyReplicasApiResponse>(url, {params: queryParams});
};
