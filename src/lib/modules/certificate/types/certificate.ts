/// Certificate raw object.
interface ICertificate {
  created_at: string;
  dns_names: string[];
  id: string;
  name: string;
  not_after: string;
  sha1_fingerprint: string;
  state: string;
  type: string;
}
