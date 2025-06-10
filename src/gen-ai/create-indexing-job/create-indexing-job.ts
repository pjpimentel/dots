import { IContext, IResponse } from '../../types';
import { IGenAiIndexingJob } from '..';

export interface ICreateIndexingJobApiResponse {
  indexing_job: IGenAiIndexingJob;
}

export interface ICreateIndexingJobApiRequest {
  knowledge_base_uuid: string;
  data_source_uuids: string[];
}

export type CreateIndexingJobResponse = IResponse<ICreateIndexingJobApiResponse>;

export const createIndexingJob = ({ httpClient }: IContext) => (
  data: ICreateIndexingJobApiRequest,
): Promise<Readonly<CreateIndexingJobResponse>> => {
  const url = `/gen-ai/indexing_jobs`;
  return httpClient.post<ICreateIndexingJobApiResponse>(url, data);
}; 