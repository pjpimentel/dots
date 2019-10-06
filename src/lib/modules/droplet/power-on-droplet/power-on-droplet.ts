import { AxiosInstance } from 'axios';

export interface IPowerOnDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IPowerOnDropletApiRequest {
  id: string;
}

type PowerOnDropletResponse = IResponse<IPowerOnDropletApiResponse>;

export const powerOnDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IPowerOnDropletApiRequest): Promise<Readonly<PowerOnDropletResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'power_on';
  const body = {type};
  const url = `${path}`;

  return httpClient.post<IPowerOnDropletApiResponse>(url, body);
};
