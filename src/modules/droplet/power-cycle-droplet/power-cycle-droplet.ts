import { AxiosInstance } from 'axios';

export interface IPowerCycleDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IPowerCycleDropletApiRequest {
  id: string;
}

export type PowerCycleDropletResponse = IResponse<IPowerCycleDropletApiResponse>;

export const powerCycleDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IPowerCycleDropletApiRequest): Promise<Readonly<PowerCycleDropletResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'power_cycle';
  const body = {type};
  const url = `${path}`;

  return httpClient.post<IPowerCycleDropletApiResponse>(url, body);
};
