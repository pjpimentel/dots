export interface IGenAiAgent {
  uuid: string;
  name: string;
  model_uuid?: string;
  instruction?: string;
  description?: string;
  project_id?: string;
  region?: string;
  knowledge_base_uuids?: string[];
  tags?: string[];
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IGenAiAgentCreateRequest {
  name: string;
  model_uuid: string;
  instruction: string;
  project_id: string;
  region: string;
  description?: string;
  tags?: string[];
  knowledge_base_uuids?: string[];
}

export interface IGenAiAgentUpdateRequest {
  name?: string;
  instruction?: string;
  description?: string;
  tags?: string[];
}

export interface IGenAiAgentFunctionRoute {
  agent_uuid: string;
  function_id?: string;
  function_name: string;
  description?: string;
  input_schema?: object;
  output_schema?: object;
  faas_namespace: string;
  faas_name: string;
  url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IGenAiAgentFunctionRouteCreateRequest {
  function_name: string;
  description?: string;
  input_schema?: object;
  output_schema?: object;
  faas_namespace: string;
  faas_name: string;
}

export interface IGenAiAgentFunctionRouteUpdateRequest {
  description?: string;
  input_schema?: object;
  output_schema?: object;
}

export interface IGenAiAgentRoute {
  parent_agent_uuid: string;
  child_agent_uuid: string;
  route_name: string;
  if_case: string;
  created_at?: string;
  updated_at?: string;
}

export interface IGenAiAgentRouteCreateRequest {
  route_name: string;
  if_case: string;
}

export interface IGenAiAgentRouteUpdateRequest {
  route_name?: string;
  if_case?: string;
}

export interface IGenAiAgentDeploymentVisibility {
  visibility: 'VISIBILITY_PUBLIC' | 'VISIBILITY_PRIVATE';
}

export interface IGenAiAgentVersion {
  uuid: string;
  agent_uuid: string;
  version: number;
  created_at: string;
  created_by?: string;
}
