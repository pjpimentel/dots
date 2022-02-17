import { IResponse, IContext } from '../../types';
import {
  IKubernetesClusterNodePool,
  IKubernetesClusterNodePoolLabels,
  IKubernetesClusterNodePoolTaint,
} from '../';

export interface IUpdateNodePoolApiRequest {
  auto_scale?: boolean;
  count: number;
  kubernetes_cluster_id: string;
  labels?: IKubernetesClusterNodePoolLabels;
  max_nodes?: number;
  min_nodes?: number;
  name: string;
  node_pool_id: string;
  tags?: string[];
  taints?: IKubernetesClusterNodePoolTaint[];
}
export interface IUpdateNodePoolApiResponse {
  node_pool: IKubernetesClusterNodePool;
}

export type UpdateNodePoolResponse = IResponse<IUpdateNodePoolApiResponse>;

export const updateNodePool = ({
  httpClient,
}: IContext) => ({
  auto_scale,
  count,
  kubernetes_cluster_id,
  labels,
  max_nodes,
  min_nodes,
  name,
  node_pool_id,
  tags,
  taints,
}: IUpdateNodePoolApiRequest): Promise<Readonly<UpdateNodePoolResponse>> => {
  const path = '/kubernetes/clusters';
  const body = {
    auto_scale,
    count,
    labels,
    max_nodes,
    min_nodes,
    name,
    tags,
    taints,
  };
  const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;

  return httpClient.put<IUpdateNodePoolApiResponse>(url, body);
};
