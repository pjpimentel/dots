interface IDomainRecord {
  data: string;
  flags: number;
  id: number;
  name: string;
  port: number | null;
  priority: number | null;
  tag: string;
  ttl: number;
  type: string;
  weight: number | null;
}