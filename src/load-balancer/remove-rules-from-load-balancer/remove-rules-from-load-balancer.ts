import { IResponse, IContext } from '../../types';
import { IForwardingRule } from '..';

export interface IRemoveRulesFromLoadBalancerApiRequest {
  forwarding_rules: IForwardingRule[]
  load_balancer_id: string;
}

export type RemoveRulesFromLoadBalancerResponse = IResponse<void>;

export const removeRulesFromLoadBalancer = ({
  httpClient,
}: IContext) => ({
  forwarding_rules,
  load_balancer_id,
}: IRemoveRulesFromLoadBalancerApiRequest): Promise<Readonly<RemoveRulesFromLoadBalancerResponse>> => {
  const url = `/load_balancers/${load_balancer_id}/forwarding_rules`;
  const body = {forwarding_rules};

  return httpClient.delete(url, {data: body});
};
