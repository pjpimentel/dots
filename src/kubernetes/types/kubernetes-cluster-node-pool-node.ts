import { IKubernetesClusterNodePoolNodeStatus } from '.';

export interface IKubernetesClusterNodePoolNode {
  id: string;
  name: string;
  status: IKubernetesClusterNodePoolNodeStatus;
  created_at: string;
  updated_at: string;
}
