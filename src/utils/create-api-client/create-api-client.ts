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
  requestTimeoutInMs,
  endpoint,
  token,
}: ICreateApiClientInput) => {
  const context = createContext({
    axios,
    endpoint,
    requestTimeoutInMs,
    token,
  });

  const account = Object.freeze({
    getAccount: modules.account.getAccount(context),
  });
  const action = Object.freeze({
    getAction: modules.action.getAction(context),
    listActions: modules.action.listActions(context),
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

  return Object.freeze({
    account,
    action,
    domain,
    droplet,
    image,
    region,
    size,
    snapshot,
    volume,
  });
};
