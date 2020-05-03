import { IResponse, IContext, IListRequest, IListResponse } from '../../../types';
import { IVpcResource } from '../types';

export interface IListVpcResourcesApiResponse extends IListResponse {
  members: IVpcResource[];
}

export interface IListVpcResourcesApiRequest extends IListRequest {
  resource_type?: string;
  vpc_id: string;
}

export type ListVpcResourcesResponse = IResponse<IListVpcResourcesApiResponse>;

export const listVpcResources = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  resource_type,
  vpc_id,
}: IListVpcResourcesApiRequest): Promise<Readonly<ListVpcResourcesResponse>> => {
  const path = '/vpcs';
  const queryParams = {page, per_page, resource_type};
  const url = `${path}/${vpc_id}/members`;

  return httpClient.get<IListVpcResourcesApiResponse>(url, {params: queryParams});
};
