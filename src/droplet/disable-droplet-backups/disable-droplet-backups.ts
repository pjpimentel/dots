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
  const path = '/droplets';
  const type = 'disable_backups';
  const body = {type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IDisableDropletBackupsApiResponse>(url, body);
};
