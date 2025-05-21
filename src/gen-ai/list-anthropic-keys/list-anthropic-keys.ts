import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAnthropicKey } from '..';

export interface IListAnthropicKeysApiResponse extends IListResponse {
  anthropic_keys: IGenAiAnthropicKey[];
}

export type ListAnthropicKeysResponse = IResponse<IListAnthropicKeysApiResponse>;

export const listAnthropicKeys = ({ httpClient }: IContext) => (
  { page = 1, per_page = 25 }: { page?: number; per_page?: number } = {},
): Promise<Readonly<ListAnthropicKeysResponse>> => {
  const url = '/gen-ai/anthropic/keys';
  const params = { page, per_page };
  return httpClient.get<IListAnthropicKeysApiResponse>(url, { params });
};
