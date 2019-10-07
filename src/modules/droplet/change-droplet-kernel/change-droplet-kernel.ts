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
}: IContext<AxiosInstance>) => async ({
  id,
  kernel,
}: IChangeDropletKernelApiRequest): Promise<Readonly<ChangeDropletKernelResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'change_kernel';
  const body = {kernel, type};
  const url = `${path}`;

  return httpClient.post<IChangeDropletKernelApiResponse>(url, body);
};
