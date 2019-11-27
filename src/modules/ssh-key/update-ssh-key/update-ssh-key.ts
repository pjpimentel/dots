import { IResponse, IContext } from '../../../types';
import { ISshKey } from '..';

export interface IUpdateSshKeyApiResponse {
  ssh_key: ISshKey;
}

export interface IUpdateSshKeyApiRequest {
  id?: string | number;
  name: string;
  ssh_key_id: string | number;
}

export type UpdateSshKeyResponse = IResponse<IUpdateSshKeyApiResponse>;

export const updateSshKey = ({
  httpClient,
}: IContext) => ({
  id,
  name,
  ssh_key_id,
}: IUpdateSshKeyApiRequest): Promise<Readonly<UpdateSshKeyResponse>> => {
  const path = '/account/keys';
  const body = {
    name,
  };
  const url = `${path}/${ssh_key_id || id}`;

  return httpClient.put<IUpdateSshKeyApiResponse>(url, body);
};
