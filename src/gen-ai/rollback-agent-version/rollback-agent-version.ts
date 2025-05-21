import { IContext, IResponse } from '../../types';
import { IGenAiAgent } from '..';

/**
 * Experimental: The agent version APIs are not yet part of the stable public
 * documentation and may change without notice.
 */

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
  return httpClient.put<IRollbackAgentVersionApiResponse>(url, body);
};
