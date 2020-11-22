export type CertificateState = "pending" | "verified" | "error";
export interface ICertificate{
  dns_names: string[];
  id: string;
  name: string;
  type: string | 'custom' | 'lets_encrypt';
  not_after: string;
  sha1_fingerprint: string;
  created_at: string;
  state: CertificateState | string;
}
