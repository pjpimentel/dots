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
  const url = `/kubernetes/clusters/${kubernetes_cluster_id}/kubeconfig`;
  const query_params = {expiry_seconds: expiration_in_seconds};

  return httpClient.get<string>(url, {params: query_params});
};
