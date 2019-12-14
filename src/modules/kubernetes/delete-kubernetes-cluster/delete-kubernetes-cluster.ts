import { IResponse, IContext } from '../../../types';

export interface IDeleteKubernetesClusterApiRequest {
  kubernenetes_cluster_id: string;
}

export type DeleteKubernetesClusterResponse = IResponse<void>;

export const deleteKubernetesCluster = ({
  httpClient,
}: IContext) => ({
  kubernenetes_cluster_id,
}: IDeleteKubernetesClusterApiRequest): Promise<Readonly<DeleteKubernetesClusterResponse>> => {
  const path = '/kubernetes/clusters';
  const url = `${path}/${kubernenetes_cluster_id}`;

  return httpClient.delete(url);
};
