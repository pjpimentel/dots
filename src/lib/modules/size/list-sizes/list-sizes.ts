import { AxiosInstance } from 'axios';

export interface IListSizeResponse extends IListResponse {
  sizes: ISize[];
}

type ListSizesResponse = IResponse<IListSizeResponse>;

export const listSizes = ({
  endpoint,
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  perPage = 25,
}: IListRequest): Promise<IResponse<ListSizesResponse>> => {
  const path = '/sizes';
  const url = `${endpoint}${path}?page=${page}&per_page=${perPage}`;

  return httpClient.get<ListSizesResponse>(url);
};
