import { IResponse, IContext } from '../../../types';
import { IKubernetesCluster, IKubernetesClusterMaintenancePolicy } from '..';

export interface IUpdateKubernetesClusterApiRequest {
  auto_upgrade?: boolean;
  kubernetes_cluster_id: string;
  maintenance_policy?: Partial<IKubernetesClusterMaintenancePolicy>;
  name: string;
  tags?: string[];
}
export interface IUpdateKubernetesClusterApiResponse {
  kubernetes_cluster: IKubernetesCluster;
}

export type UpdateKubernetesClusterResponse = IResponse<IUpdateKubernetesClusterApiResponse>;

export const updateKubernetesCluster = ({
  httpClient,
}: IContext) => ({
  auto_upgrade,
  kubernetes_cluster_id,
  maintenance_policy,
  name,
  tags,
}: IUpdateKubernetesClusterApiRequest): Promise<Readonly<UpdateKubernetesClusterResponse>> => {
  const path = '/kubernetes/clusters';
  const body = {
    auto_upgrade,
    maintenance_policy,
    name,
    tags,
  };
  const url = `${path}/${kubernetes_cluster_id}`;

  return httpClient.put<IUpdateKubernetesClusterApiResponse>(url, body);
};
