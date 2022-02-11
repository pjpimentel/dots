import { IResponse, IContext } from '../../types';

export interface IRunClusterlintOnKubernetesClusterResponse {
  run_id: string;
}

export interface IRunClusterlintOnKubernetesClusterRequest {
  kubernetes_cluster_id: string;
  include_groups?: string[];
  include_checks?: string[];
  exclude_groups?: string[];
  exclude_checks?: string[];
}

export type RunClusterlintResponse = IResponse<IRunClusterlintOnKubernetesClusterResponse>;

export const runClusterlintOnKubernetesCluster = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  include_groups,
  include_checks,
  exclude_groups,
  exclude_checks,
}: IRunClusterlintOnKubernetesClusterRequest): Promise<Readonly<RunClusterlintResponse>> => {
  const path = '/kubernetes/clusters';
  const body = {
    include_groups,
    include_checks,
    exclude_groups,
    exclude_checks,
  };
  const url = `${path}/${kubernetes_cluster_id}/clusterlint`;

  return httpClient.post<IRunClusterlintOnKubernetesClusterResponse>(url, body);
};
