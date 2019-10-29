import { AxiosInstance } from 'axios';

export interface IPowerOffDropletApiResponse {
  action: IAction;
}

export interface IPowerOffDropletApiRequest {
  droplet_id: number;
}

export type PowerOffDropletResponse = IResponse<IPowerOffDropletApiResponse>;

export const powerOffDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
}: IPowerOffDropletApiRequest): Promise<Readonly<PowerOffDropletResponse>> => {
  const path = '/droplets';
  const type = 'power_off';
  const body = {type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IPowerOffDropletApiResponse>(url, body);
};
