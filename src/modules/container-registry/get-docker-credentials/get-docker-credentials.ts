import { IResponse, IContext } from '../../../types';

export interface IGetDockerCredentialsApiRequest {
  can_write?: boolean;
}

export interface IGetDockerCredentialsApiResponse {
  [key: string]: any;
}

export type GetDockerCredentialsResponse = IResponse<IGetDockerCredentialsApiResponse>;

export const getDockerCredentials = ({
  httpClient,
}: IContext) => ({
  can_write = false,
}: IGetDockerCredentialsApiRequest): Promise<Readonly<GetDockerCredentialsResponse>> => {
  const path = '/registry/docker-credentials';
  const queryParams = {read_write: can_write};
  const url = `${path}`;

  return httpClient.get<IGetDockerCredentialsApiResponse>(url, {params: queryParams});
};
