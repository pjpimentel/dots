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
  const url = `/firewalls/${firewall_id}/tags`;
  const body = {tags};

  return httpClient.post<void>(url, body);
};
