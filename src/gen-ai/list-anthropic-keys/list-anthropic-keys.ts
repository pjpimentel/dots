import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAnthropicKey } from '..';

export interface IListAnthropicKeysApiResponse extends IListResponse {
  anthropic_keys: IGenAiAnthropicKey[];
}

export type ListAnthropicKeysResponse = IResponse<IListAnthropicKeysApiResponse>;

export const listAnthropicKeys = ({ httpClient }: IContext) => (): Promise<Readonly<ListAnthropicKeysResponse>> => {
  const url = '/gen-ai/anthropic/keys';
  return httpClient.get<IListAnthropicKeysApiResponse>(url);
}; 