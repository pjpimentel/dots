import { AxiosInstance } from 'axios';

export interface IListDropletBackupsApiResponse extends IListResponse {
  backups: ISnapshot[];
}

export interface IListDropletBackupsApiRequest extends IListRequest {
  id: number;
}

export type ListDropletBackupsResponse = IResponse<IListDropletBackupsApiResponse>;

export const listDropletBackups = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  page = 1,
  per_page = 25,
}: IListDropletBackupsApiRequest): Promise<Readonly<ListDropletBackupsResponse>> => {
  const path = '/droplets';
  const queryParams = {page, per_page};
  const url = `${path}/${id}/backups`;

  return httpClient.get<IListDropletBackupsApiResponse>(url, {
    params: queryParams,
  });
};
