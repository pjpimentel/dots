import { IResponse, IContext } from '../../../types';
import { IKubernetesCluster } from '..';

export interface IGetKubernetesClusterApiResponse {
  kubernetes_cluster: IKubernetesCluster;
}

export interface IGetKubernetesClusterApiRequest {
  kubernetes_cluster_id: string;
}

export type GetKubernetesClusterResponse = IResponse<IGetKubernetesClusterApiResponse>;

export const getKubernetesCluster = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
}: IGetKubernetesClusterApiRequest): Promise<Readonly<GetKubernetesClusterResponse>> => {
  const path = '/kubernetes';
  const url = `${path}/${kubernetes_cluster_id}`;

  return httpClient.get<IGetKubernetesClusterApiResponse>(url);
};
