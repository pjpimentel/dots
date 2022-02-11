import { IRegion } from '../../region';

/// volume/block storage raw
export interface IVolume {
  created_at: string;
  description: string;
  droplet_ids: number[];
  filesystem_label: string;
  filesystem_type: string;
  id: string;
  name: string;
  region: IRegion;
  size_gigabytes: number;
  tags: string[];
}
