import { IDroplet } from '../../droplet';
import { IRegion } from '../../region';

export interface IFloatingIP {
  droplet: IDroplet | null;
  ip: string;
  region: IRegion;
}
