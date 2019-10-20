import { AxiosInstance } from 'axios';

export interface ITagResourcesApiRequest {
  tag_name: string;
  resources: ITagResourcePayload[];
}

export type TagResourcesResponse = IResponse<void>;

export const tagResources = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  tag_name,
  resources,
}: ITagResourcesApiRequest): Promise<Readonly<TagResourcesResponse>> => {
  const path = '/tags';
  const body = {resources};
  const url = `${path}/${tag_name}/resources`;

  return httpClient.post<void>(url, body);
};
