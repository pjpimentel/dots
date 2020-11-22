export type ImageStatus = "NEW" | "available" | "pending" | "deleted";
export type ImageType = "snapshot" | "backup" | "custom" ;
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
  status: ImageStatus | string;
  tags: string[];
  type: ImageType | string;
}
