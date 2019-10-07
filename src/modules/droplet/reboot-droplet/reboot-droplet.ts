import { AxiosInstance } from 'axios';

export interface IRebootDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IRebootDropletApiRequest {
  id: string;
}

export type RebootDropletResponse = IResponse<IRebootDropletApiResponse>;

export const rebootDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IRebootDropletApiRequest): Promise<Readonly<RebootDropletResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'reboot';
  const body = {type};
  const url = `${path}`;

  return httpClient.post<IRebootDropletApiResponse>(url, body);
};
