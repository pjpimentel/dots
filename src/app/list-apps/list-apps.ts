import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IApp } from '..';

export interface IListAppsApiResponse extends IListResponse {
  apps: IApp[];
}

export interface IListAppApiRequest extends IListRequest {
  with_projects?: boolean;
}

export type ListAppsResponse = IResponse<IListAppsApiResponse>;

export const listApps = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  with_projects = false,
}: IListAppApiRequest): Promise<Readonly<ListAppsResponse>> => {
  const url = '/apps';
  const params = {page, per_page, with_projects};

  return httpClient.get<IListAppsApiResponse>(url, {params});
};
