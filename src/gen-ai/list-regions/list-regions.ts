import { IResponse, IListResponse, IContext } from '../../types';
import { IGenAiRegion } from '..';

export interface IListRegionsApiResponse extends IListResponse {
  regions: IGenAiRegion[];
}

export type ListRegionsResponse = IResponse<IListRegionsApiResponse>;

export const listRegions = ({ httpClient }: IContext) => (): Promise<Readonly<ListRegionsResponse>> => {
  const url = '/gen-ai/regions';
  return httpClient.get<IListRegionsApiResponse>(url);
};
