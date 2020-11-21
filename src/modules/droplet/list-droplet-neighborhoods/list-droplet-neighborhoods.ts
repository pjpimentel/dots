import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';

export interface IListDropletNeighborhoodsApiResponse extends IListResponse {
  neighbor_ids: Array<number[]>;
}

export type ListDropletNeighborhoodsResponse = IResponse<IListDropletNeighborhoodsApiResponse>;

export const listDropletNeighborhoods = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListDropletNeighborhoodsResponse>> => {
  const path = '/reports/droplet_neighbors_ids';
  const query_params = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListDropletNeighborhoodsApiResponse>(url, {
    params: query_params,
  });
};
