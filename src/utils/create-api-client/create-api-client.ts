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
    deleteDropletsByTag: modules.droplet.deleteDropletsByTag(context),
    destroyDropletAndAllAssociatedResources: modules.droplet.destroyDropletAndAllAssociatedResources(context),
    destroyDropletAndAssociatedResources: modules.droplet.destroyDropletAndAssociatedResources(context),
    disableDropletBackups: modules.droplet.disableDropletBackups(context),
    doActionByDropletTag: modules.droplet.doActionByDropletTag(context),
    enableDropletBackups: modules.droplet.enableDropletBackups(context),
    enableDropletIpv6: modules.droplet.enableDropletIpv6(context),
    enableDropletPrivateNetworking: modules.droplet.enableDropletPrivateNetworking(context),
    getDroplet: modules.droplet.getDroplet(context),
    getDropletAction: modules.droplet.getDropletAction(context),
    getDropletDestroyStatus: modules.droplet.getDropletDestroyStatus(context),
    listDropletActions: modules.droplet.listDropletActions(context),
    listDropletAssociatedResources: modules.droplet.listDropletAssociatedResources(context),
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
    retryDropletDestroy: modules.droplet.retryDropletDestroy(context),
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
    configureDatabaseClusterEvictionPolicy: modules.database.configureDatabaseClusterEvictionPolicy(context),
    configureDatabaseClusterMaintenanceWindow: modules.database.configureDatabaseClusterMaintenanceWindow(context),
    configureDatabaseClusterSqlModes: modules.database.configureDatabaseClusterSqlModes(context),
    createConnectionPool: modules.database.createConnectionPool(context),
    createDatabaseCluster: modules.database.createDatabaseCluster(context),
    createDatabaseClusterDb: modules.database.createDatabaseClusterDb(context),
    createDatabaseClusterUser: modules.database.createDatabaseClusterUser(context),
    createReadOnlyReplica: modules.database.createReadOnlyReplica(context),
    deleteConnectionPool: modules.database.deleteConnectionPool(context),
    deleteDatabaseClusterDb: modules.database.deleteDatabaseClusterDb(context),
    destroyDatabaseCluster: modules.database.destroyDatabaseCluster(context),
    destroyReadOnlyReplica: modules.database.destroyReadOnlyReplica(context),
    getConnectionPool: modules.database.getConnectionPool(context),
    getDatabaseCluster: modules.database.getDatabaseCluster(context),
    getDatabaseClusterDb: modules.database.getDatabaseClusterDb(context),
    getDatabaseClusterEvictionPolicy: modules.database.getDatabaseClusterEvictionPolicy(context),
    getDatabaseClusterSqlMode: modules.database.getDatabaseClusterSqlMode(context),
    getDatabaseClusterUser: modules.database.getDatabaseClusterUser(context),
    getReadOnlyReplica: modules.database.getReadOnlyReplica(context),
    listConnectionPools: modules.database.listConnectionPools(context),
    listDatabaseClusterBackups: modules.database.listDatabaseClusterBackups(context),
    listDatabaseClusterDbs: modules.database.listDatabaseClusterDbs(context),
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
  const project = Object.freeze({
    assignResourcesToDefaultProject: modules.project.assignResourcesToDefaultProject(context),
    assignResourcesToProject: modules.project.assignResourcesToProject(context),
    createProject: modules.project.createProject(context),
    deleteProject: modules.project.deleteProject(context),
    getDefaultProject: modules.project.getDefaultProject(context),
    getProject: modules.project.getProject(context),
    listDefaultProjectResources: modules.project.listDefaultProjectResources(context),
    listProjectResources: modules.project.listProjectResources(context),
    listProjects: modules.project.listProjects(context),
    patchDefaultProject: modules.project.patchDefaultProject(context),
    patchProject: modules.project.patchProject(context),
    updateDefaultProject: modules.project.updateDefaultProject(context),
    updateProject: modules.project.updateProject(context),
  });
  const kubernetes = Object.freeze({
    addContainerRegistry: modules.kubernetes.addContainerRegistry(context),
    createKubernetesCluster: modules.kubernetes.createKubernetesCluster(context),
    createNodePool: modules.kubernetes.createNodePool(context),
    deleteKubernetesCluster: modules.kubernetes.deleteKubernetesCluster(context),
    deleteNode: modules.kubernetes.deleteNode(context),
    deleteNodePool: modules.kubernetes.deleteNodePool(context),
    getClusterlintDiagnostics: modules.kubernetes.getClusterlintDiagnostics(context),
    getKubernetesCluster: modules.kubernetes.getKubernetesCluster(context),
    getKubernetesClusterCredentials: modules.kubernetes.getKubernetesClusterCredentials(context),
    getKubernetesClusterKubeconfig: modules.kubernetes.getKubernetesClusterKubeconfig(context),
    getNodePool: modules.kubernetes.getNodePool(context),
    listAvailableOptionsOfKubernetes: modules.kubernetes.listAvailableOptionsOfKubernetes(context),
    listKubernetesClusterAvailableUpgrades: modules.kubernetes.listKubernetesClusterAvailableUpgrades(context),
    listKubernetesClusters: modules.kubernetes.listKubernetesClusters(context),
    listNodePools: modules.kubernetes.listNodePools(context),
    removeContainerRegistry: modules.kubernetes.removeContainerRegistry(context),
    runClusterlintOnKubernetesCluster: modules.kubernetes.runClusterlintOnKubernetesCluster(context),
    updateKubernetesCluster: modules.kubernetes.updateKubernetesCluster(context),
    updateNodePool: modules.kubernetes.updateNodePool(context),
    upgradeKubernetesCluster: modules.kubernetes.upgradeKubernetesCluster(context),
  });
  const cdnEndpoint = Object.freeze({
    createCdnEndpoint: modules.cdnEndpoint.createCdnEndpoint(context),
    getCdnEndpoint: modules.cdnEndpoint.getCdnEndpoint(context),
    listCdnEndpoints: modules.cdnEndpoint.listCdnEndpoints(context),
    deleteCdnEndpoint: modules.cdnEndpoint.deleteCdnEndpoint(context),
    updateCdnEndpoint: modules.cdnEndpoint.updateCdnEndpoint(context),
    purgeCache: modules.cdnEndpoint.purgeCache(context),
  });
  const containerRegistry = Object.freeze({
    configureRegistry: modules.containerRegistry.configureRegistry(context),
    deleteRegistry: modules.containerRegistry.deleteRegistry(context),
    getDockerCredentials: modules.containerRegistry.getDockerCredentials(context),
    getRegistry: modules.containerRegistry.getRegistry(context),
  });
  const customer = Object.freeze({
    downloadInvoice: modules.customer.downloadInvoice(context),
    getBalance: modules.customer.getBalance(context),
    getInvoiceSummary: modules.customer.getInvoiceSummary(context),
    listBillingHistory: modules.customer.listBillingHistory(context),
    listInvoiceItems: modules.customer.listInvoiceItems(context),
    listInvoices: modules.customer.listInvoices(context),
  });
  const vpc = Object.freeze({
    createVpc: modules.vpc.createVpc(context),
    deleteVpc: modules.vpc.deleteVpc(context),
    getVpc: modules.vpc.getVpc(context),
    listVpcResources: modules.vpc.listVpcResources(context),
    listVpcs: modules.vpc.listVpcs(context),
    updateVpc: modules.vpc.updateVpc(context),
  });
  const app = Object.freeze({
    cancelAppDeployment: modules.app.cancelAppDeployment(context),
    createApp: modules.app.createApp(context),
    createAppDeployment: modules.app.createAppDeployment(context),
    deleteApp: modules.app.deleteApp(context),
    getAggregatedAppDeploymentLogs: modules.app.getAggregatedAppDeploymentLogs(context),
    getApp: modules.app.getApp(context),
    getAppDeployment: modules.app.getAppDeployment(context),
    getAppDeploymentLogs: modules.app.getAppDeploymentLogs(context),
    listAppDeployments: modules.app.listAppDeployments(context),
    listApps: modules.app.listApps(context),
    runAppDetection: modules.app.runAppDetection(context),
    updateApp: modules.app.updateApp(context),
  });

  return Object.freeze({
    _options,
    account,
    action,
    app,
    cdnEndpoint,
    certificate,
    containerRegistry,
    customer,
    database,
    domain,
    droplet,
    firewall,
    floatingIp,
    image,
    kubernetes,
    loadBalancer,
    project,
    region,
    size,
    snapshot,
    sshKey,
    tag,
    volume,
    vpc,
  });
};
