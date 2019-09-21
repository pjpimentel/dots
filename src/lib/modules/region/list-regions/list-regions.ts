import { AxiosInstance } from 'axios';

export interface IListRegionsApiResponse extends IListResponse {
  regions: IRegion[];
}

type ListRegionsResponse = IResponse<IListRegionsApiResponse>;

export const listRegions = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  perPage = 25,
}: IListRequest): Promise<Readonly<ListRegionsResponse>> => {
  const path = '/regions';
  const queryParams = {page, per_page: perPage};
  const url = `${path}`;

  return httpClient.get<IListRegionsApiResponse>(url, {params: queryParams});
};
