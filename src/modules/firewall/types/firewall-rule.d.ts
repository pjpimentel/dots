interface IFirewallRule {
  ports: string;
  protocol: string | 'tcp' | 'udp' | 'icmp';
}