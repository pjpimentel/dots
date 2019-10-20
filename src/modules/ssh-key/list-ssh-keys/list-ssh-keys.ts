import { AxiosInstance } from 'axios';

export interface IListSshKeysApiResponse extends IListResponse {
  ssh_keys: ISshKey[];
}

export type ListSshKeysResponse = IResponse<IListSshKeysApiResponse>;

export const listSshKeys = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListSshKeysResponse>> => {
  const path = '/account/keys';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListSshKeysApiResponse>(url, {params: queryParams});
};
