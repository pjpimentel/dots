import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAgentFunctionRoute } from '..';

export interface IListFunctionRoutesApiResponse extends IListResponse {
  function_routes: IGenAiAgentFunctionRoute[];
}

export interface IListFunctionRoutesApiRequest {
  agent_uuid: string;
}

export type ListFunctionRoutesResponse = IResponse<IListFunctionRoutesApiResponse>;

export const listFunctionRoutes = ({ httpClient }: IContext) => (
  { agent_uuid }: IListFunctionRoutesApiRequest,
): Promise<Readonly<ListFunctionRoutesResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/functions`;
  return httpClient.get<IListFunctionRoutesApiResponse>(url);
}; 