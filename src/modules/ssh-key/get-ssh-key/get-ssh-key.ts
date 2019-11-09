import { IResponse, IContext } from '../../../types';
import { ISshKey } from '..';

export interface IGetSshKeyApiResponse {
  ssh_key: ISshKey;
}

export interface IGetSshKeyApiRequest {
  id: number | string;
}

export type GetSshKeyResponse = IResponse<IGetSshKeyApiResponse>;

export const getSshKey = ({
  httpClient,
}: IContext) => ({
  id,
}: IGetSshKeyApiRequest): Promise<Readonly<GetSshKeyResponse>> => {
  const path = '/account/keys';
  const url = `${path}/${id}`;

  return httpClient.get<IGetSshKeyApiResponse>(url);
};
