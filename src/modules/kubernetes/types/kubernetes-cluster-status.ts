export interface IKubernetesClusterStatus {
  status: 'running' | 'provisioning' | 'errored' | string;
  message: string;
}
