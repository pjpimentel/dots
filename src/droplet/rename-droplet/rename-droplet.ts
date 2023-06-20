import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

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
}: IContext) => ({
  droplet_id,
  name,
}: IRenameDropletApiRequest): Promise<Readonly<RenameDropletResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'rename';
  const body = {name, type};

  return httpClient.post<IRenameDropletApiResponse>(url, body);
};
