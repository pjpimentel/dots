import { AxiosInstance } from 'axios';

export interface IAddTagsToFirewallApiRequest {
  id: string;
  tags: string[];
}

export type AddTagsToFirewallResponse = IResponse<void>;

export const addTagsToFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  tags,
}: IAddTagsToFirewallApiRequest): Promise<Readonly<AddTagsToFirewallResponse>> => {
  const path = '/firewalls';
  const body = {tags};
  const url = `${path}/${id}/tags`;

  return httpClient.post<void>(url, body);
};
