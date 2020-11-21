import { IResponse, IContext } from '../../../types';
import { IAppDeployment } from '..';

export interface ICancelAppDeploymentApiResponse {
  deployment: IAppDeployment;
}

export interface ICancelAppDeploymentApiRequest {
  app_id: string;
  deployment_id: string;
}

export type CancelAppDeploymentResponse = IResponse<ICancelAppDeploymentApiResponse>;

export const cancelAppDeployment = ({
  httpClient,
}: IContext) => ({
  app_id,
  deployment_id,
}: ICancelAppDeploymentApiRequest): Promise<Readonly<CancelAppDeploymentResponse>> => {
  const path = '/apps';
  const url = `${path}/${app_id}/deployments/${deployment_id}/cancel`;

  return httpClient.post<ICancelAppDeploymentApiResponse>(url);
};
