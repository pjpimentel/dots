import { AxiosInstance } from 'axios';

export interface IRemoveRulesFromLoadBalancerApiRequest {
  forwarding_rules: IForwardingRule[]
  id: string;
}

export type RemoveRulesFromLoadBalancerResponse = IResponse<void>;

export const removeRulesFromLoadBalancer = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  forwarding_rules,
  id,
}: IRemoveRulesFromLoadBalancerApiRequest): Promise<Readonly<RemoveRulesFromLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {forwarding_rules};
  const url = `${path}/${id}/forwarding_rules`;

  return httpClient.delete(url, {data: body});
};
