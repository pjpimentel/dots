import { IResponse, IContext } from '../../types';

export interface IAddTagsToFirewallApiRequest {
  firewall_id: string;
  tags: string[];
}

export type AddTagsToFirewallResponse = IResponse<void>;

export const addTagsToFirewall = ({
  httpClient,
}: IContext) => ({
  firewall_id,
  tags,
}: IAddTagsToFirewallApiRequest): Promise<Readonly<AddTagsToFirewallResponse>> => {
  const path = '/firewalls';
  const body = {tags};
  const url = `${path}/${firewall_id}/tags`;

  return httpClient.post<void>(url, body);
};
