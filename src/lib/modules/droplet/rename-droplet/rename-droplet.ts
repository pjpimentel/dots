import { AxiosInstance } from 'axios';

export interface IRenameDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IRenameDropletApiRequest {
  id: string;
  name: string;
}

type RenameDropletResponse = IResponse<IRenameDropletApiResponse>;

export const renameDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  name,
}: IRenameDropletApiRequest): Promise<Readonly<RenameDropletResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'rename';
  const body = {name, type};
  const url = `${path}`;

  return httpClient.post<IRenameDropletApiResponse>(url, body);
};
