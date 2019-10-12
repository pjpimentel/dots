import { AxiosInstance } from 'axios';

export interface IGetDropletApiResponse {
  droplet: IDroplet;
}

export interface IGetDropletApiRequest {
  id: number;
}

export type GetDropletResponse = IResponse<IGetDropletApiResponse>;

export const getDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IGetDropletApiRequest): Promise<Readonly<GetDropletResponse>> => {
  const path = '/droplets';
  const url = `${path}/${id}`;

  return httpClient.get<IGetDropletApiResponse>(url);
};
