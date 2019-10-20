import { AxiosInstance } from 'axios';

export interface IDestroySshKeyApiRequest {
  id: string | number;
}

export type DestroySshKeyResponse = IResponse<void>;

export const destroySshKey = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IDestroySshKeyApiRequest): Promise<Readonly<DestroySshKeyResponse>> => {
  const path = '/account/keys';
  const url = `${path}/${id}`;

  return httpClient.delete(url);
};
