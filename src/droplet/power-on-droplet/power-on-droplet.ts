import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IPowerOnDropletApiResponse {
  action: IAction;
}

export interface IPowerOnDropletApiRequest {
  droplet_id: number;
}

export type PowerOnDropletResponse = IResponse<IPowerOnDropletApiResponse>;

export const powerOnDroplet = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IPowerOnDropletApiRequest): Promise<Readonly<PowerOnDropletResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'power_on';
  const body = {type};

  return httpClient.post<IPowerOnDropletApiResponse>(url, body);
};
