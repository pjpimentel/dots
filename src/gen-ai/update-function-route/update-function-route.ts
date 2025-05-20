import { IContext, IResponse } from '../../types';
import { IGenAiAgentFunctionRoute, IGenAiAgentFunctionRouteUpdateRequest } from '..';

export interface IUpdateFunctionRouteApiResponse {
  function_route: IGenAiAgentFunctionRoute;
}

export interface IUpdateFunctionRouteApiRequest {
  agent_uuid: string;
  function_route_id: string;
  updates: IGenAiAgentFunctionRouteUpdateRequest;
}

export type UpdateFunctionRouteResponse = IResponse<IUpdateFunctionRouteApiResponse>;

export const updateFunctionRoute = ({ httpClient }: IContext) => (
  { agent_uuid, function_route_id, updates }: IUpdateFunctionRouteApiRequest,
): Promise<Readonly<UpdateFunctionRouteResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/functions/${function_route_id}`;
  return httpClient.put<IUpdateFunctionRouteApiResponse>(url, updates);
}; 