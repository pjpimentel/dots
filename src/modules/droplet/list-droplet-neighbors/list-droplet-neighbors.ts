import { AxiosInstance } from 'axios';

export interface IListDropletNeighborsApiResponse extends IListResponse {
  droplets: IDroplet[];
}

export interface IListDropletNeighborsApiRequest extends IListRequest {
  id: number;
}

export type ListDropletNeighborsResponse = IResponse<IListDropletNeighborsApiResponse>;

export const listDropletNeighbors = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  page = 1,
  per_page = 25,
}: IListDropletNeighborsApiRequest): Promise<Readonly<ListDropletNeighborsResponse>> => {
  const path = `/droplets/${id}/neighbors`;
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListDropletNeighborsApiResponse>(url, {
    params: queryParams,
  });
};
