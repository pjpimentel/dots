import { IResponse, IContext } from '../../types';

export interface IDeleteNodePoolApiRequest {
  kubernetes_cluster_id: string;
  node_pool_id: string;
}

export type DeleteNodePoolResponse = IResponse<void>;

export const deleteNodePool = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  node_pool_id,
}: IDeleteNodePoolApiRequest): Promise<Readonly<DeleteNodePoolResponse>> => {
  const path = '/kubernetes/clusters';
  const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;

  return httpClient.delete(url);
};
