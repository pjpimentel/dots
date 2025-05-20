import { IContext, IResponse } from '../../types';

export interface IDeleteAnthropicKeyApiRequest {
  key_uuid: string;
}

export type DeleteAnthropicKeyResponse = IResponse<void>;

export const deleteAnthropicKey = ({ httpClient }: IContext) => (
  { key_uuid }: IDeleteAnthropicKeyApiRequest
): Promise<Readonly<DeleteAnthropicKeyResponse>> => {
  const url = `/gen-ai/anthropic/keys/${key_uuid}`;
  return httpClient.delete<void>(url);
}; 