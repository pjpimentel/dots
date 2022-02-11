import { IResponse, IContext } from '../../types';
import { ITagResourcePayload } from '..';

export interface IUntagResourcesApiRequest {
  tag_name: string;
  resources: ITagResourcePayload[];
}

export type UntagResourcesResponse = IResponse<void>;

export const untagResources = ({
  httpClient,
}: IContext) => ({
  tag_name,
  resources,
}: IUntagResourcesApiRequest): Promise<Readonly<UntagResourcesResponse>> => {
  const path = '/tags';
  const body = {resources};
  const url = `${path}/${tag_name}/resources`;

  return httpClient.delete<void>(url, {data: body});
};
