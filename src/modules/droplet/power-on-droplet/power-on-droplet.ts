import { AxiosInstance } from 'axios';

export interface IPowerOnDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IPowerOnDropletApiRequest {
  id: string;
}

export type PowerOnDropletResponse = IResponse<IPowerOnDropletApiResponse>;

export const powerOnDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IPowerOnDropletApiRequest): Promise<Readonly<PowerOnDropletResponse>> => {
  const path = '/droplets';
  const type = 'power_on';
  const body = {type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IPowerOnDropletApiResponse>(url, body);
};
