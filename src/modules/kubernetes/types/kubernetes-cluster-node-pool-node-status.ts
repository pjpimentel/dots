export type NodePoolNodeStatusState = 'running' | 'provisioning' | 'errored';
export interface IKubernetesClusterNodePoolNodeStatus {
  state: NodePoolNodeStatusState | string;
}
