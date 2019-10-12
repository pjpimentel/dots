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
  const path = '/droplets';
  const type = 'restore';
  const body = {image, type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IRestoreDropletApiResponse>(url, body);
};
