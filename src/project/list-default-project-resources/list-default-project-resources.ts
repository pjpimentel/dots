import { IResponse, IContext, IListRequest, IListResponse } from '../../types';
import { IProjectResource } from '../types';

export interface IListDefaultProjectResourcesApiResponse extends IListResponse {
  resources: IProjectResource[];
}

export type ListDefaultProjectResourcesResponse = IResponse<IListDefaultProjectResourcesApiResponse>;

export const listDefaultProjectResources = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListDefaultProjectResourcesResponse>> => {
  const url = `/projects/default/resources`;
  const query_params = {page, per_page};

  return httpClient.get<IListDefaultProjectResourcesApiResponse>(url, {params: query_params});
};
