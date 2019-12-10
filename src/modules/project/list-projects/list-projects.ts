import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { IProject } from '..';

export interface IListProjectsApiResponse extends IListResponse {
  projects: IProject[];
}

export type ListProjectsResponse = IResponse<IListProjectsApiResponse>;

export const listProjects = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListProjectsResponse>> => {
  const path = '/projects';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListProjectsApiResponse>(url, {params: queryParams});
};
