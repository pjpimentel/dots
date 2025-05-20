export interface IGenAiExternalApiKey {
  uuid: string;
  name?: string;
  created_at?: string;
  last_used_at?: string;
}

export interface IGenAiOpenAIKey extends IGenAiExternalApiKey {
  models?: string[];
}

export interface IGenAiAnthropicKey extends IGenAiExternalApiKey {
  // Anthropic-specific fields would go here
}

export interface IGenAiExternalApiKeyCreateRequest {
  api_key: string;
  name?: string;
}

export interface IGenAiExternalApiKeyUpdateRequest {
  name?: string;
  enabled?: boolean;
} 