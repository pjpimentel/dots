import { IContext, IResponse } from '../../types';

export interface IDetachFunctionRouteApiRequest {
  agent_uuid: string;
  function_route_id: string;
}

export type DetachFunctionRouteResponse = IResponse<void>;

export const detachFunctionRoute = ({ httpClient }: IContext) => (
  { agent_uuid, function_route_id }: IDetachFunctionRouteApiRequest,
): Promise<Readonly<DetachFunctionRouteResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/functions/${function_route_id}`;
  return httpClient.delete<void>(url);
}; 