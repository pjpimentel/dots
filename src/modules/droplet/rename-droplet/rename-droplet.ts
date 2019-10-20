import { AxiosInstance } from 'axios';

export interface IRenameDropletApiResponse {
  action: IAction;
}

export interface IRenameDropletApiRequest {
  id: string;
  name: string;
}

export type RenameDropletResponse = IResponse<IRenameDropletApiResponse>;

export const renameDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  name,
}: IRenameDropletApiRequest): Promise<Readonly<RenameDropletResponse>> => {
  const path = '/droplets';
  const type = 'rename';
  const body = {name, type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IRenameDropletApiResponse>(url, body);
};
