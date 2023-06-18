import { IResponse, IContext } from '../../types';
import { IProject } from '..';

export interface IGetDefaultProjectApiResponse {
  project: IProject;
}

export type GetDefaultProjectResponse = IResponse<IGetDefaultProjectApiResponse>;

export const getDefaultProject = ({
  httpClient,
}: IContext) => () : Promise<Readonly<GetDefaultProjectResponse>> => {
  const url = `/projects/default`;

  return httpClient.get<IGetDefaultProjectApiResponse>(url);
};
