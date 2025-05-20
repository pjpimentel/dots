import { IContext, IResponse } from '../../types';

export interface IDeleteOpenAIKeyApiRequest {
  key_uuid: string;
}

export type DeleteOpenAIKeyResponse = IResponse<void>;

export const deleteOpenAIKey = ({ httpClient }: IContext) => (
  { key_uuid }: IDeleteOpenAIKeyApiRequest
): Promise<Readonly<DeleteOpenAIKeyResponse>> => {
  const url = `/gen-ai/openai/keys/${key_uuid}`;
  return httpClient.delete<void>(url);
}; 