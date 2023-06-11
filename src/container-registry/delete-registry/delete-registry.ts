import { IResponse, IContext } from '../../types';

export type DeleteRegistryResponse = IResponse<void>;

export const deleteRegistry = ({
  httpClient,
}: IContext) => (): Promise<Readonly<DeleteRegistryResponse>> => {
  const url = '/registry';

  return httpClient.delete(url);
};
