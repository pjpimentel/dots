import { IResponse, IContext, IListRequest, IListResponse } from '../../../types';
import { IProjectResource } from '../types';

export interface IListProjectResourcesApiResponse extends IListResponse {
  resources: IProjectResource[];
}

export interface IListProjectResourcesApiRequest extends IListRequest {
  project_id: string;
}

export type ListProjectResourcesResponse = IResponse<IListProjectResourcesApiResponse>;

export const listProjectResources = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  project_id,
}: IListProjectResourcesApiRequest): Promise<Readonly<ListProjectResourcesResponse>> => {
  const path = '/projects';
  const query_params = {page, per_page};
  const url = `${path}/${project_id}/resources`;

  return httpClient.get<IListProjectResourcesApiResponse>(url, {params: query_params});
};
