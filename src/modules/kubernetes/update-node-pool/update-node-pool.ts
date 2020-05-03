import { IResponse, IContext } from '../../../types';
import {
  IKubernetesClusterNodePool,
  IKubernetesClusterNodePoolLabels,
} from '../';

export interface IUpdateNodePoolApiRequest {
  kubernetes_cluster_id: string;
  node_pool_id: string;
  name: string;
  count: number;
  tags?: string[];
  auto_scale?: boolean;
  min_nodes?: number;
  max_nodes?: number;
  labels?: IKubernetesClusterNodePoolLabels;
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
  };
  const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;

  return httpClient.put<IUpdateNodePoolApiResponse>(url, body);
};
