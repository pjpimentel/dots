import { AxiosInstance } from 'axios';

export interface IListSizeApiResponse extends IListResponse {
  sizes: ISize[];
}

type ListSizesResponse = IResponse<IListSizeApiResponse>;

export const listSizes = ({
  endpoint,
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  perPage = 25,
}: IListRequest): Promise<Readonly<ListSizesResponse>> => {
  const path = '/sizes';
  const queryParams = {page, per_page: perPage};
  const url = `${path}`;

  return httpClient.get<IListSizeApiResponse>(url, {params: queryParams});
};
