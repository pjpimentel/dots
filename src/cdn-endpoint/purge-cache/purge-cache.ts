import { IResponse, IContext } from '../../types';

export interface IPurgeCacheApiRequest {
  cdn_endpoint_id: string;
  files: string[];
}

export type PurgeCacheResponse = IResponse<void>;

export const purgeCache = ({
  httpClient,
}: IContext) => ({
  cdn_endpoint_id,
  files,
}: IPurgeCacheApiRequest): Promise<Readonly<PurgeCacheResponse>> => {
  const url = `/cdn/endpoints/${cdn_endpoint_id}/cache`;
  const body = {files};

  return httpClient.delete(url, {data: body});
};
