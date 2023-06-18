import { IResponse, IContext } from '../../types';
import { IProject } from '..';

export interface IPatchProjectApiResponse {
  project: IProject;
}

export interface IPatchProjectApiRequest {
  description?: string;
  environment?: string;
  is_default?: boolean;
  name?: string;
  project_id: string;
  purpose?: string;
}

export type PatchProjectResponse = IResponse<IPatchProjectApiResponse>;

export const patchProject = ({
  httpClient,
}: IContext) => ({
  description,
  environment,
  is_default,
  name,
  project_id,
  purpose,
}: IPatchProjectApiRequest): Promise<Readonly<PatchProjectResponse>> => {
  const url = `/projects/${project_id}`;
  const body = {
    description,
    environment,
    is_default,
    name,
    purpose,
  };

  return httpClient.patch<IPatchProjectApiResponse>(url, body);
};
