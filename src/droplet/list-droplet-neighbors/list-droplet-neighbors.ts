import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IDroplet } from '..';

export interface IListDropletNeighborsApiResponse extends IListResponse {
  droplets: IDroplet[];
}

export interface IListDropletNeighborsApiRequest extends IListRequest {
  droplet_id: number;
}

export type ListDropletNeighborsResponse = IResponse<IListDropletNeighborsApiResponse>;

export const listDropletNeighbors = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  page = 1,
  per_page = 25,
}: IListDropletNeighborsApiRequest): Promise<Readonly<ListDropletNeighborsResponse>> => {
  const path = '/droplets';
  const query_params = {page, per_page};
  const url = `${path}/${droplet_id}/neighbors`;

  return httpClient.get<IListDropletNeighborsApiResponse>(url, {
    params: query_params,
  });
};
