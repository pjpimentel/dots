import { IKubernetesClusterStatus, IKubernetesClusterMaintenancePolicy, IKubernetesClusterNodePool } from '.';

export interface IKubernetesCluster {
  auto_upgrade: boolean;
  cluster_subnet: string;
  created_at: string;
  endpoint: string;
  id: string;
  ipv4: string;
  maintenance_policy: IKubernetesClusterMaintenancePolicy;
  name: string;
  node_pools: IKubernetesClusterNodePool[];
  region: string;
  service_subnet: string;
  status: IKubernetesClusterStatus;
  tags: string[];
  updated_at: string;
  version: string;
  vpc_uuid: string;
}
