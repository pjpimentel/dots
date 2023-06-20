import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IEnableDropletBackupsApiResponse {
  action: IAction;
}

export interface IEnableDropletBackupsApiRequest {
  droplet_id: number;
}

export type EnableDropletBackupsResponse = IResponse<IEnableDropletBackupsApiResponse>;

export const enableDropletBackups = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IEnableDropletBackupsApiRequest): Promise<Readonly<EnableDropletBackupsResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'enable_backups';
  const body = {type};

  return httpClient.post<IEnableDropletBackupsApiResponse>(url, body);
};
