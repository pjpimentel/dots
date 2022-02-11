import { IResponse, IContext } from '../../types';

export interface IGetKubernetesClusterKubeconfigApiRequest {
  kubernetes_cluster_id: string;
  expiration_in_seconds?: number;
}

export type GetKubernetesClusterKubeconfigResponse = IResponse<string>;

export const getKubernetesClusterKubeconfig = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  expiration_in_seconds,
}: IGetKubernetesClusterKubeconfigApiRequest): Promise<Readonly<GetKubernetesClusterKubeconfigResponse>> => {
  const path = '/kubernetes/clusters';
  const query_params = {expiry_seconds: expiration_in_seconds};
  const url = `${path}/${kubernetes_cluster_id}/kubeconfig`;

  return httpClient.get<string>(url, {params: query_params});
};
