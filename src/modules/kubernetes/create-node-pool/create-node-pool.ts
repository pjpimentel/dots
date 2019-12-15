import { IResponse, IContext } from '../../../types';
import { IKubernetesClusterNodePool } from '..';

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
}

export type CreateNodePoolResponse = IResponse<ICreateNodePoolApiResponse>;

export const createNodePool = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  size,
  name,
  count,
  tags,
  auto_scale,
  min_nodes,
  max_nodes,
}: ICreateNodePoolApiRequest): Promise<Readonly<CreateNodePoolResponse>> => {
  const path = '/kubernetes/clusters';
  const body = {
    auto_scale,
    count,
    max_nodes,
    min_nodes,
    name,
    size,
    tags,
  };
  const url = `${path}/${kubernetes_cluster_id}/node_pools`;

  return httpClient.post<ICreateNodePoolApiResponse>(url, body);
};
