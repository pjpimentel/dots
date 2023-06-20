import { IResponse, IContext } from '../../types';
import { IApp, IAppSpec } from '..';

export interface ICreateAppApiResponse {
  app: IApp;
}

export interface ICreateAppApiRequest {
  project_id?: string;
  spec: Partial<IAppSpec>;
}

export type CreateAppResponse = IResponse<ICreateAppApiResponse>;

export const createApp = ({
  httpClient,
}: IContext) => ({
  project_id,
  spec,
}: ICreateAppApiRequest): Promise<Readonly<CreateAppResponse>> => {
  const url = '/apps';
  const body = {project_id, spec};

  return httpClient.post<ICreateAppApiResponse>(url, body);
};
