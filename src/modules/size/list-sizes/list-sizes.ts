import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
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
  const path = '/sizes';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListSizeApiResponse>(url, {params: queryParams});
};
