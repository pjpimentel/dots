import { IResponse, IContext } from '../../types';
import { ITagResourcePayload } from '..';

export interface ITagResourcesApiRequest {
  tag_name: string;
  resources: ITagResourcePayload[];
}

export type TagResourcesResponse = IResponse<void>;

export const tagResources = ({
  httpClient,
}: IContext) => ({
  tag_name,
  resources,
}: ITagResourcesApiRequest): Promise<Readonly<TagResourcesResponse>> => {
  const path = '/tags';
  const body = {resources};
  const url = `${path}/${tag_name}/resources`;

  return httpClient.post<void>(url, body);
};
