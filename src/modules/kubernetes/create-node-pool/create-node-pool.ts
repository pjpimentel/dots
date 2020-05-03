import { IResponse, IContext } from '../../../types';
import {
  IKubernetesClusterNodePool,
  IKubernetesClusterNodePoolLabels,
} from '../';

export interface ICreateNodePoolApiResponse {
  node_pool: IKubernetesClusterNodePool;
}

export interface ICreateNodePoolApiRequest {
  auto_scale?: boolean;
  count: number;
  kubernetes_cluster_id: string;
  max_nodes?: number;
  min_nodes?: number;
  name: string;
  size: string;
  tags?: string[];
  labels?: IKubernetesClusterNodePoolLabels;
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
}: ICreateNodePoolApiRequest): Promise<Readonly<CreateNodePoolResponse>> => {
  const path = '/kubernetes/clusters';
  const body = {
    auto_scale,
    count,
    labels,
    max_nodes,
    min_nodes,
    name,
    size,
    tags,
  };
  const url = `${path}/${kubernetes_cluster_id}/node_pools`;

  return httpClient.post<ICreateNodePoolApiResponse>(url, body);
};
