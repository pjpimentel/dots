import { AxiosInstance } from 'axios';

export interface IListDropletKernelsApiResponse extends IListResponse {
  kernels: IKernel[];
}

export interface IListDropletKernelsApiRequest extends IListRequest {
  droplet_id: number;
}

export type ListDropletKernelsResponse = IResponse<IListDropletKernelsApiResponse>;

export const listDropletKernels = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
  page = 1,
  per_page = 25,
}: IListDropletKernelsApiRequest): Promise<Readonly<ListDropletKernelsResponse>> => {
  const path = '/droplets';
  const queryParams = {page, per_page};
  const url = `${path}/${droplet_id}/kernels`;

  return httpClient.get<IListDropletKernelsApiResponse>(url, {
    params: queryParams,
  });
};
