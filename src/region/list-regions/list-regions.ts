import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IRegion } from '..';

export interface IListRegionsApiResponse extends IListResponse {
  regions: IRegion[];
}

export type ListRegionsResponse = IResponse<IListRegionsApiResponse>;

export const listRegions = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListRegionsResponse>> => {
  const url = '/regions';
  const query_params = {page, per_page};

  return httpClient.get<IListRegionsApiResponse>(url, {params: query_params});
};
