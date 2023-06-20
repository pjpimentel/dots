import { IResponse, IContext } from '../../types';

export interface IDestroySshKeyApiRequest {
  ssh_key_id: string | number;
}

export type DestroySshKeyResponse = IResponse<void>;

export const destroySshKey = ({
  httpClient,
}: IContext) => ({
  ssh_key_id,
}: IDestroySshKeyApiRequest): Promise<Readonly<DestroySshKeyResponse>> => {
  const url = `/account/keys/${ssh_key_id}`;

  return httpClient.delete(url);
};
