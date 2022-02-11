import { IResponse, IContext } from '../../types';
import { ICdnEndpoint } from '..';

export interface IGetCdnEndpointApiResponse {
  endpoint: ICdnEndpoint;
}

export interface IGetCdnEndpointApiRequest {
  cdn_endpoint_id: string;
}

export type GetCdnEndpointResponse = IResponse<IGetCdnEndpointApiResponse>;

export const getCdnEndpoint = ({
  httpClient,
}: IContext) => ({
  cdn_endpoint_id,
}: IGetCdnEndpointApiRequest): Promise<Readonly<GetCdnEndpointResponse>> => {
  const path = '/cdn/endpoints';
  const url = `${path}/${cdn_endpoint_id}`;

  return httpClient.get<IGetCdnEndpointApiResponse>(url);
};
