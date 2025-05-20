export interface IGenAiIndexingJob {
  uuid: string;
  knowledge_base_uuid: string;
  status: string;
  created_at?: string;
  completed_at?: string;
} 