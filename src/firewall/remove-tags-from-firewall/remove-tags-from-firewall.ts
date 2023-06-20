import { IResponse, IContext } from '../../types';

export interface IRemoveTagsFromFirewallApiRequest {
  firewall_id: string;
  tags: string[];
}

export type RemoveTagsFromFirewallResponse = IResponse<void>;

export const removeTagsFromFirewall = ({
  httpClient,
}: IContext) => ({
  firewall_id,
  tags,
}: IRemoveTagsFromFirewallApiRequest): Promise<Readonly<RemoveTagsFromFirewallResponse>> => {
  const body = {tags};
  const url = `/firewalls/${firewall_id}/tags`;

  return httpClient.delete(url, {data: body});
};
