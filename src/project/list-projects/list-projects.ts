import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
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
  const url = '/projects';
  const query_params = {page, per_page};

  return httpClient.get<IListProjectsApiResponse>(url, {params: query_params});
};
