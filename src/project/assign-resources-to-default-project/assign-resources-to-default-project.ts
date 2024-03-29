import { IResponse, IContext, IListResponse } from '../../types';
import { IProjectResource } from '..';

export interface IAssignResourcesToDefaultProjectApiRequest {
  resources: string[];
}

export interface IAssignResourcesToDefaultProjectApiResponse extends IListResponse {
  resources: IProjectResource[];
}

export type AssignResourcesToDefaultProjectResponse = IResponse<IAssignResourcesToDefaultProjectApiResponse>;

export const assignResourcesToDefaultProject = ({
  httpClient,
}: IContext) => ({
  resources,
}: IAssignResourcesToDefaultProjectApiRequest): Promise<Readonly<AssignResourcesToDefaultProjectResponse>> => {
  const url = `/projects/default/resources`;
  const body = {resources};

  return httpClient.post<IAssignResourcesToDefaultProjectApiResponse>(url, body);
};
