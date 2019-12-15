export interface IDomainRecord {
  data: string;
  flags: number | null;
  id: number;
  name: string;
  port: number | null;
  priority: number | null;
  tag: string | null;
  ttl: number;
  type: string;
  weight: number | null;
}
