export interface ICdnEndpoint{
  id: string;
  origin: string;
  endpoint: string;
  created_at: string;
  certificate_id: string;
  custom_domain: string;
  ttl: number;
}
