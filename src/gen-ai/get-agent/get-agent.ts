import { IResponse, IContext } from '../../types';
import { IGenAiAgent } from '..';

export interface IGetAgentApiResponse {
  agent: IGenAiAgent;
}

export interface IGetAgentApiRequest {
  agent_uuid: string;
}

export type GetAgentResponse = IResponse<IGetAgentApiResponse>;

export const getAgent = ({ httpClient }: IContext) => ({ agent_uuid }: IGetAgentApiRequest): Promise<Readonly<GetAgentResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}`;
  return httpClient.get<IGetAgentApiResponse>(url);
};
