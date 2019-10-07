import { AxiosInstance } from 'axios';

export interface ISnapshotDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface ISnapshotDropletApiRequest {
  id: string;
  name?: string;
}

export type SnapshotDropletResponse = IResponse<ISnapshotDropletApiResponse>;

export const snapshotDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  name,
}: ISnapshotDropletApiRequest): Promise<Readonly<SnapshotDropletResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'snapshot';
  const body = {name, type};
  const url = `${path}`;

  return httpClient.post<ISnapshotDropletApiResponse>(url, body);
};
