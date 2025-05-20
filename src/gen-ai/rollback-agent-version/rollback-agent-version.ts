import { IContext, IResponse } from '../../types';
import { IGenAiAgent } from '..';

export interface IRollbackAgentVersionApiResponse {
  agent: IGenAiAgent;
}

export interface IRollbackAgentVersionApiRequest {
  agent_uuid: string;
  version_uuid: string;
}

export type RollbackAgentVersionResponse = IResponse<IRollbackAgentVersionApiResponse>;

export const rollbackAgentVersion = ({ httpClient }: IContext) => (
  { agent_uuid, version_uuid }: IRollbackAgentVersionApiRequest,
): Promise<Readonly<RollbackAgentVersionResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/versions/${version_uuid}/rollback`;
  const body = { uuid: version_uuid };
  return httpClient.post<IRollbackAgentVersionApiResponse>(url, body);
}; 