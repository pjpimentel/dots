import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAgentVersion } from '..';

/**
 * Experimental: The agent version APIs are not yet part of the stable public
 * documentation and may change without notice.
 */

export interface IListAgentVersionsApiResponse extends IListResponse {
  versions: IGenAiAgentVersion[];
}

export interface IListAgentVersionsApiRequest {
  agent_uuid: string;
}

export type ListAgentVersionsResponse = IResponse<IListAgentVersionsApiResponse>;

export const listAgentVersions = ({ httpClient }: IContext) => (
  { agent_uuid }: IListAgentVersionsApiRequest,
): Promise<Readonly<ListAgentVersionsResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/versions`;
  return httpClient.get<IListAgentVersionsApiResponse>(url);
}; 