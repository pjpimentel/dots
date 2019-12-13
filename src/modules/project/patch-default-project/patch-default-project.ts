import { IResponse, IContext } from '../../../types';
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
    const path = '/projects';
    const body = {
      description,
      environment,
      is_default,
      name,
      purpose,
    };
    const url = `${path}/default`;

    return httpClient.patch<IPatchDefaultProjectApiResponse>(url, body);
  };
