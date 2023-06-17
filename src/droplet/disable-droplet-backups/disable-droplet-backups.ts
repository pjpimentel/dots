import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IDisableDropletBackupsApiResponse {
  action: IAction;
}

export interface IDisableDropletBackupsApiRequest {
  droplet_id: number;
}

export type DisableDropletBackupsResponse = IResponse<IDisableDropletBackupsApiResponse>;

export const disableDropletBackups = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IDisableDropletBackupsApiRequest): Promise<Readonly<DisableDropletBackupsResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'disable_backups';
  const body = {type};

  return httpClient.post<IDisableDropletBackupsApiResponse>(url, body);
};
