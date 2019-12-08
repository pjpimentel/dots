import axios from 'axios';

export interface ICreateApiClientInput {
  endpoint?: string;
  requestTimeoutInMs?: number;
  token: string;
}

export const createApiClient = ({
  createContext,
  modules,
}: {
  createContext: typeof import('../create-context/create-context').createContext;
  modules: typeof import('../../modules')
}) => ({
  endpoint,
  requestTimeoutInMs,
  token,
}: ICreateApiClientInput) => {
  const context = createContext({
    axios,
    endpoint,
    requestTimeoutInMs,
    token,
  });

  const _options = Object.freeze({
    endpoint,
    requestTimeoutInMs,
  });
  const account = Object.freeze({
    getAccount: modules.account.getAccount(context),
  });
  const action = Object.freeze({
    getAction: modules.action.getAction(context),
    listActions: modules.action.listActions(context),
  });
  const certificate = Object.freeze({
    listCertificates: modules.certificate.listCertificates(context),
    getCertificate: modules.certificate.getCertificate(context),
    deleteCertificate: modules.certificate.deleteCertificate(context),
    createCertificate: modules.certificate.createCertificate(context),
  });
  const domain = Object.freeze({
    createDomain: modules.domain.createDomain(context),
    createDomainRecord: modules.domain.createDomainRecord(context),
    deleteDomain: modules.domain.deleteDomain(context),
    deleteDomainRecord: modules.domain.deleteDomainRecord(context),
    getDomain: modules.domain.getDomain(context),
    getDomainRecord: modules.domain.getDomainRecord(context),
    listDomainRecords: modules.domain.listDomainRecords(context),
    listDomains: modules.domain.listDomains(context),
    updateDomainRecord: modules.domain.updateDomainRecord(context),
  })
  const droplet = Object.freeze({
    changeDropletKernel: modules.droplet.changeDropletKernel(context),
    createDroplet: modules.droplet.createDroplet(context),
    createDroplets: modules.droplet.createDroplets(context),
    deleteDroplet: modules.droplet.deleteDroplet(context),
    disableDropletBackups: modules.droplet.disableDropletBackups(context),
    doActionByDropletTag: modules.droplet.doActionByDropletTag(context),
    enableDropletBackups: modules.droplet.enableDropletBackups(context),
    enableDropletIpv6: modules.droplet.enableDropletIpv6(context),
    enableDropletPrivateNetworking: modules.droplet.enableDropletPrivateNetworking(context),
    getDroplet: modules.droplet.getDroplet(context),
    getDropletAction: modules.droplet.getDropletAction(context),
    listDropletActions: modules.droplet.listDropletActions(context),
    listDropletBackups: modules.droplet.listDropletBackups(context),
    listDropletKernels: modules.droplet.listDropletKernels(context),
    listDropletNeighborhoods: modules.droplet.listDropletNeighborhoods(context),
    listDropletNeighbors: modules.droplet.listDropletNeighbors(context),
    listDroplets: modules.droplet.listDroplets(context),
    listDropletSnapshots: modules.droplet.listDropletSnapshots(context),
    powerCycleDroplet: modules.droplet.powerCycleDroplet(context),
    powerOffDroplet: modules.droplet.powerOffDroplet(context),
    powerOnDroplet: modules.droplet.powerOnDroplet(context),
    rebootDroplet: modules.droplet.rebootDroplet(context),
    rebuildDroplet: modules.droplet.rebuildDroplet(context),
    renameDroplet: modules.droplet.renameDroplet(context),
    resetDropletPassword: modules.droplet.resetDropletPassword(context),
    resizeDroplet: modules.droplet.resizeDroplet(context),
    restoreDroplet: modules.droplet.restoreDroplet(context),
    shutdownDroplet: modules.droplet.shutdownDroplet(context),
    snapshotDroplet: modules.droplet.snapshotDroplet(context),
  });
  const firewall = Object.freeze({
    addDropletsToFirewall: modules.firewall.addDropletsToFirewall(context),
    addRulesToFirewall: modules.firewall.addRulesToFirewall(context),
    addTagsToFirewall: modules.firewall.addTagsToFirewall(context),
    createFirewall: modules.firewall.createFirewall(context),
    deleteFirewall: modules.firewall.deleteFirewall(context),
    getFirewall: modules.firewall.getFirewall(context),
    listFirewalls: modules.firewall.listFirewalls(context),
    removeDropletsFromFirewall: modules.firewall.removeDropletsFromFirewall(context),
    removeRulesFromFirewall: modules.firewall.removeRulesFromFirewall(context),
    removeTagsFromFirewall: modules.firewall.removeTagsFromFirewall(context),
    updateFirewall: modules.firewall.updateFirewall(context),
  });
  const floatingIp = Object.freeze({
    assignIpToDroplet: modules.floatingIp.assignIpToDroplet(context),
    createFloatingIp: modules.floatingIp.createFloatingIp(context),
    deleteFloatingIp: modules.floatingIp.deleteFloatingIp(context),
    getFloatingIp: modules.floatingIp.getFloatingIp(context),
    getFloatingIpAction: modules.floatingIp.getFloatingIpAction(context),
    listFloatingIpActions: modules.floatingIp.listFloatingIpActions(context),
    listFloatingIps: modules.floatingIp.listFloatingIps(context),
    unassignIpFromDroplet: modules.floatingIp.unassignIpFromDroplet(context),
  });
  const image = Object.freeze({
    convertImageToSnapshot: modules.image.convertImageToSnapshot(context),
    createCustomImage: modules.image.createCustomImage(context),
    deleteImage: modules.image.deleteImage(context),
    getImageAction: modules.image.getImageAction(context),
    getImage: modules.image.getImage(context),
    listImageActions: modules.image.listImageActions(context),
    listImages: modules.image.listImages(context),
    transferImage: modules.image.transferImage(context),
    updateImage: modules.image.updateImage(context),
  });
  const loadBalancer = Object.freeze({
    addDropletsToLoadBalancer: modules.loadBalancer.addDropletsToLoadBalancer(context),
    addRulesToLoadBalancer: modules.loadBalancer.addRulesToLoadBalancer(context),
    createLoadBalancer: modules.loadBalancer.createLoadBalancer(context),
    deleteLoadBalancer: modules.loadBalancer.deleteLoadBalancer(context),
    getLoadBalancer: modules.loadBalancer.getLoadBalancer(context),
    listLoadBalancers: modules.loadBalancer.listLoadBalancers(context),
    removeDropletsFromLoadBalancer: modules.loadBalancer.removeDropletsFromLoadBalancer(context),
    removeRulesFromLoadBalancer: modules.loadBalancer.removeRulesFromLoadBalancer(context),
    updateLoadBalancer: modules.loadBalancer.updateLoadBalancer(context),
  });
  const region = Object.freeze({
    listRegions: modules.region.listRegions(context),
  });
  const size = Object.freeze({
    listSizes: modules.size.listSizes(context),
  });
  const snapshot = Object.freeze({
    deleteSnapshot: modules.snapshot.deleteSnapshot(context),
    getSnapshot: modules.snapshot.getSnapshot(context),
    listSnapshots: modules.snapshot.listSnapshots(context),
  });
  const sshKey = Object.freeze({
    createSshKey: modules.sshKey.createSshKey(context),
    destroySshKey: modules.sshKey.destroySshKey(context),
    getSshKey: modules.sshKey.getSshKey(context),
    listSshKeys: modules.sshKey.listSshKeys(context),
    updateSshKey: modules.sshKey.updateSshKey(context),
  });
  const tag = Object.freeze({
    createTag: modules.tag.createTag(context),
    deleteTag: modules.tag.deleteTag(context),
    getTag: modules.tag.getTag(context),
    listTags: modules.tag.listTags(context),
    tagResources: modules.tag.tagResources(context),
    untagResources: modules.tag.untagResources(context),
  });
  const volume = Object.freeze({
    attachVolumeToDroplet: modules.volume.attachVolumeToDroplet(context),
    createVolumeSnapshot: modules.volume.createVolumeSnapshot(context),
    createVolume: modules.volume.createVolume(context),
    deleteVolume: modules.volume.deleteVolume(context),
    detachVolumeFromDroplet: modules.volume.detachVolumeFromDroplet(context),
    getVolumeAction: modules.volume.getVolumeAction(context),
    getVolume: modules.volume.getVolume(context),
    listVolumeActions: modules.volume.listVolumeActions(context),
    listVolumeSnapshots: modules.volume.listVolumeSnapshots(context),
    listVolumes: modules.volume.listVolumes(context),
    resizeVolume: modules.volume.resizeVolume(context),
  });
  const database = Object.freeze({
    configureDatabaseClusterMaintenanceWindow: modules.database.configureDatabaseClusterMaintenanceWindow(context),
    createDatabaseCluster: modules.database.createDatabaseCluster(context),
    createDatabaseClusterDb: modules.database.createDatabaseClusterDb(context),
    createDatabaseClusterUser: modules.database.createDatabaseClusterUser(context),
    createReadOnlyReplica: modules.database.createReadOnlyReplica(context),
    destroyDatabaseCluster: modules.database.destroyDatabaseCluster(context),
    destroyReadOnlyReplica: modules.database.destroyReadOnlyReplica(context),
    getDatabaseCluster: modules.database.getDatabaseCluster(context),
    getDatabaseClusterDb: modules.database.getDatabaseClusterDb(context),
    getDatabaseClusterUser: modules.database.getDatabaseClusterUser(context),
    getReadOnlyReplica: modules.database.getReadOnlyReplica(context),
    listDatabaseClusterBackups: modules.database.listDatabaseClusterBackups(context),
    listDatabaseClusterFirewallRules: modules.database.listDatabaseClusterFirewallRules(context),
    listDatabaseClusters: modules.database.listDatabaseClusters(context),
    listDatabaseClusterUsers: modules.database.listDatabaseClusterUsers(context),
    listReadOnlyReplicas: modules.database.listReadOnlyReplicas(context),
    migrateDatabaseCluster: modules.database.migrateDatabaseCluster(context),
    removeDatabaseClusterUser: modules.database.removeDatabaseClusterUser(context),
    resizeDatabaseCluster: modules.database.resizeDatabaseCluster(context),
    restoreDatabaseClusterBackup: modules.database.restoreDatabaseClusterBackup(context),
    updateDatabaseClusterFirewallRules: modules.database.updateDatabaseClusterFirewallRules(context),
  });

  return Object.freeze({
    _options,
    account,
    action,
    certificate,
    database,
    domain,
    droplet,
    firewall,
    floatingIp,
    image,
    loadBalancer,
    region,
    size,
    snapshot,
    sshKey,
    tag,
    volume,
  });
};
