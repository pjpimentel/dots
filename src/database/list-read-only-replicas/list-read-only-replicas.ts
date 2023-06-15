import { IResponse, IContext, IListRequest, IListResponse } from '../../types';
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
  const url = `/databases/${database_cluster_id}/replicas`;
  const query_params = {page, per_page};

  return httpClient.get<IListReadOnlyReplicasApiResponse>(url, {params: query_params});
};
