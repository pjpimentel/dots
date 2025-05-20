import { IResponse, IContext } from '../../types';

export interface IDeleteAgentKeyApiRequest {
  agent_uuid: string;
  api_key_uuid: string;
}

export type DeleteAgentKeyResponse = IResponse<void>;

export const deleteAgentKey = ({ httpClient }: IContext) => ({ agent_uuid, api_key_uuid }: IDeleteAgentKeyApiRequest): Promise<Readonly<DeleteAgentKeyResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/api_keys/${api_key_uuid}`;
  return httpClient.delete<void>(url);
};
