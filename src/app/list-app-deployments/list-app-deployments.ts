import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IAppDeployment } from '..';

export interface IListAppDeploymentsApiResponse extends IListResponse {
  deployments: IAppDeployment[];
}

export interface IListAppDeploymentsApiRequest extends IListRequest {
  app_id: string;
}

export type ListAppDeploymentsResponse = IResponse<IListAppDeploymentsApiResponse>;

export const listAppDeployments = ({
  httpClient,
}: IContext) => ({
  app_id,
  page = 1,
  per_page = 25,
}: IListAppDeploymentsApiRequest): Promise<Readonly<ListAppDeploymentsResponse>> => {
  const url = `/apps/${app_id}/deployments`;
  const params = {page, per_page};

  return httpClient.get<IListAppDeploymentsApiResponse>(url, {params});
};
