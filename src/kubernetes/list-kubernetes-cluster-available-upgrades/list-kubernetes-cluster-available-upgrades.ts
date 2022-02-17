import { IResponse, IContext } from '../../types';

export interface IListKubernetesClusterAvailableUpgradesApiRequest {
  kubernetes_cluster_id: string;
}

export interface IKubernetesClusterAvailableUpgrade {
  slug: string;
  kubernetes_version: string;
}

export interface IListKubernetesClusterAvailableUpgradesApiResponse {
  available_upgrade_versions: IKubernetesClusterAvailableUpgrade[];
}

export type ListKubernetesClusterAvailableUpgradesResponse = IResponse<IListKubernetesClusterAvailableUpgradesApiResponse>;

export const listKubernetesClusterAvailableUpgrades = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
}: IListKubernetesClusterAvailableUpgradesApiRequest): Promise<Readonly<ListKubernetesClusterAvailableUpgradesResponse>> => {
  const path = '/kubernetes/clusters';
  const url = `${path}/${kubernetes_cluster_id}/upgrades`;

  return httpClient.get<IListKubernetesClusterAvailableUpgradesApiResponse>(url);
};
