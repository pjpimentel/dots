import { IKubernetesClusterStatus, IKubernetesClusterMaintenancePolicy, IKubernetesClusterNodePool } from '.';

export interface IKubernetesCluster {
  id: string;
  name: string;
  region: string;
  version: string;
  cluster_subnet: string;
  service_subnet: string;
  ipv4: string;
  endpoint: string;
  tags: string[];
  node_pools: IKubernetesClusterNodePool[];
  maintenance_policy: IKubernetesClusterMaintenancePolicy;
  auto_upgrade: boolean;
  status: IKubernetesClusterStatus;
  created_at: string;
  updated_at: string;
}
