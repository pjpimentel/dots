import { AxiosInstance } from 'axios';

export interface IRebootDropletApiResponse {
  action: IAction;
}

export interface IRebootDropletApiRequest {
  id: string;
}

export type RebootDropletResponse = IResponse<IRebootDropletApiResponse>;

export const rebootDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IRebootDropletApiRequest): Promise<Readonly<RebootDropletResponse>> => {
  const path = '/droplets';
  const type = 'reboot';
  const body = {type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IRebootDropletApiResponse>(url, body);
};
