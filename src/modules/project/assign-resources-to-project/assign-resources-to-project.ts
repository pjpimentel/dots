import { IResponse, IContext, IListResponse } from '../../../types';
import { IProjectResource } from '..';

export interface IAssignResourcesToProjectApiRequest {
  project_id: string;
  resources: string[];
}

export interface IAssignResourcesToProjectApiResponse extends IListResponse {
  resources: IProjectResource[];
}

export type AssignResourcesToProjectResponse = IResponse<IAssignResourcesToProjectApiResponse>;

export const assignResourcesToProject = ({
  httpClient,
}: IContext) => ({
  project_id,
  resources,
}: IAssignResourcesToProjectApiRequest): Promise<Readonly<AssignResourcesToProjectResponse>> => {
  const path = '/projects';
  const body = {resources};
  const url = `${path}/${project_id}/resources`;

  return httpClient.post<IAssignResourcesToProjectApiResponse>(url, body);
};
