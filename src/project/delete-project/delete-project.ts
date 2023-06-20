import { IResponse, IContext } from '../../types';

export interface IDeleteProjectApiRequest {
  project_id: string;
}

export type DeleteProjectResponse = IResponse<void>;

export const deleteProject = ({
  httpClient,
}: IContext) => ({
  project_id,
}: IDeleteProjectApiRequest): Promise<Readonly<DeleteProjectResponse>> => {
  const url = `/projects/${project_id}`;

  return httpClient.delete(url);
};
