export interface IGenAiAgentApiKey {
  uuid: string;
  name?: string;
  key?: string;
  secret_key?: string;
  created_at?: string;
  created_by?: string;
}

export interface IGenAiAgentApiKeyCreateRequest {
  name?: string;
}
