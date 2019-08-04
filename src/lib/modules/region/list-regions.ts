import { AxiosInstance } from 'axios';

export interface IListRegionsResponse extends IListResponse {
  regions: IRegion[];
}

type ListRegionsResponse = IResponse<IListRegionsResponse>;

export const listRegions = ({
  endpoint,
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  perPage = 25,
}: IListRequest): Promise<ListRegionsResponse> => {
  const path = '/regions';
  const url = `${endpoint}${path}?page=${page}&per_page=${perPage}`;

  return httpClient.get<IListRegionsResponse>(url);
};
