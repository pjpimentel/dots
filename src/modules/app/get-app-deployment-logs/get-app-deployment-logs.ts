import { IResponse, IContext } from '../../../types';

export interface IGetAppDeploymentLogsApiResponse {
  historic_urls: string[];
  live_url: string;
}

export interface IGetAppDeploymentLogsApiRequest {
  app_id: string;
  component_name: string;
  deployment_id: string;
  follow?: boolean;
  pod_connection_timeout?: string;
  type?: 'BUILD' | 'DEPLOY' | 'RUN' | string;
}

export type GetAppDeploymentLogsResponse = IResponse<IGetAppDeploymentLogsApiResponse>;

export const getAppDeploymentLogs = ({
  httpClient,
}: IContext) => ({
  app_id,
  component_name,
  deployment_id,
  follow,
  pod_connection_timeout,
  type,
}: IGetAppDeploymentLogsApiRequest): Promise<Readonly<GetAppDeploymentLogsResponse>> => {
  const path = '/apps';
  const url = `${path}/${app_id}/deployments/${deployment_id}/components/${component_name}/logs`;
  const query_params = {follow, pod_connection_timeout, type};

  return httpClient.get<IGetAppDeploymentLogsApiResponse>(url, {params: query_params});
};
