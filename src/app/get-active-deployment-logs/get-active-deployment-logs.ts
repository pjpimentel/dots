import { IResponse, IContext } from '../../types';
import { AppDeploymentLogType } from '..';

export interface IGetActiveDeploymentLogsApiResponse {
  historic_urls: string[];
  live_url: string;
}

export interface IGetActiveDeploymentLogsApiRequest {
  app_id: string;
  component_name: string;
  follow?: boolean;
  pod_connection_timeout?: string;
  type?: AppDeploymentLogType | string;
}

export type GetActiveDeploymentLogsResponse = IResponse<IGetActiveDeploymentLogsApiResponse>;

export const getActiveDeploymentLogs = ({
  httpClient
}: IContext) => ({
  app_id,
  component_name,
  follow,
  pod_connection_timeout,
  type,
}: IGetActiveDeploymentLogsApiRequest): Promise<Readonly<GetActiveDeploymentLogsResponse>> => {
  const path = '/apps';
  const url = `${path}/${app_id}/components/${component_name}/logs`;
  const query_params = { follow, pod_connection_timeout, type };

  return httpClient.get<IGetActiveDeploymentLogsApiResponse>(url, {
    params: query_params,
  });
};
