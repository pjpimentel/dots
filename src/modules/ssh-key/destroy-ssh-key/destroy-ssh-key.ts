import { IResponse, IContext } from '../../../types';

export interface IDestroySshKeyApiRequest {
  id?: string | number;
  ssh_key_id: string | number;
}

export type DestroySshKeyResponse = IResponse<void>;

export const destroySshKey = ({
  httpClient,
}: IContext) => ({
  id,
  ssh_key_id,
}: IDestroySshKeyApiRequest): Promise<Readonly<DestroySshKeyResponse>> => {
  const path = '/account/keys';
  const url = `${path}/${ssh_key_id || id}`;

  return httpClient.delete(url);
};
