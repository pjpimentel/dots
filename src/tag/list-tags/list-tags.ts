import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { ITag } from '..';

export interface IListTagsApiResponse extends IListResponse {
  tags: ITag[];
}

export type ListTagsResponse = IResponse<IListTagsApiResponse>;

export const listTags = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListTagsResponse>> => {
  const path = '/tags';
  const query_params = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListTagsApiResponse>(url, {params: query_params});
};
