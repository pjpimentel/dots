/// Droplet raw object.
interface IDroplet {
  backup_ids: string[];
  created_at: string;
  disk: number;
  features: string[];
  id: number;
  image: IImage;
  kernel: IKernel | null;
  locked: boolean;
  memory: number;
  name: string;
  networks: object;
  next_backup_window: object | null; // TODO: get object spec
  region: IRegion;
  size_slug: string;
  size: ISize;
  snapshot_ids: string[];
  status: DropletStatus;
  tags: string[];
  vcpus: number;
  volume_ids: string[];
}
