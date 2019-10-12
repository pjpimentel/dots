interface IForwardingRule {
  certificate_id?: string;
  entry_port: number;
  entry_protocol: string;
  target_port: number;
  target_protocol: 'http' | 'https' | 'http2' | 'tcp' | string;
  tls_passthrough?: boolean;
}