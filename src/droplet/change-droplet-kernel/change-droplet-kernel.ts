import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IChangeDropletKernelApiResponse {
  action: IAction;
}

export interface IChangeDropletKernelApiRequest {
  droplet_id: number;
  kernel: number;
}

export type ChangeDropletKernelResponse = IResponse<IChangeDropletKernelApiResponse>;

export const changeDropletKernel = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  kernel,
}: IChangeDropletKernelApiRequest): Promise<Readonly<ChangeDropletKernelResponse>> => {
  const path = '/droplets';
  const type = 'change_kernel';
  const body = {kernel, type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IChangeDropletKernelApiResponse>(url, body);
};
