import { AxiosInstance } from 'axios';

export interface IChangeDropletKernelApiResponse extends IListResponse {
  action: IAction;
}

export interface IChangeDropletKernelApiRequest {
  id: string;
  kernel: number;
}

export type ChangeDropletKernelResponse = IResponse<IChangeDropletKernelApiResponse>;

export const changeDropletKernel = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  kernel,
}: IChangeDropletKernelApiRequest): Promise<Readonly<ChangeDropletKernelResponse>> => {
  const path = '/droplets';
  const type = 'change_kernel';
  const body = {kernel, type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IChangeDropletKernelApiResponse>(url, body);
};
