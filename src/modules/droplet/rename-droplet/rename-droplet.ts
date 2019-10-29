import { AxiosInstance } from 'axios';

export interface IRenameDropletApiResponse {
  action: IAction;
}

export interface IRenameDropletApiRequest {
  droplet_id: number;
  name: string;
}

export type RenameDropletResponse = IResponse<IRenameDropletApiResponse>;

export const renameDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
  name,
}: IRenameDropletApiRequest): Promise<Readonly<RenameDropletResponse>> => {
  const path = '/droplets';
  const type = 'rename';
  const body = {name, type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IRenameDropletApiResponse>(url, body);
};
