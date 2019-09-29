/// snapshot raw object
interface ISnapshot {
  created_at: string;
  id: string;
  min_disk_size: number;
  name: string;
  regions: string[];
  resource_id: string;
  resource_type: string;
  size_gigabytes: number;
  tags: string[];
}