import { AxiosInstance } from 'axios';

export interface IRestoreDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IRestoreDropletApiRequest {
  id: string;
  image: string|number;
}

export type RestoreDropletResponse = IResponse<IRestoreDropletApiResponse>;

export const restoreDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  image,
}: IRestoreDropletApiRequest): Promise<Readonly<RestoreDropletResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'restore';
  const body = {image, type};
  const url = `${path}`;

  return httpClient.post<IRestoreDropletApiResponse>(url, body);
};
