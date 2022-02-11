import { IResponse, IContext } from '../../types';

export interface IDeleteNodeApiRequest {
  kubernetes_cluster_id: string;
  node_pool_id: string;
  node_id: string;
  drain_node?: boolean;
  replace_node?: boolean;
}

export type DeleteNodeResponse = IResponse<void>;

export const deleteNode = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  node_pool_id,
  node_id,
  drain_node = true,
  replace_node = false,
}: IDeleteNodeApiRequest): Promise<Readonly<DeleteNodeResponse>> => {
  const path = '/kubernetes/clusters';
  const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}/nodes/${node_id}`;
  const query_params = {
    replace: replace_node ? 1 : 0,
    skip_drain: drain_node ? 0 : 1,
  };

  return httpClient.delete(url, {params: query_params});
};
