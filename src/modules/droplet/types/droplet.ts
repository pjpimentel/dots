import { IKernel, INetwork } from '.';
import { ISize } from '../../size';
import { IRegion } from '../../region';
import { IImage } from '../../image';

export type DropletStatus = 'new' | 'active' | 'off' | 'archive';
export interface IDroplet {
  id: number;
  name: string;
  memory: number;
  vcpus: number;
  disk: number;
  locked: boolean;
  status: DropletStatus | string;
  kernel: IKernel;
  created_at: string;
  backup_ids: string[];
  next_backup_window: object; // TODO: IBackupWindow
  snapshot_ids: string[];
  image: IImage | string | number;
  volume_ids: string[];
  size: ISize;
  size_slug: string;
  networks:	INetwork;
  region: IRegion;
  features: string[];
  tags: string[]; 
}
