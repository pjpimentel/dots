import { IResponse, IContext } from '../../types';

export interface IDeleteKubernetesClusterApiRequest {
  kubernetes_cluster_id: string;
}

export type DeleteKubernetesClusterResponse = IResponse<void>;

export const deleteKubernetesCluster = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
}: IDeleteKubernetesClusterApiRequest): Promise<Readonly<DeleteKubernetesClusterResponse>> => {
  const url = `/kubernetes/clusters/${kubernetes_cluster_id}`;

  return httpClient.delete(url);
};
