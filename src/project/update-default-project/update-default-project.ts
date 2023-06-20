import { IResponse, IContext } from '../../types';
import { IProject } from '..';

export interface IUpdateDefaultProjectApiResponse {
  project: IProject;
}

export interface IUpdateDefaultProjectApiRequest {
  description: string;
  environment: string;
  is_default: boolean;
  name: string;
  purpose: string;
}

export type UpdateDefaultProjectResponse = IResponse<IUpdateDefaultProjectApiResponse>;

export const updateDefaultProject = ({
  httpClient,
}: IContext) => ({
  description,
  environment,
  is_default,
  name,
  purpose,
}: IUpdateDefaultProjectApiRequest): Promise<Readonly<UpdateDefaultProjectResponse>> => {
  const url = `/projects/default`;
  const body = {
    description,
    environment,
    is_default,
    name,
    purpose,
  };

  return httpClient.put<IUpdateDefaultProjectApiResponse>(url, body);
};
