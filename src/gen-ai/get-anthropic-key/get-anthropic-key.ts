import { IContext, IResponse } from '../../types';
import { IGenAiAnthropicKey } from '..';

export interface IGetAnthropicKeyApiResponse {
  anthropic_key: IGenAiAnthropicKey;
}

export interface IGetAnthropicKeyApiRequest {
  key_uuid: string;
}

export type GetAnthropicKeyResponse = IResponse<IGetAnthropicKeyApiResponse>;

export const getAnthropicKey = ({ httpClient }: IContext) => (
  { key_uuid }: IGetAnthropicKeyApiRequest
): Promise<Readonly<GetAnthropicKeyResponse>> => {
  const url = `/gen-ai/anthropic/keys/${key_uuid}`;
  return httpClient.get<IGetAnthropicKeyApiResponse>(url);
}; 