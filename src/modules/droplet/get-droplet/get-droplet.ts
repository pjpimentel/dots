import { AxiosInstance } from 'axios';

export interface IGetDropletApiResponse {
  droplet: IDroplet;
}

export interface IGetDropletApiRequest {
  droplet_id: number;
}

export type GetDropletResponse = IResponse<IGetDropletApiResponse>;

export const getDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
}: IGetDropletApiRequest): Promise<Readonly<GetDropletResponse>> => {
  const path = '/droplets';
  const url = `${path}/${droplet_id}`;

  return httpClient.get<IGetDropletApiResponse>(url);
};
