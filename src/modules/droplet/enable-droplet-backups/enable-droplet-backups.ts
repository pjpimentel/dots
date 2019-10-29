import { AxiosInstance } from 'axios';

export interface IEnableDropletBackupsApiResponse {
  action: IAction;
}

export interface IEnableDropletBackupsApiRequest {
  droplet_id: number;
}

export type EnableDropletBackupsResponse = IResponse<IEnableDropletBackupsApiResponse>;

export const enableDropletBackups = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
}: IEnableDropletBackupsApiRequest): Promise<Readonly<EnableDropletBackupsResponse>> => {
  const path = '/droplets';
  const type = 'enable_backups';
  const body = {type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IEnableDropletBackupsApiResponse>(url, body);
};
