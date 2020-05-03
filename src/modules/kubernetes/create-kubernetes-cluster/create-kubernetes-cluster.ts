import { IResponse, IContext } from '../../../types';
import { IKubernetesCluster } from '..';
import { IKubernetesClusterMaintenancePolicy } from '../types';

export interface ICreateKubernetesClusterApiResponse {
  kubernetes_cluster: IKubernetesCluster;
}

export interface ICreateKubernetesClusterNodePoolApiRequest {
  size: string;
  name: string;
  count: number;
  tags?: string[];
  auto_scale?: boolean;
  min_nodes?: number;
  max_nodes?: number;
}

export interface ICreateKubernetesClusterApiRequest {
  name: string;
  region: string;
  version: string;
  tags?: string[];
  auto_upgrade?: boolean;
  maintenance_policy?: Partial<IKubernetesClusterMaintenancePolicy>;
  node_pools: ICreateKubernetesClusterNodePoolApiRequest[];
  vpc_uuid?: string;
}

export type CreateKubernetesClusterResponse = IResponse<ICreateKubernetesClusterApiResponse>;

export const createKubernetesCluster = ({
  httpClient,
}: IContext) => ({
  name,
  region,
  version,
  tags,
  auto_upgrade,
  maintenance_policy,
  node_pools,
  vpc_uuid,
}: ICreateKubernetesClusterApiRequest): Promise<Readonly<CreateKubernetesClusterResponse>> => {
  const path = '/kubernetes/clusters';
  const body = {
    name,
    region,
    version,
    tags,
    auto_upgrade,
    maintenance_policy,
    node_pools,
    vpc_uuid,
  };
  const url = `${path}`;

  return httpClient.post<ICreateKubernetesClusterApiResponse>(url, body);
};
