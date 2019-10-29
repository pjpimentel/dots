import { AxiosInstance } from 'axios';

export interface ISnapshotDropletApiResponse {
  action: IAction;
}

export interface ISnapshotDropletApiRequest {
  droplet_id: number;
  name?: string;
}

export type SnapshotDropletResponse = IResponse<ISnapshotDropletApiResponse>;

export const snapshotDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
  name,
}: ISnapshotDropletApiRequest): Promise<Readonly<SnapshotDropletResponse>> => {
  const path = '/droplets';
  const type = 'snapshot';
  const body = {name, type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<ISnapshotDropletApiResponse>(url, body);
};
