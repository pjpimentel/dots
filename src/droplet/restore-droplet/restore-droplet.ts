import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IRestoreDropletApiResponse {
  action: IAction;
}

export interface IRestoreDropletApiRequest {
  droplet_id: number;
  image: string|number;
}

export type RestoreDropletResponse = IResponse<IRestoreDropletApiResponse>;

export const restoreDroplet = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  image,
}: IRestoreDropletApiRequest): Promise<Readonly<RestoreDropletResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'restore';
  const body = {image, type};

  return httpClient.post<IRestoreDropletApiResponse>(url, body);
};
