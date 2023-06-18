import { IResponse, IContext } from '../../types';
import { IKubernetesCluster } from '..';
import {
  IKubernetesClusterMaintenancePolicy,
  IKubernetesClusterNodePoolTaint,
} from '../types';

export interface ICreateKubernetesClusterApiResponse {
  kubernetes_cluster: IKubernetesCluster;
}

export interface ICreateKubernetesClusterNodePoolApiRequest {
  auto_scale?: boolean;
  count: number;
  max_nodes?: number;
  min_nodes?: number;
  name: string;
  size: string;
  tags?: string[];
  taints?: IKubernetesClusterNodePoolTaint[];
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
  const url = '/kubernetes/clusters';
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

  return httpClient.post<ICreateKubernetesClusterApiResponse>(url, body);
};
