import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { ISshKey } from '..';

export interface IListSshKeysApiResponse extends IListResponse {
  ssh_keys: ISshKey[];
}

export type ListSshKeysResponse = IResponse<IListSshKeysApiResponse>;

export const listSshKeys = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListSshKeysResponse>> => {
  const path = '/account/keys';
  const query_params = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListSshKeysApiResponse>(url, {params: query_params});
};
