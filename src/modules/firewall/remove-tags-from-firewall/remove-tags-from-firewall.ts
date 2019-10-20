import { AxiosInstance } from 'axios';

export interface IRemoveTagsFromFirewallApiRequest {
  id: string;
  tags: string[];
}

export type RemoveTagsFromFirewallResponse = IResponse<void>;

export const removeTagsFromFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  tags,
}: IRemoveTagsFromFirewallApiRequest): Promise<Readonly<RemoveTagsFromFirewallResponse>> => {
  const path = '/firewalls';
  const body = {tags};
  const url = `${path}/${id}/tags`;

  return httpClient.delete(url, {data: body});
};
