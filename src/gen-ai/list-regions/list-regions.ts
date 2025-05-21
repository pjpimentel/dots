import { IResponse, IListResponse, IContext } from '../../types';
import { IGenAiRegion } from '..';

export interface IListRegionsApiResponse extends IListResponse {
  regions: IGenAiRegion[];
}

export type ListRegionsResponse = IResponse<IListRegionsApiResponse>;

export const listRegions = ({ httpClient }: IContext) => (
  { page = 1, per_page = 25 }: { page?: number; per_page?: number } = {},
): Promise<Readonly<ListRegionsResponse>> => {
  const url = '/gen-ai/regions';
  const params = { page, per_page };
  return httpClient.get<IListRegionsApiResponse>(url, { params });
};
