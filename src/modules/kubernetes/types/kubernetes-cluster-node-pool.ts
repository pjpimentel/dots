import { IKubernetesClusterNodePoolNode } from '.'

export interface IKubernetesClusterNodePool {
  id: string;
  name: string;
  size: string;
  count: number;
  tags: string[];
  nodes: IKubernetesClusterNodePoolNode[];
}
