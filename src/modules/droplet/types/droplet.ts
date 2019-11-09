import { IKernel, INetwork } from '.';
import { ISize } from '../../size';

/// droplet raw objecet
export interface IDroplet {
  backup_ids: string[];
  created_at: string;
  disk: number;
  features: string[];
  id: number;
  image: string | number;
  kernel: IKernel;
  locked: boolean;
  memory: number;
  name: string;
  networks:	INetwork;
  next_backup_window: object; // TODO: IBackupWindow
  region: string;
  size_slug: string;
  size: ISize;
  snapshot_ids: string[];
  status: 'new' | 'active' | 'off' | 'archive' | string;
  tags: string[];
  vcpus: number;
  volume_ids: string[];
}
