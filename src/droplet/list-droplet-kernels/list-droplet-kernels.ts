import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IKernel } from '..';

export interface IListDropletKernelsApiResponse extends IListResponse {
  kernels: IKernel[];
}

export interface IListDropletKernelsApiRequest extends IListRequest {
  droplet_id: number;
}

export type ListDropletKernelsResponse = IResponse<IListDropletKernelsApiResponse>;

export const listDropletKernels = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  page = 1,
  per_page = 25,
}: IListDropletKernelsApiRequest): Promise<Readonly<ListDropletKernelsResponse>> => {
  const url = `/droplets/${droplet_id}/kernels`;
  const query_params = {page, per_page};

  return httpClient.get<IListDropletKernelsApiResponse>(url, {
    params: query_params,
  });
};
