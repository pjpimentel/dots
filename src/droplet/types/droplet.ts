import { IKernel, INetwork } from '.';
import { ISize } from '../../size';
import { IRegion } from '../../region';
import { IImage } from '../../image';

export type DropletStatus = 'new' | 'active' | 'off' | 'archive';
export interface IDroplet {
  backup_ids: string[];
  created_at: string;
  disk: number;
  features: string[];
  id: number;
  image: IImage | string | number;
  kernel: IKernel;
  locked: boolean;
  memory: number;
  name: string;
  networks:	INetwork;
  next_backup_window: object; // TODO: IBackupWindow
  region: IRegion | string;
  size_slug: string;
  size: ISize;
  snapshot_ids: string[];
  status: DropletStatus | string;
  tags: string[];
  vcpus: number;
  volume_ids: string[];
  vpc_uuid: string;
}
