import { IResponse, IContext } from '../../types';
import { IContainerRegistry } from '..';

export interface IConfigureRegistryApiResponse {
  registry: IContainerRegistry;
}

export interface IConfigureRegistryApiRequest {
  name: string;
}

export type ConfigureRegistryResponse = IResponse<IConfigureRegistryApiResponse>;

export const configureRegistry = ({
  httpClient,
}: IContext) => ({
  name,
}: IConfigureRegistryApiRequest): Promise<Readonly<ConfigureRegistryResponse>> => {
  const path = '/registry';
  const body = {name};
  const url = `${path}`;

  return httpClient.post<IConfigureRegistryApiResponse>(url, body);
};
