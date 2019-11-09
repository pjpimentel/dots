/// Image raw object
export interface IImage {
  created_at: string;
  description: string;
  distribution: string;
  error_message: string;
  id: number;
  min_disk_size: number;
  name: string;
  public: boolean;
  regions: string[];
  size_gigabytes: number;
  slug: string | null;
  status: "NEW" | "available" | "pending" | "deleted" | string;
  tags: string[];
  type: "snapshot" | "backup" | "custom" | string;
}
