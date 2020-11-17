import { IResponse, IContext } from '../../../types';
import { IApp } from '..';

export interface ICreateAppApiResponse {
  app: IApp;
}

export interface ICreateAppApiRequest {
  spec: Partial<IAppSpec>;
}

export type CreateAppResponse = IResponse<ICreateAppApiResponse>;

export const createApp = ({
  httpClient,
}: IContext) => ({
  spec,
}: ICreateAppApiRequest): Promise<Readonly<CreateAppResponse>> => {
  const path = '/apps';
  const body = {spec};
  const url = `${path}`;

  return httpClient.post<ICreateAppApiResponse>(url, body);
};
