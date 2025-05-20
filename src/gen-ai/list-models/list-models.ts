import { IResponse, IListRequest, IListResponse, IContext } from '../../types';
import { IGenAiModel } from '..';

export interface IListModelsApiResponse extends IListResponse {
  models: IGenAiModel[];
}

export interface IListModelsApiRequest extends IListRequest {
  use_case?: string;
}

export type ListModelsResponse = IResponse<IListModelsApiResponse>;

export const listModels = ({ httpClient }: IContext) => ({ page = 1, per_page = 25, use_case }: IListModelsApiRequest = {}): Promise<Readonly<ListModelsResponse>> => {
  const url = '/gen-ai/models';
  const params: any = { page, per_page };
  if (use_case) {
    params.usecases = use_case;
  }

  return httpClient.get<IListModelsApiResponse>(url, { params });
};
