import { IResponse, IContext } from '../../../types';
import { ISshKey } from '..';

export interface IGetSshKeyApiResponse {
  ssh_key: ISshKey;
}

export interface IGetSshKeyApiRequest {
  id?: number | string;
  ssh_key_id: string | number;
}

export type GetSshKeyResponse = IResponse<IGetSshKeyApiResponse>;

export const getSshKey = ({
  httpClient,
}: IContext) => ({
  id,
  ssh_key_id,
}: IGetSshKeyApiRequest): Promise<Readonly<GetSshKeyResponse>> => {
  const path = '/account/keys';
  const url = `${path}/${ssh_key_id || id}`;

  return httpClient.get<IGetSshKeyApiResponse>(url);
};
