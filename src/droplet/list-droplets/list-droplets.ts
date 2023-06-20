import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
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
  tag_name = undefined,
}: IListDropletsApiRequest): Promise<Readonly<ListDropletsResponse>> => {
  const url = '/droplets';
  const query_params = {
    page,
    per_page,
    tag_name,
  };

  return httpClient.get<IListDropletsApiResponse>(url, {params: query_params});
};
