import { AxiosInstance } from 'axios';

export interface IPowerOffDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IPowerOffDropletApiRequest {
  id: string;
}

type PowerOffDropletResponse = IResponse<IPowerOffDropletApiResponse>;

export const powerOffDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IPowerOffDropletApiRequest): Promise<Readonly<PowerOffDropletResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'power_off';
  const body = {type};
  const url = `${path}`;

  return httpClient.post<IPowerOffDropletApiResponse>(url, body);
};