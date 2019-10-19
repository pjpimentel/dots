interface IFloatingIP {
  droplet: IDroplet | null;
  ip: string;
  region: IRegion;
}