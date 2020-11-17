import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { IApp } from '..';

export interface IListAppsApiResponse extends IListResponse {
  apps: IApp[];
}

export type ListAppsResponse = IResponse<IListAppsApiResponse>;

export const listApps = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListAppsResponse>> => {
  const path = '/apps';
  const params = {page, per_page};

  const url = `${path}`;

  return httpClient.get<IListAppsApiResponse>(url, {params});
};
