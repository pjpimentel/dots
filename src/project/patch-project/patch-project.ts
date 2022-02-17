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
    const path = '/projects';
    const body = {
      description,
      environment,
      is_default,
      name,
      purpose,
    };
    const url = `${path}/${project_id}`;

    return httpClient.patch<IPatchProjectApiResponse>(url, body);
  };
