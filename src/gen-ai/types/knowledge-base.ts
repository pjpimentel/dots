import { IGenAiDataSourceSpec } from "./data-source";
export interface IGenAiKnowledgeBase {
  uuid: string;
  name: string;
  embedding_model_uuid: string;
  project_id: string;
  region: string;
  database_id: string;
  status?: string;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface IGenAiKnowledgeBaseCreateRequest {
  name: string;
  embedding_model_uuid: string;
  project_id: string;
  region: string;
  tags?: string[];
  database_id?: string;
  vpc_uuid?: string;
  datasources?: IGenAiDataSourceSpec[];
}

export interface IGenAiKnowledgeBaseUpdateRequest {
  name?: string;
  tags?: string[];
} 