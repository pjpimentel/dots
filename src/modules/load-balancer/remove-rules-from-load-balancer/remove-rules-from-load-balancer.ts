import { IResponse, IContext } from '../../../types';
import { IForwardingRule } from '..';

export interface IRemoveRulesFromLoadBalancerApiRequest {
  forwarding_rules: IForwardingRule[]
  load_balancer_id: string;
  id?: string; /// deprecated will be removed in future versions
}

export type RemoveRulesFromLoadBalancerResponse = IResponse<void>;

export const removeRulesFromLoadBalancer = ({
  httpClient,
}: IContext) => ({
  forwarding_rules,
  id,
  load_balancer_id,
}: IRemoveRulesFromLoadBalancerApiRequest): Promise<Readonly<RemoveRulesFromLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {forwarding_rules};
  const url = `${path}/${load_balancer_id || id}/forwarding_rules`;

  return httpClient.delete(url, {data: body});
};
