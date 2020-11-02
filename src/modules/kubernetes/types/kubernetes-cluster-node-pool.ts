import {
  IKubernetesClusterNodePoolLabels,
  IKubernetesClusterNodePoolNode,
  IKubernetesClusterNodePoolTaint,
} from './';

export interface IKubernetesClusterNodePool {
  count: number;
  id: string;
  labels: IKubernetesClusterNodePoolLabels;
  name: string;
  nodes: IKubernetesClusterNodePoolNode[];
  size: string;
  tags: string[];
  taints: IKubernetesClusterNodePoolTaint[];
}
