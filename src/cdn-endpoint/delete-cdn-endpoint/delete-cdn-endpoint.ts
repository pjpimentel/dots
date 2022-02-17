import { IResponse, IContext } from '../../types';

export interface IDeleteCdnEndpointApiRequest {
  cdn_endpoint_id: string;
}

export type DeleteCdnEndpointResponse = IResponse<void>;

export const deleteCdnEndpoint = ({
  httpClient,
}: IContext) => ({
  cdn_endpoint_id,
}: IDeleteCdnEndpointApiRequest): Promise<Readonly<DeleteCdnEndpointResponse>> => {
  const path = '/cdn/endpoints';
  const url = `${path}/${cdn_endpoint_id}`;

  return httpClient.delete(url);
};
