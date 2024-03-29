import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IPowerOffDropletApiResponse {
  action: IAction;
}

export interface IPowerOffDropletApiRequest {
  droplet_id: number;
}

export type PowerOffDropletResponse = IResponse<IPowerOffDropletApiResponse>;

export const powerOffDroplet = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IPowerOffDropletApiRequest): Promise<Readonly<PowerOffDropletResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'power_off';
  const body = {type};

  return httpClient.post<IPowerOffDropletApiResponse>(url, body);
};
