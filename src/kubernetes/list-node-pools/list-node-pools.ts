import { IResponse, IContext, IListRequest, IListResponse } from '../../types';
import { IKubernetesClusterNodePool } from '..';

export interface IListNodePoolsApiResponse extends IListResponse {
  node_pools: IKubernetesClusterNodePool[];
}

export interface IListNodePoolsApiRequest extends IListRequest {
  kubernetes_cluster_id: string;
}

export type ListNodePoolsResponse = IResponse<IListNodePoolsApiResponse>;

export const listNodePools = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  page = 1,
  per_page = 25,
}: IListNodePoolsApiRequest): Promise<Readonly<ListNodePoolsResponse>> => {
  const path = '/kubernetes/clusters';
  const query_params = {page, per_page};
  const url = `${path}/${kubernetes_cluster_id}/node_pools`;

  return httpClient.get<IListNodePoolsApiResponse>(url, {params: query_params});
};
