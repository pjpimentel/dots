import { IResponse, IContext } from '../../../types';
import { ISshKey } from '..';

export interface IUpdateSshKeyApiResponse {
  ssh_key: ISshKey;
}

export interface IUpdateSshKeyApiRequest {
  name: string;
  ssh_key_id: string | number;
}

export type UpdateSshKeyResponse = IResponse<IUpdateSshKeyApiResponse>;

export const updateSshKey = ({
  httpClient,
}: IContext) => ({
  name,
  ssh_key_id,
}: IUpdateSshKeyApiRequest): Promise<Readonly<UpdateSshKeyResponse>> => {
  const path = '/account/keys';
  const body = {
    name,
  };
  const url = `${path}/${ssh_key_id}`;

  return httpClient.put<IUpdateSshKeyApiResponse>(url, body);
};
