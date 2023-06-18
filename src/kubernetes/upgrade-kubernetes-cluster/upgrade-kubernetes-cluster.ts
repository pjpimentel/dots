import { IResponse, IContext } from '../../types';

export interface IUpgradeKubernetesClusterApiRequest {
  kubernetes_cluster_id: string;
  version: string;
}

export type UpgradeKubernetesClusterResponse = IResponse<void>;

export const upgradeKubernetesCluster = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  version,
}: IUpgradeKubernetesClusterApiRequest): Promise<Readonly<UpgradeKubernetesClusterResponse>> => {
  const url = `/kubernetes/clusters/${kubernetes_cluster_id}/upgrade`;
  const body = {version};

  return httpClient.post<void>(url, body);
};
