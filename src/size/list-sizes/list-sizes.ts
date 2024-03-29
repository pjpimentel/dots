import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { ISize } from '..';

export interface IListSizeApiResponse extends IListResponse {
  sizes: ISize[];
}

export type ListSizesResponse = IResponse<IListSizeApiResponse>;

export const listSizes = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListSizesResponse>> => {
  const url = '/sizes';
  const query_params = {page, per_page};

  return httpClient.get<IListSizeApiResponse>(url, {params: query_params});
};
