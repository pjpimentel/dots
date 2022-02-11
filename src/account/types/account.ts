/// Account raw object
export interface IAccount {
  droplet_limit: number;
  email_verified: boolean;
  email: string;
  floating_ip_limit: number;
  status_message: string;
  status: string;
  uuid: string;
}
