import { IContext, IResponse } from '../../types';
import { IGenAiAgentFunctionRoute, IGenAiAgentFunctionRouteCreateRequest } from '..';

export interface IAttachFunctionRouteApiResponse {
  function_route: IGenAiAgentFunctionRoute;
}

export interface IAttachFunctionRouteApiRequest {
  agent_uuid: string;
  function_route: IGenAiAgentFunctionRouteCreateRequest;
}

export type AttachFunctionRouteResponse = IResponse<IAttachFunctionRouteApiResponse>;

export const attachFunctionRoute = ({ httpClient }: IContext) => (
  { agent_uuid, function_route }: IAttachFunctionRouteApiRequest,
): Promise<Readonly<AttachFunctionRouteResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/functions`;
  const body = {
    agent_uuid,
    ...function_route
  };
  return httpClient.post<IAttachFunctionRouteApiResponse>(url, body);
}; 