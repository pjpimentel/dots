import { IAppSpecService } from ".";

export interface IAppSpec {
  name: string;
  services: IAppSpecService[];
  region: string;
}
