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
  const path = '/firewalls';
  const body = {tags};
  const url = `${path}/${firewall_id}/tags`;

  return httpClient.delete(url, {data: body});
};
