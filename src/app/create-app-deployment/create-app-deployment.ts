import { IResponse, IContext } from '../../types';
import { IAppDeployment } from '..';

export interface ICreateAppDeploymentApiResponse {
  deployment: IAppDeployment;
}

export interface ICreateAppDeploymentApiRequest {
  app_id: string;
  force_build?: boolean;
}

export type CreateAppDeploymentResponse = IResponse<ICreateAppDeploymentApiResponse>;

export const createAppDeployment = ({
  httpClient,
}: IContext) => ({
  app_id,
  force_build,
}: ICreateAppDeploymentApiRequest): Promise<Readonly<CreateAppDeploymentResponse>> => {
  const url = `/apps/${app_id}/deployments`;
  const body = {force_build};

  return httpClient.post<ICreateAppDeploymentApiResponse>(url, body);
};
