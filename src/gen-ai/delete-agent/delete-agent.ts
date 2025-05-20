import { IResponse, IContext } from '../../types';

export interface IDeleteAgentApiRequest {
  agent_uuid: string;
}

export type DeleteAgentResponse = IResponse<void>;

export const deleteAgent = ({ httpClient }: IContext) => ({ agent_uuid }: IDeleteAgentApiRequest): Promise<Readonly<DeleteAgentResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}`;
  return httpClient.delete<void>(url);
};
