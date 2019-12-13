import { IResponse, IContext } from '../../../types';
import { IProject } from '..';

export interface IGetProjectApiResponse {
  project: IProject;
}

export interface IGetProjectApiRequest {
  project_id: string;
}

export type GetProjectResponse = IResponse<IGetProjectApiResponse>;

export const getProject = ({
  httpClient,
}: IContext) => ({
  project_id,
}: IGetProjectApiRequest): Promise<Readonly<GetProjectResponse>> => {
  const path = '/projects';
  const url = `${path}/${project_id}`;

  return httpClient.get<IGetProjectApiResponse>(url);
};
