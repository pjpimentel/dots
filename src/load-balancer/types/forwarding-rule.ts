export type ForwardingRuleProtocol = 'http' | 'https' | 'http2' | 'tcp';
export interface IForwardingRule {
  certificate_id?: string;
  entry_port: number;
  entry_protocol: string;
  target_port: number;
  target_protocol: ForwardingRuleProtocol | string;
  tls_passthrough?: boolean;
}
