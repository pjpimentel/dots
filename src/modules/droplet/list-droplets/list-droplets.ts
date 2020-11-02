import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { IDroplet } from '..';

export interface IListDropletsApiResponse extends IListResponse {
  droplets: IDroplet[];
}

export interface IListDropletsApiRequest extends IListRequest {
  tag_name?: string;
}

export type ListDropletsResponse = IResponse<IListDropletsApiResponse>;

export const listDroplets = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  tag_name,
}: IListDropletsApiRequest): Promise<Readonly<ListDropletsResponse>> => {
  const path = '/droplets';
  const queryParams = {page, per_page};
  const hasTagnameFilter = typeof tag_name === 'string';

  if (hasTagnameFilter) {
    Object.assign(queryParams, {tag_name});
  }

  const url = `${path}`;

  return httpClient.get<IListDropletsApiResponse>(url, {params: queryParams});
};
