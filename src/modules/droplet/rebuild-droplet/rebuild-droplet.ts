import { AxiosInstance } from 'axios';

export interface IRebuildDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IRebuildDropletApiRequest {
  id: string;
  image: string|number;
}

export type RebuildDropletResponse = IResponse<IRebuildDropletApiResponse>;

export const rebuildDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  image,
}: IRebuildDropletApiRequest): Promise<Readonly<RebuildDropletResponse>> => {
  const path = '/droplets';
  const type = 'rebuild';
  const body = {image, type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IRebuildDropletApiResponse>(url, body);
};
