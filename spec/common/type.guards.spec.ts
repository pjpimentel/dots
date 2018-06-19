import DigitalOcean from '../../';
import {
  IAccount,
  IAction,
  ICertificate,
} from '../../src/common/interfaces';
import {
  isAccount,
  isAction,
  isCertificate,
  isCollection,
  isDroplet,
  isImage,
  isRegion,
  isResource,
  isSize,
  isSnapshot,
  isSSHKey,
  isTag,
  isVolume,
} from '../../src/common/type.guards';

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
    });
    describe('IDroplet', () => {
      shouldBeAFn('isDroplet', isDroplet);
    });
    describe('IImage', () => {
      shouldBeAFn('isImage', isImage);
    });
    describe('IRegion', () => {
      shouldBeAFn('isRegion', isRegion);
    });
    describe('IResource', () => {
      shouldBeAFn('isResource', isResource);
    });
    describe('ISize', () => {
      shouldBeAFn('isSize', isSize);
    });
    describe('ISnapshot', () => {
      shouldBeAFn('isSnapshot', isSnapshot);
    });
    describe('ISSHKey', () => {
      shouldBeAFn('isSSHKey', isSSHKey);
    });
    describe('ITag', () => {
      shouldBeAFn('isTag', isTag);
    });
    describe('IVolume', () => {
      shouldBeAFn('isVolume', isVolume);
    });
  });
}
