import { IResponse, IContext } from '../../types';
import { IKubernetesClusterNodePool } from '..';

export interface IGetNodePoolApiResponse {
  node_pool: IKubernetesClusterNodePool;
}

export interface IGetNodePoolApiRequest {
  kubernetes_cluster_id: string;
  node_pool_id: string;
}

export type GetNodePoolResponse = IResponse<IGetNodePoolApiResponse>;

export const getNodePool = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  node_pool_id,
}: IGetNodePoolApiRequest): Promise<Readonly<GetNodePoolResponse>> => {
  const url = `/kubernetes/clusters/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;

  return httpClient.get<IGetNodePoolApiResponse>(url);
};
