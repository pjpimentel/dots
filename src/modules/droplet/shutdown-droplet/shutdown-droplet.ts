import { AxiosInstance } from 'axios';

export interface IShutdownDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IShutdownDropletApiRequest {
  id: string;
}

export type ShutdownDropletResponse = IResponse<IShutdownDropletApiResponse>;

export const shutdownDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IShutdownDropletApiRequest): Promise<Readonly<ShutdownDropletResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'shutdown';
  const body = {type};
  const url = `${path}`;

  return httpClient.post<IShutdownDropletApiResponse>(url, body);
};
