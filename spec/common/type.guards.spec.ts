import {
  IAccount,
  IAction,
  ICertificate,
  ICollection,
  IDroplet,
  IImage,
  IKernel,
  IRegion,
  IResource,
  ISize,
  ISnapshot,
  ISSHKey,
  ITag,
  IVolume,
} from '../../src/common/interfaces';
import {
  isAccount,
  isAction,
  isCertificate,
  isCollection,
  isDroplet,
  isImage,
  isKernel,
  isRegion,
  isResource,
  isSize,
  isSnapshot,
  isSSHKey,
  isTag,
  isVolume,
} from '../../src/common/type.guards';
import { DigitalOcean } from '../../src/digitalOcean';

export default function(digitalOcean: DigitalOcean) {
  const shouldBeAFn = (key, fn) =>
    it(`\`${key}\` should be a function`, () => {
      expect(fn).toBeDefined();
      expect(typeof fn).toBe('function');
    });
  const shouldReturnFalse = (key, type, fn, value) =>
    it(`\`${key}\` should be \`${type}\` `, () => {
      expect(fn(value)).toBe(false);
    });
  const shouldReturnTrue = (key, fn, value) =>
    it(`\`${key}\` should return true`, () => {
      expect(fn(value)).toBe(true);
    });
  const copyObj = (obj) => JSON.parse(JSON.stringify(obj));

  describe('Type guards', () => {
    describe('IAccount', () => {
      shouldBeAFn('isAccount', isAccount);
      shouldReturnFalse('account', 'object', isAccount, null);
      const account: Partial<IAccount> = {};
      shouldReturnFalse('droplet_limit', 'number', isAccount, copyObj(account));
      account.droplet_limit = 0;
      shouldReturnFalse('email', 'string', isAccount, copyObj(account));
      account.email = 'email@email.com';
      shouldReturnFalse('email_verified', 'boolean', isAccount, copyObj(account));
      account.email_verified = true;
      shouldReturnFalse('floating_ip_limit', 'number', isAccount, copyObj(account));
      account.floating_ip_limit = 0;
      shouldReturnFalse('status', 'string', isAccount, copyObj(account));
      account.status = 'status';
      shouldReturnFalse('status_message', 'string', isAccount, copyObj(account));
      account.status_message = 'statusMessage';
      shouldReturnFalse('uuid', 'string', isAccount, copyObj(account));
      account.uuid = 'uuid';
      shouldReturnTrue('isAccount', isAccount, copyObj(account));
    });
    describe('IAction', () => {
      shouldBeAFn('isAction', isAction);
      shouldReturnFalse('action', 'object', isAction, null);
      const action: Partial<IAction> = {};
      shouldReturnFalse('completed_at', 'string', isAction, copyObj(action));
      action.completed_at = '';
      shouldReturnFalse('id', 'number', isAction, copyObj(action));
      action.id = 0;
      shouldReturnFalse('region_slug', 'string|null', isAction, copyObj(action));
      action.region_slug = '';
      shouldReturnFalse('resource_id', 'number|null', isAction, copyObj(action));
      action.resource_id = 0;
      shouldReturnFalse('resource_type', 'string', isAction, copyObj(action));
      action.resource_type = '';
      shouldReturnFalse('started_at', 'string', isAction, copyObj(action));
      action.started_at = '';
      shouldReturnFalse('status', 'string', isAction, copyObj(action));
      action.status = '';
      shouldReturnFalse('type', 'string', isAction, copyObj(action));
      action.type = '';
      action.region_slug = null;
      action.resource_id = null;
      shouldReturnTrue('isAction', isAction, copyObj(action));
    });
    describe('ICertificate', () => {
      shouldBeAFn('isCertificate', isCertificate);
      shouldReturnFalse('certificate', 'object', isCertificate, null);
      const certificate: Partial<ICertificate> = {};
      shouldReturnFalse('dns_names', 'string[]', isCertificate, copyObj(certificate));
      certificate.dns_names = [''];
      shouldReturnFalse('created_at', 'string', isCertificate, copyObj(certificate));
      certificate.created_at = '';
      shouldReturnFalse('id', 'string', isCertificate, copyObj(certificate));
      certificate.id = '';
      shouldReturnFalse('name', 'string', isCertificate, copyObj(certificate));
      certificate.name = '';
      shouldReturnFalse('not_after', 'string', isCertificate, copyObj(certificate));
      certificate.not_after = '';
      shouldReturnFalse('sha1_fingerprint', 'string', isCertificate, copyObj(certificate));
      certificate.sha1_fingerprint = '';
      shouldReturnFalse('state', 'string', isCertificate, copyObj(certificate));
      certificate.state = '';
      shouldReturnFalse('type', 'string', isCertificate, copyObj(certificate));
      certificate.type = '';
      shouldReturnTrue('isCertificate', isCertificate, copyObj(certificate));
    });
    describe('ICollection', () => {
      shouldBeAFn('isCollection', isCollection);
      shouldReturnFalse('collection', 'object', isCollection, null);
      const collection: Partial<ICollection<any>> = {};
      shouldReturnFalse('items', 'any[]', isCollection, copyObj(collection));
      collection.items = [];
      shouldReturnFalse('curPage', 'number', isCollection, copyObj(collection));
      collection.curPage = 0;
      shouldReturnFalse('maxPage', 'number', isCollection, copyObj(collection));
      collection.maxPage = 0;
      shouldReturnFalse('minPage', 'number', isCollection, copyObj(collection));
      collection.minPage = 0;
      shouldReturnFalse('perPage', 'number', isCollection, copyObj(collection));
      collection.perPage = 0;
      shouldReturnFalse('total', 'number', isCollection, copyObj(collection));
      collection.total = 0;
      shouldReturnTrue('isCollection', isCollection, copyObj(collection));
    });
    describe('IKernel', () => {
      shouldBeAFn('isKernel', isKernel);
      shouldReturnFalse('kernel', 'object', isKernel, null);
      const kernel: Partial<IKernel> = {};
      shouldReturnFalse('id', 'number', isKernel, copyObj(kernel));
      kernel.id = 0;
      shouldReturnFalse('name', 'string', isKernel, copyObj(kernel));
      kernel.name = '';
      shouldReturnFalse('version', 'string', isKernel, copyObj(kernel));
      kernel.version = '';
      shouldReturnTrue('isKernel', isKernel, copyObj(kernel));
    });
    describe('IDroplet', () => {
      shouldBeAFn('isDroplet', isDroplet);
      shouldReturnFalse('droplet', 'object', isDroplet, null);
      const droplet: Partial<IDroplet> = {};
      shouldReturnFalse('created_at', 'string', isDroplet, copyObj(droplet));
      droplet.created_at = '';
      shouldReturnFalse('disk', 'number', isDroplet, copyObj(droplet));
      droplet.disk = 0;
      shouldReturnFalse('id', 'number', isDroplet, copyObj(droplet));
      droplet.id = 0;
      shouldReturnFalse('kernel', 'kernel|null', isDroplet, copyObj(droplet));
      droplet.kernel = { id: 0, name: '', version: ''  };
      shouldReturnFalse('locked', 'boolean', isDroplet, copyObj(droplet));
      droplet.locked = true;
      shouldReturnFalse('memory', 'number', isDroplet, copyObj(droplet));
      droplet.memory = 0;
      shouldReturnFalse('name', 'string', isDroplet, copyObj(droplet));
      droplet.name = '';
      shouldReturnFalse('networks', 'object', isDroplet, copyObj(droplet));
      droplet.networks = {};
      shouldReturnFalse('next_backup_window', 'object', isDroplet, copyObj(droplet));
      droplet.next_backup_window = {};
      shouldReturnFalse('size_slug', 'string', isDroplet, copyObj(droplet));
      droplet.size_slug = '';
      shouldReturnFalse('status', 'string', isDroplet, copyObj(droplet));
      droplet.status = 'new';
      shouldReturnFalse('vcpus', 'number', isDroplet, copyObj(droplet));
      droplet.vcpus = 0;
      shouldReturnFalse('backup_ids', 'string[]', isDroplet, copyObj(droplet));
      droplet.backup_ids = [''];
      shouldReturnFalse('features', 'string[]', isDroplet, copyObj(droplet));
      droplet.features = [''];
      shouldReturnFalse('snapshot_ids', 'string[]', isDroplet, copyObj(droplet));
      droplet.snapshot_ids = [''];
      shouldReturnFalse('tags', 'string[]', isDroplet, copyObj(droplet));
      droplet.tags = [''];
      shouldReturnFalse('volume_ids', 'string[]', isDroplet, copyObj(droplet));
      droplet.volume_ids = [''];
      shouldReturnFalse('image', 'image', isDroplet, copyObj(droplet));
      droplet.image = {
        created_at: '',
        distribution: '',
        id: 0,
        min_disk_size: 0,
        name: '',
        public: true,
        regions: [''],
        size_gigabytes: 0,
        slug: '',
        type: '',
      };
      shouldReturnFalse('region', 'region', isDroplet, copyObj(droplet));
      droplet.region = {
        available: true,
        features: [''],
        name: '',
        sizes: [''],
        slug: '',
      };
      shouldReturnFalse('size', 'size', isDroplet, copyObj(droplet));
      droplet.size = {
        available: true,
        disk: 0,
        memory: 0,
        price_hourly: 0,
        price_monthly: 0,
        regions: [''],
        slug: '',
        transfer: 0,
        vcpus: 0,
      };
      droplet.kernel = null;
      droplet.next_backup_window = null;
      shouldReturnTrue('isDroplet', isDroplet, copyObj(droplet));
    });
    describe('IImage', () => {
      shouldBeAFn('isImage', isImage);
      shouldReturnFalse('image', 'object', isImage, null);
      const image: Partial<IImage> = {};
      shouldReturnFalse('created_at', 'string', isImage, copyObj(image));
      image.created_at =  '';
      shouldReturnFalse('distribution', 'string', isImage, copyObj(image));
      image.distribution =  '';
      shouldReturnFalse('id', 'number', isImage, copyObj(image));
      image.id =  0;
      shouldReturnFalse('min_disk_size', 'number', isImage, copyObj(image));
      image.min_disk_size =  0;
      shouldReturnFalse('name', 'string', isImage, copyObj(image));
      image.name =  '';
      shouldReturnFalse('public', 'boolean', isImage, copyObj(image));
      image.public =  true;
      shouldReturnFalse('regions', 'string[]', isImage, copyObj(image));
      image.regions =  [''];
      shouldReturnFalse('size_gigabytes', 'number', isImage, copyObj(image));
      image.size_gigabytes =  0;
      shouldReturnFalse('slug', 'string|null', isImage, copyObj(image));
      image.slug =  '';
      shouldReturnFalse('type', 'string', isImage, copyObj(image));
      image.type =  '';
      image.slug = null;
      shouldReturnTrue('isImage', isImage, copyObj(image));
    });
    describe('IRegion', () => {
      shouldBeAFn('isRegion', isRegion);
      shouldReturnFalse('region', 'object', isRegion, null);
      const region: Partial<IRegion> = {};
      shouldReturnFalse('available', 'boolean', isRegion, copyObj(region));
      region.available = true;
      shouldReturnFalse('features', 'string[]', isRegion, copyObj(region));
      region.features = [''];
      shouldReturnFalse('name', 'string', isRegion, copyObj(region));
      region.name = '';
      shouldReturnFalse('sizes', 'string[]', isRegion, copyObj(region));
      region.sizes = [''];
      shouldReturnFalse('slug', 'string', isRegion, copyObj(region));
      region.slug = '';
      shouldReturnTrue('isRegion', isRegion, copyObj(region));
    });
    describe('IResource', () => {
      shouldBeAFn('isResource', isResource);
      shouldReturnFalse('resource', 'object', isResource, null);
      const resource: Partial<IResource> = {};
      shouldReturnFalse('resource_id', 'string', isResource, copyObj(resource));
      resource.resource_id = '';
      shouldReturnFalse('resource_type', 'string', isResource, copyObj(resource));
      resource.resource_type = '';
      shouldReturnTrue('isResource', isResource, copyObj(resource));
    });
    describe('ISize', () => {
      shouldBeAFn('isSize', isSize);
      shouldReturnFalse('size', 'object', isSize, null);
      const size: Partial<ISize> = {};
      shouldReturnFalse('available', 'boolean', isSize, copyObj(size));
      size.available = true;
      shouldReturnFalse('disk', 'number', isSize, copyObj(size));
      size.disk = 0;
      shouldReturnFalse('memory', 'number', isSize, copyObj(size));
      size.memory = 0;
      shouldReturnFalse('price_hourly', 'number', isSize, copyObj(size));
      size.price_hourly = 0;
      shouldReturnFalse('price_monthly', 'number', isSize, copyObj(size));
      size.price_monthly = 0;
      shouldReturnFalse('regions', 'string[]', isSize, copyObj(size));
      size.regions = [''];
      shouldReturnFalse('transfer', 'number', isSize, copyObj(size));
      size.transfer = 0;
      shouldReturnFalse('vcpus', 'number', isSize, copyObj(size));
      size.vcpus = 0;
      shouldReturnFalse('slug', 'string', isSize, copyObj(size));
      size.slug = '';
      shouldReturnTrue('isSize', isSize, copyObj(size));
    });
    describe('ISnapshot', () => {
      shouldBeAFn('isSnapshot', isSnapshot);
      shouldReturnFalse('snapshot', 'object', isSnapshot, null);
      const snapshot: Partial<ISnapshot> = {};
      shouldReturnFalse('regions', 'string[]', isSnapshot, copyObj(snapshot));
      snapshot.regions = [''];
      shouldReturnFalse('min_disk_size', 'number', isSnapshot, copyObj(snapshot));
      snapshot.min_disk_size = 0;
      shouldReturnFalse('size_gigabytes', 'number', isSnapshot, copyObj(snapshot));
      snapshot.size_gigabytes = 0;
      shouldReturnFalse('created_at', 'string', isSnapshot, copyObj(snapshot));
      snapshot.created_at = '';
      shouldReturnFalse('id', 'string', isSnapshot, copyObj(snapshot));
      snapshot.id = '';
      shouldReturnFalse('name', 'string', isSnapshot, copyObj(snapshot));
      snapshot.name = '';
      shouldReturnFalse('resource_id', 'string', isSnapshot, copyObj(snapshot));
      snapshot.resource_id = '';
      shouldReturnFalse('resource_type', 'string', isSnapshot, copyObj(snapshot));
      snapshot.resource_type = '';
      shouldReturnTrue('isSnapshot', isSnapshot, copyObj(snapshot));
    });
    describe('ISSHKey', () => {
      shouldBeAFn('isSSHKey', isSSHKey);
      shouldReturnFalse('sshKey', 'object', isSSHKey, null);
      const sshKey: Partial<ISSHKey> = {};
      shouldReturnFalse('id', 'number', isSSHKey, copyObj(sshKey));
      sshKey.id = 0;
      shouldReturnFalse('fingerprint', 'string', isSSHKey, copyObj(sshKey));
      sshKey.fingerprint = '';
      shouldReturnFalse('name', 'string', isSSHKey, copyObj(sshKey));
      sshKey.name = '';
      shouldReturnFalse('public_key', 'string', isSSHKey, copyObj(sshKey));
      sshKey.public_key = '';
      shouldReturnTrue('isSSHKey', isSSHKey, copyObj(sshKey));
    });
    describe('ITag', () => {
      shouldBeAFn('isTag', isTag);
      shouldReturnFalse('tag', 'object', isTag, null);
      const tag: Partial<ITag> = {};
      shouldReturnFalse('name', 'string', isTag, copyObj(tag));
      tag.name = '';
      shouldReturnFalse('resources', 'object', isTag, copyObj(tag));
      tag.resources = {};
      shouldReturnTrue('isTag', isTag, copyObj(tag));
    });
    describe('IVolume', () => {
      shouldBeAFn('isVolume', isVolume);
      shouldReturnFalse('volume', 'object', isVolume, null);
      const volume: Partial<IVolume> = {};
      shouldReturnFalse('created_at', 'string', isVolume, copyObj(volume));
      volume.created_at = '';
      shouldReturnFalse('description', 'string', isVolume, copyObj(volume));
      volume.description = '';
      shouldReturnFalse('droplet_ids', 'number[]', isVolume, copyObj(volume));
      volume.droplet_ids = [0];
      shouldReturnFalse('filesystem_label', 'number[]', isVolume, copyObj(volume));
      volume.filesystem_label = '';
      shouldReturnFalse('filesystem_type', 'number[]', isVolume, copyObj(volume));
      volume.filesystem_type = '';
      shouldReturnFalse('id', 'string', isVolume, copyObj(volume));
      volume.id = '';
      shouldReturnFalse('name', 'string', isVolume, copyObj(volume));
      volume.name = '';
      shouldReturnFalse('region', 'IRegion', isVolume, copyObj(volume));
      volume.region = {
        available: true,
        features: [''],
        name: '',
        sizes: [''],
        slug: '',
      };
      shouldReturnFalse('size_gigabytes', 'number', isVolume, copyObj(volume));
      volume.size_gigabytes = 0;
      shouldReturnTrue('isVolume', isVolume, copyObj(volume));
    });
  });
}
