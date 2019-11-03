import { IResponse, IContext } from '../../../types';
import { ISshKey } from '..';

export interface IUpdateSshKeyApiResponse {
  ssh_key: ISshKey;
}

export interface IUpdateSshKeyApiRequest {
  id: string | number;
  name: string;
}

export type UpdateSshKeyResponse = IResponse<IUpdateSshKeyApiResponse>;

export const updateSshKey = ({
  httpClient,
}: IContext) => ({
  name,
  id,
}: IUpdateSshKeyApiRequest): Promise<Readonly<UpdateSshKeyResponse>> => {
  const path = '/account/keys';
  const body = {
    name,
  };
  const url = `${path}/${id}`;

  return httpClient.put<IUpdateSshKeyApiResponse>(url, body);
};
