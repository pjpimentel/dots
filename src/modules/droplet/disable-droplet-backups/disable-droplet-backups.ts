import { AxiosInstance } from 'axios';

export interface IDisableDropletBackupsApiResponse extends IListResponse {
  action: IAction;
}

export interface IDisableDropletBackupsApiRequest {
  id: string;
}

export type DisableDropletBackupsResponse = IResponse<IDisableDropletBackupsApiResponse>;

export const disableDropletBackups = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IDisableDropletBackupsApiRequest): Promise<Readonly<DisableDropletBackupsResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'disable_backups';
  const body = {type};
  const url = `${path}`;

  return httpClient.post<IDisableDropletBackupsApiResponse>(url, body);
};
