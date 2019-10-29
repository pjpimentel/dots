import { AxiosInstance } from 'axios';

export interface IRestoreDropletApiResponse {
  action: IAction;
}

export interface IRestoreDropletApiRequest {
  droplet_id: number;
  image: string|number;
}

export type RestoreDropletResponse = IResponse<IRestoreDropletApiResponse>;

export const restoreDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
  image,
}: IRestoreDropletApiRequest): Promise<Readonly<RestoreDropletResponse>> => {
  const path = '/droplets';
  const type = 'restore';
  const body = {image, type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IRestoreDropletApiResponse>(url, body);
};
