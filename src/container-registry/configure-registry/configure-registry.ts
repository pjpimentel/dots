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
  const url = '/registry';
  const body = {name};

  return httpClient.post<IConfigureRegistryApiResponse>(url, body);
};
