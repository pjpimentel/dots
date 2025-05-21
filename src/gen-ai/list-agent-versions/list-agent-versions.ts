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
  page?: number;
  per_page?: number;
}

export type ListAgentVersionsResponse = IResponse<IListAgentVersionsApiResponse>;

export const listAgentVersions = ({ httpClient }: IContext) => (
  { agent_uuid, page = 1, per_page = 25 }: IListAgentVersionsApiRequest,
): Promise<Readonly<ListAgentVersionsResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/versions`;
  const params = { page, per_page };
  return httpClient.get<IListAgentVersionsApiResponse>(url, { params });
};
