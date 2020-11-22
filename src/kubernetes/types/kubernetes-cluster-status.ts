export type KubernetesClusterStatus = 'running' | 'provisioning' | 'errored';
export interface IKubernetesClusterStatus {
  state: KubernetesClusterStatus | string;
  message: string;
}
