import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

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
}: IContext) => ({
  droplet_id,
  name,
}: ISnapshotDropletApiRequest): Promise<Readonly<SnapshotDropletResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'snapshot';
  const body = {name, type};

  return httpClient.post<ISnapshotDropletApiResponse>(url, body);
};
