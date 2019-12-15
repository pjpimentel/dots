export type KubernetesClusterStatus = 'running' | 'provisioning' | 'errored';
export interface IKubernetesClusterStatus {
  status: KubernetesClusterStatus | string;
  message: string;
}
