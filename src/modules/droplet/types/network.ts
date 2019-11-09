import { INetworkInterface } from '.';

export interface INetwork{
  v4: INetworkInterface[];
  v6: INetworkInterface[];
}
