import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { ISnapshot } from '../../snapshot';

export interface IListDropletBackupsApiResponse extends IListResponse {
  backups: ISnapshot[];
}

export interface IListDropletBackupsApiRequest extends IListRequest {
  droplet_id: number;
}

export type ListDropletBackupsResponse = IResponse<IListDropletBackupsApiResponse>;

export const listDropletBackups = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  page = 1,
  per_page = 25,
}: IListDropletBackupsApiRequest): Promise<Readonly<ListDropletBackupsResponse>> => {
  const url = `/droplets/${droplet_id}/backups`;
  const query_params = {page, per_page};

  return httpClient.get<IListDropletBackupsApiResponse>(url, {
    params: query_params,
  });
};
