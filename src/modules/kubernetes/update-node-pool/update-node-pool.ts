import { IResponse, IContext } from '../../../types';
import { IKubernetesClusterNodePool } from '..';

export interface IUpdateNodePoolApiRequest {
  kubernetes_cluster_id: string;
  node_pool_id: string;
  name: string;
  count: number;
  tags?: string[];
  auto_scale?: boolean;
  min_nodes?: number;
  max_nodes?: number;
}
export interface IUpdateNodePoolApiResponse {
  node_pool: IKubernetesClusterNodePool;
}

export type UpdateNodePoolResponse = IResponse<IUpdateNodePoolApiResponse>;

export const updateNodePool = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  node_pool_id,
  name,
  count,
  tags,
  auto_scale,
  min_nodes,
  max_nodes,
}: IUpdateNodePoolApiRequest): Promise<Readonly<UpdateNodePoolResponse>> => {
  const path = '/kubernetes/clusters';
  const body = {
    name,
    count,
    tags,
    auto_scale,
    min_nodes,
    max_nodes,
  };
  const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;

  return httpClient.put<IUpdateNodePoolApiResponse>(url, body);
};
