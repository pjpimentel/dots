import { AxiosInstance } from 'axios';

export interface IEnableDropletBackupsApiResponse extends IListResponse {
  action: IAction;
}

export interface IEnableDropletBackupsApiRequest {
  id: string;
}

type EnableDropletBackupsResponse = IResponse<IEnableDropletBackupsApiResponse>;

export const enableDropletBackups = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IEnableDropletBackupsApiRequest): Promise<Readonly<EnableDropletBackupsResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'enable_backups';
  const body = {type};
  const url = `${path}`;

  return httpClient.post<IEnableDropletBackupsApiResponse>(url, body);
};
