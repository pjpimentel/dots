// import {createApiClient} from './create-api-client';

describe.skip('utils', () => {
  it('test', () => expect(0).toBe(0));
//   describe('create-api-client', () => {
//     it('should be a fn', () => {
//       expect(typeof createApiClient).toBe('function');
//     });
//     it('should return valid context', () => {
//       const endpoint = 'https://api.digitalocean.com/v2/test-match';
//       const token = 'my-token';
//       const requestTimeoutInMs = 2000;
//       const client = createApiClient({
//         endpoint,
//         requestTimeoutInMs,
//         token,
//       });
//       expect(client).toBeDefined();
//       /// acount
//       expect(client.account).toBeDefined();
//       expect(client.account.getAccount).toBeInstanceOf(Function);
//       /// actions
//       expect(client.action).toBeDefined();
//       expect(client.action.listActions).toBeInstanceOf(Function);
//       expect(client.action.getAction).toBeInstanceOf(Function);
//       /// block-storage
//       expect(client.blockStorage).toBeDefined();
//       expect(client.blockStorage.listVolumes).toBeInstanceOf(Function);
//       expect(client.blockStorage.createVolume).toBeInstanceOf(Function);
//       expect(client.blockStorage.getVolume).toBeInstanceOf(Function);
//       // expect(client.blockStorage.getVolumeByName).toBeInstanceOf(Function);
//       expect(client.blockStorage.listSnapshotsByVolume).toBeInstanceOf(Function);
//       expect(client.blockStorage.createSnapshot).toBeInstanceOf(Function);
//       expect(client.blockStorage.deleteVolume).toBeInstanceOf(Function);
//       // expect(client.blockStorage.deleteVolumeByName).toBeInstanceOf(Function);
//       expect(client.blockStorage.deleteSnapshot).toBeInstanceOf(Function);
//       expect(client.blockStorage.attachVolumeToDroplet).toBeInstanceOf(Function);
//       // expect(client.blockStorage.attachVolumeToDropletByName).toBeInstanceOf(Function);
//       expect(client.blockStorage.detachVolumeFromDroplet).toBeInstanceOf(Function);
//       // expect(client.blockStorage.detachVolumeFromDropletByName).toBeInstanceOf(Function);
//       expect(client.blockStorage.resizeVolume).toBeInstanceOf(Function);
//       expect(client.blockStorage.listVolumeActions).toBeInstanceOf(Function);
//       expect(client.blockStorage.getVolumeAction).toBeInstanceOf(Function);
//       /// cdn-endpoints
//       expect(client.cdnEndpoints).toBeDefined();
//       expect(client.cdnEndpoints.createCdnEndpoint).toBeInstanceOf(Function);
//       expect(client.cdnEndpoints.getCdnEndpoint).toBeInstanceOf(Function);
//       expect(client.cdnEndpoints.listCdnEndpoints).toBeInstanceOf(Function);
//       expect(client.cdnEndpoints.updateCdnEndpoint).toBeInstanceOf(Function);
//       expect(client.cdnEndpoints.deleteCdnEndpoint).toBeInstanceOf(Function);
//       expect(client.cdnEndpoints.purgeCache).toBeInstanceOf(Function);
//       /// certificates
//       expect(client.certificates).toBeDefined();
//       expect(client.certificates.createCertificate).toBeInstanceOf(Function);
//       expect(client.certificates.createLetsEncryptCertificate).toBeInstanceOf(Function);
//       expect(client.certificates.getCertificate).toBeInstanceOf(Function);
//       expect(client.certificates.listCertificates).toBeInstanceOf(Function);
//       expect(client.certificates.deleteCertificate).toBeInstanceOf(Function);
//       /// databases
//       expect(client.database).toBeDefined();
//       expect(client.database.createDatabaseCluster).toBeInstanceOf(Function);
//       expect(client.database.getDatabaseCluster).toBeInstanceOf(Function);
//       expect(client.database.listDatabaseClusters).toBeInstanceOf(Function);
//       expect(client.database.resizeDatabaseCluster).toBeInstanceOf(Function);
//       expect(client.database.migrateDatabaseClusterRegion).toBeInstanceOf(Function);
//       expect(client.database.setDatabaseClusterMaintenanceWindow).toBeInstanceOf(Function);
//       expect(client.database.listDatabaseClusterBackups).toBeInstanceOf(Function);
//       expect(client.database.restoreDatabaseClusterBackup).toBeInstanceOf(Function);
//       expect(client.database.destroyDatabaseCluster).toBeInstanceOf(Function);
//       expect(client.database.createReadOnlyReplica).toBeInstanceOf(Function);
//       expect(client.database.getReadOnlyReplica).toBeInstanceOf(Function);
//       expect(client.database.listReadOnlyReplicas).toBeInstanceOf(Function);
//       expect(client.database.destroyReadOnlyReplica).toBeInstanceOf(Function);
//       expect(client.database.addDatabaseUser).toBeInstanceOf(Function);
//       expect(client.database.getDatabaseUser).toBeInstanceOf(Function);
//       expect(client.database.listDatabaseUsers).toBeInstanceOf(Function);
//       expect(client.database.removeDatabaseUsers).toBeInstanceOf(Function);
//       expect(client.database.createDatabase).toBeInstanceOf(Function);
//       expect(client.database.getDatabase).toBeInstanceOf(Function);
//       expect(client.database.listDatabases).toBeInstanceOf(Function);
//       expect(client.database.deleteDatabase).toBeInstanceOf(Function);
//       expect(client.database.createConnectionPool).toBeInstanceOf(Function);
//       expect(client.database.listConnectionPools).toBeInstanceOf(Function);
//       expect(client.database.getConnectionPool).toBeInstanceOf(Function);
//       expect(client.database.deleteConnectionPool).toBeInstanceOf(Function);
//       /// domains
//       expect(client.domain).toBeDefined();
//       expect(client.domain.listDomains).toBeInstanceOf(Function);
//       expect(client.domain.createDomain).toBeInstanceOf(Function);
//       expect(client.domain.getDomain).toBeInstanceOf(Function);
//       expect(client.domain.deleteDomain).toBeInstanceOf(Function);
//       /// domains-records
//       expect(client.domainRecord.listDomainRecords).toBeInstanceOf(Function);
//       expect(client.domainRecord.createDomainRecord).toBeInstanceOf(Function);
//       expect(client.domainRecord.getDomainRecord).toBeInstanceOf(Function);
//       expect(client.domainRecord.updateDomainRecord).toBeInstanceOf(Function);
//       expect(client.domainRecord.deleteDomainRecord).toBeInstanceOf(Function);
//       /// droplets
//       expect(client.droplet).toBeDefined();
//       expect(client.droplet.createDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.createDroplets).toBeInstanceOf(Function);
//       expect(client.droplet.getDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.listDroplets).toBeInstanceOf(Function);
//       expect(client.droplet.listDropletsByTag).toBeInstanceOf(Function);
//       expect(client.droplet.listDropletKernels).toBeInstanceOf(Function);
//       expect(client.droplet.listDropletSnapshots).toBeInstanceOf(Function);
//       expect(client.droplet.listDropletBackups).toBeInstanceOf(Function);
//       expect(client.droplet.listDropletActions).toBeInstanceOf(Function);
//       expect(client.droplet.deleteDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.deleteDropletsByTag).toBeInstanceOf(Function);
//       expect(client.droplet.listDropletNeighbors).toBeInstanceOf(Function);
//       expect(client.droplet.listNeighborhoods).toBeInstanceOf(Function);
//       expect(client.droplet.enableDropletBackups).toBeInstanceOf(Function);
//       expect(client.droplet.disableDropletBackups).toBeInstanceOf(Function);
//       expect(client.droplet.rebootDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.powerCycleDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.shutdownDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.powerOffDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.powerOnDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.restoreDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.resetDropletPassword).toBeInstanceOf(Function);
//       expect(client.droplet.resizeDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.rebuildDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.renameDroplet).toBeInstanceOf(Function);
//       expect(client.droplet.changeDropletKernel).toBeInstanceOf(Function);
//       expect(client.droplet.enableDropletIpv6).toBeInstanceOf(Function);
//       expect(client.droplet.enableDropletPrivateNetworking).toBeInstanceOf(Function);
//       expect(client.droplet.createDropletSnapshot).toBeInstanceOf(Function);
//       expect(client.droplet.doActionByTag).toBeInstanceOf(Function);
//       expect(client.droplet.getDropletAction).toBeInstanceOf(Function);
//       /// floating ips
//       expect(client.floatingIp).toBeDefined();
//       expect(client.floatingIp.listFloatingIps).toBeInstanceOf(Function);
//       expect(client.floatingIp.createFloatingIpToDroplet).toBeInstanceOf(Function);
//       expect(client.floatingIp.reserveFloatingIp).toBeInstanceOf(Function);
//       expect(client.floatingIp.getFloatingIp).toBeInstanceOf(Function);
//       expect(client.floatingIp.deleteFloatingIp).toBeInstanceOf(Function);
//       expect(client.floatingIp.assignFloatingIpToDroplet).toBeInstanceOf(Function);
//       expect(client.floatingIp.unassignFloatingIp).toBeInstanceOf(Function);
//       expect(client.floatingIp.listFloatingIpActions).toBeInstanceOf(Function);
//       expect(client.floatingIp.getFloatingIpAction).toBeInstanceOf(Function);
//       /// firewalls
//       expect(client.firewall).toBeDefined();
//       expect(client.firewall.createFirewall).toBeInstanceOf(Function);
//       expect(client.firewall.getFirewall).toBeInstanceOf(Function);
//       expect(client.firewall.listFirewalls).toBeInstanceOf(Function);
//       expect(client.firewall.updateFirewall).toBeInstanceOf(Function);
//       expect(client.firewall.deleteFirewall).toBeInstanceOf(Function);
//       expect(client.firewall.addDropletsToFirewall).toBeInstanceOf(Function);
//       expect(client.firewall.removeDropletsToFirewall).toBeInstanceOf(Function);
//       expect(client.firewall.addTagsToFirewall).toBeInstanceOf(Function);
//       expect(client.firewall.removeTagsToFirewall).toBeInstanceOf(Function);
//       expect(client.firewall.addRulesToFirewall).toBeInstanceOf(Function);
//       expect(client.firewall.removeRulesFromFirewall).toBeInstanceOf(Function);
//       /// images
//       expect(client.image).toBeDefined();
//       expect(client.image.listImages).toBeInstanceOf(Function);
//       expect(client.image.listDistributionImages).toBeInstanceOf(Function);
//       expect(client.image.listApplicationImages).toBeInstanceOf(Function);
//       expect(client.image.listUserImages).toBeInstanceOf(Function);
//       expect(client.image.listImagesByTag).toBeInstanceOf(Function);
//       expect(client.image.createCustomImage).toBeInstanceOf(Function);
//       expect(client.image.getImage).toBeInstanceOf(Function);
//       expect(client.image.getImageBySlug).toBeInstanceOf(Function);
//       expect(client.image.updateImage).toBeInstanceOf(Function);
//       expect(client.image.listImageActions).toBeInstanceOf(Function);
//       expect(client.image.deleteImage).toBeInstanceOf(Function);
//       expect(client.image.transferImage).toBeInstanceOf(Function);
//       expect(client.image.convertImageToSnapshot).toBeInstanceOf(Function);
//       expect(client.image.getImageAction).toBeInstanceOf(Function);
//       /// kubernetes
//       expect(client.kubernetes).toBeDefined();
//       expect(client.kubernetes.createKubernetesCluster).toBeInstanceOf(Function);
//       expect(client.kubernetes.getKubernetesCluster).toBeInstanceOf(Function);
//       expect(client.kubernetes.listKubernetesClusters).toBeInstanceOf(Function);
//       expect(client.kubernetes.updateKubernetesCluster).toBeInstanceOf(Function);
//       expect(client.kubernetes.getKubernetesClusterAvailableUpgrades).toBeInstanceOf(Function);
//       expect(client.kubernetes.upgradeKubernetesCluster).toBeInstanceOf(Function);
//       expect(client.kubernetes.deleteKubernetesCluster).toBeInstanceOf(Function);
//       expect(client.kubernetes.getKubernetesClusterKubeconfig).toBeInstanceOf(Function);
//       expect(client.kubernetes.getKubernetesClusterNodePool).toBeInstanceOf(Function);
//       expect(client.kubernetes.listKubernetesClusterNodePools).toBeInstanceOf(Function);
//       expect(client.kubernetes.addNodePoolToKubernetesCluster).toBeInstanceOf(Function);
//       expect(client.kubernetes.updateNodePoolInKubernetesCluster).toBeInstanceOf(Function);
//       expect(client.kubernetes.deleteNodePoolFromKubernetesCluster).toBeInstanceOf(Function);
//       expect(client.kubernetes.deleteNodeFromKubernetesCluster).toBeInstanceOf(Function);
//       expect(client.kubernetes.listKubernetesOptions).toBeInstanceOf(Function);
//       /// load-balancers
//       expect(client.loadBalancer).toBeDefined();
//       expect(client.loadBalancer.createLoadBalancer).toBeInstanceOf(Function);
//       // expect(client.loadBalancer.createLoadBalancerWithDropletTag).toBeInstanceOf(Function);
//       expect(client.loadBalancer.getLoadBalancer).toBeInstanceOf(Function);
//       expect(client.loadBalancer.listLoadBalancers).toBeInstanceOf(Function);
//       expect(client.loadBalancer.updateLoadBalancer).toBeInstanceOf(Function);
//       expect(client.loadBalancer.deleteLoadBalancer).toBeInstanceOf(Function);
//       expect(client.loadBalancer.addDropletsToLoadBalancer).toBeInstanceOf(Function);
//       expect(client.loadBalancer.removeDropletsFromLoadBalancer).toBeInstanceOf(Function);
//       expect(client.loadBalancer.addForwardingRulesToLoadBalancer).toBeInstanceOf(Function);
//       expect(client.loadBalancer.removeForwardingRulesFromLoadBalancer).toBeInstanceOf(Function);
//       /// projects
//       expect(client.project).toBeDefined();
//       expect(client.project.createProject).toBeInstanceOf(Function);
//       expect(client.project.listProjects).toBeInstanceOf(Function);
//       expect(client.project.updateProject).toBeInstanceOf(Function);
//       expect(client.project.patchProject).toBeInstanceOf(Function);
//       expect(client.project.getProject).toBeInstanceOf(Function);
//       expect(client.project.getDefaultProject).toBeInstanceOf(Function);
//       expect(client.project.updateDefaultProject).toBeInstanceOf(Function);
//       expect(client.project.patchDefaultProject).toBeInstanceOf(Function);
//       expect(client.project.listProjectResources).toBeInstanceOf(Function);
//       expect(client.project.addResourceToProject).toBeInstanceOf(Function);
//       expect(client.project.listDefaultProjectResources).toBeInstanceOf(Function);
//       expect(client.project.addResourceToDefaultProject).toBeInstanceOf(Function);
//       /// region
//       expect(client.region).toBeDefined();
//       expect(client.region.listRegions).toBeInstanceOf(Function);
//       /// size
//       expect(client.size).toBeDefined();
//       expect(client.size.listSizes).toBeInstanceOf(Function);
//       /// snapshots
//       expect(client.snapshot).toBeDefined();
//       expect(client.snapshot.listSnapshots).toBeInstanceOf(Function);
//       expect(client.snapshot.listDropletSnapshots).toBeInstanceOf(Function);
//       expect(client.snapshot.listVolumeSnapshots).toBeInstanceOf(Function);
//       expect(client.snapshot.getSnapshots).toBeInstanceOf(Function);
//       expect(client.snapshot.deleteSnapshot).toBeInstanceOf(Function);
//       /// ssh-keys
//       expect(client.sshKey).toBeDefined();
//       expect(client.sshKey.listSshKeys).toBeInstanceOf(Function);
//       expect(client.sshKey.createSshKey).toBeInstanceOf(Function);
//       expect(client.sshKey.getSshKey).toBeInstanceOf(Function);
//       expect(client.sshKey.updateSshKey).toBeInstanceOf(Function);
//       expect(client.sshKey.destroySshKey).toBeInstanceOf(Function);
//       /// tags
//       expect(client.tag).toBeDefined();
//       expect(client.tag.createTag).toBeInstanceOf(Function);
//       expect(client.tag.getTag).toBeInstanceOf(Function);
//       expect(client.tag.listTags).toBeInstanceOf(Function);
//       expect(client.tag.tagResource).toBeInstanceOf(Function);
//       expect(client.tag.untagResource).toBeInstanceOf(Function);
//       expect(client.tag.deleteTag).toBeInstanceOf(Function);
//     });
//   });
});