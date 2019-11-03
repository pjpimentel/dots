import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { IDroplet } from '..';

export interface IListDropletNeighborhoodsApiResponse extends IListResponse {
  neighbors: Array<IDroplet[]>;
}

export type ListDropletNeighborhoodsResponse = IResponse<IListDropletNeighborhoodsApiResponse>;

export const listDropletNeighborhoods = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListDropletNeighborhoodsResponse>> => {
  const path = '/reports/droplet_neighbors';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListDropletNeighborhoodsApiResponse>(url, {
    params: queryParams,
  });
};
