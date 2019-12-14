export interface IKubernetesClusterNodePoolNodeStatus {
  state: 'running' | 'provisioning' | 'errored' | string;
}
