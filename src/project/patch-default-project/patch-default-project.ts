import { IResponse, IContext } from '../../types';
import { IProject } from '..';

export interface IPatchDefaultProjectApiResponse {
  project: IProject;
}

export interface IPatchDefaultProjectApiRequest {
  description?: string;
  environment?: string;
  is_default?: boolean;
  name?: string;
  purpose?: string;
}

export type PatchDefaultProjectResponse = IResponse<IPatchDefaultProjectApiResponse>;

export const patchDefaultProject = ({
  httpClient,
}: IContext) => ({
  description,
  environment,
  is_default,
  name,
  purpose,
}: IPatchDefaultProjectApiRequest): Promise<Readonly<PatchDefaultProjectResponse>> => {
  const url = `/projects/default`;
  const body = {
    description,
    environment,
    is_default,
    name,
    purpose,
  };

  return httpClient.patch<IPatchDefaultProjectApiResponse>(url, body);
};
