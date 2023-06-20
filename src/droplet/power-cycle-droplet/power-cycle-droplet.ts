import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IPowerCycleDropletApiResponse {
  action: IAction;
}

export interface IPowerCycleDropletApiRequest {
  droplet_id: number;
}

export type PowerCycleDropletResponse = IResponse<IPowerCycleDropletApiResponse>;

export const powerCycleDroplet = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IPowerCycleDropletApiRequest): Promise<Readonly<PowerCycleDropletResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'power_cycle';
  const body = {type};

  return httpClient.post<IPowerCycleDropletApiResponse>(url, body);
};
