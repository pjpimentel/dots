import { AxiosInstance } from 'axios';

export interface IEnableDropletBackupsApiResponse {
  action: IAction;
}

export interface IEnableDropletBackupsApiRequest {
  id: string;
}

export type EnableDropletBackupsResponse = IResponse<IEnableDropletBackupsApiResponse>;

export const enableDropletBackups = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IEnableDropletBackupsApiRequest): Promise<Readonly<EnableDropletBackupsResponse>> => {
  const path = '/droplets';
  const type = 'enable_backups';
  const body = {type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IEnableDropletBackupsApiResponse>(url, body);
};
