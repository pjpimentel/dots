import { IResponse, IContext } from '../../../types';
import { IAppDeployment } from '..';

export interface ICreateAppDeploymentApiResponse {
  deployment: IAppDeployment;
}

export interface ICreateAppDeploymentApiRequest {
  app_id: string;
}

export type CreateAppDeploymentResponse = IResponse<ICreateAppDeploymentApiResponse>;

export const createAppDeployment = ({
  httpClient,
}: IContext) => ({
  app_id,
}: ICreateAppDeploymentApiRequest): Promise<Readonly<CreateAppDeploymentResponse>> => {
  const path = '/apps';
  const url = `${path}/${app_id}/deployments`;

  return httpClient.post<ICreateAppDeploymentApiResponse>(url);
};
