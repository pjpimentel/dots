import { IResponse, IContext } from '../../types';
import { IProject } from '..';

export interface ICreateProjectApiResponse {
  project: IProject;
}

export interface ICreateProjectApiRequest {
  name: string;
  description: string;
  purpose: string;
  environment: string;
}

export type CreateProjectResponse = IResponse<ICreateProjectApiResponse>;

export const createProject = ({
  httpClient,
}: IContext) => ({
  name,
  description,
  purpose,
  environment,
}: ICreateProjectApiRequest): Promise<Readonly<CreateProjectResponse>> => {
  const url = '/projects';
  const body = {
    name,
    description,
    purpose,
    environment,
  };

  return httpClient.post<ICreateProjectApiResponse>(url, body);
};
