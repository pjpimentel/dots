import { IResponse, IContext } from '../../types';

export interface IGetDockerCredentialsApiRequest {
  can_write?: boolean;
  expiry_seconds?: number;
}

export interface IGetDockerCredentialsApiResponse {
  [key: string]: any;
}

export type GetDockerCredentialsResponse = IResponse<IGetDockerCredentialsApiResponse>;

export const getDockerCredentials = ({
  httpClient,
}: IContext) => ({
  can_write = false,
  expiry_seconds,
}: IGetDockerCredentialsApiRequest): Promise<Readonly<GetDockerCredentialsResponse>> => {
  const path = '/registry/docker-credentials';
  const query_params = {
    expiry_seconds,
    read_write: can_write,
  };
  const url = `${path}`;

  return httpClient.get<IGetDockerCredentialsApiResponse>(url, {params: query_params});
};
