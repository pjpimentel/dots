import { IResponse, IContext } from '../../types';
import {
  IKubernetesClusterNodePool,
  IKubernetesClusterNodePoolLabels,
  IKubernetesClusterNodePoolTaint,
} from '../';

export interface ICreateNodePoolApiResponse {
  node_pool: IKubernetesClusterNodePool;
}

export interface ICreateNodePoolApiRequest {
  auto_scale?: boolean;
  count: number;
  kubernetes_cluster_id: string;
  labels?: IKubernetesClusterNodePoolLabels;
  max_nodes?: number;
  min_nodes?: number;
  name: string;
  size: string;
  tags?: string[];
  taints?: IKubernetesClusterNodePoolTaint[];
}

export type CreateNodePoolResponse = IResponse<ICreateNodePoolApiResponse>;

export const createNodePool = ({
  httpClient,
}: IContext) => ({
  auto_scale,
  count,
  kubernetes_cluster_id,
  labels,
  max_nodes,
  min_nodes,
  name,
  size,
  tags,
  taints,
}: ICreateNodePoolApiRequest): Promise<Readonly<CreateNodePoolResponse>> => {
  const url = `/kubernetes/clusters/${kubernetes_cluster_id}/node_pools`;
  const body = {
    auto_scale,
    count,
    labels,
    max_nodes,
    min_nodes,
    name,
    size,
    tags,
    taints,
  };

  return httpClient.post<ICreateNodePoolApiResponse>(url, body);
};
