import { AxiosInstance } from 'axios';

export interface IPowerCycleDropletApiResponse {
  action: IAction;
}

export interface IPowerCycleDropletApiRequest {
  droplet_id: number;
}

export type PowerCycleDropletResponse = IResponse<IPowerCycleDropletApiResponse>;

export const powerCycleDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
}: IPowerCycleDropletApiRequest): Promise<Readonly<PowerCycleDropletResponse>> => {
  const path = '/droplets';
  const type = 'power_cycle';
  const body = {type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IPowerCycleDropletApiResponse>(url, body);
};
