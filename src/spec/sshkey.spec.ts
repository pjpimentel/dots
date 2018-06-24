import { finalize } from 'rxjs/operators';
import { isArray } from 'util';
import { ICollection, ISSHKey } from '../lib/common/interfaces';
import { isCollection, isSSHKey } from '../lib/common/type.guards';
import { DigitalOcean } from '../lib/digitalOcean';

export function SSHKeyTests(digitalOcean: DigitalOcean) {
  const SSHKey = digitalOcean.SSHKey;
  let sshKeyToTest: ISSHKey = {} as ISSHKey;
  const perPage = 10;
  const onSSHKeys = (collection: ICollection<ISSHKey>) => {
    expect(collection).toBeDefined();
    expect(isCollection<ISSHKey>(collection, isSSHKey)).toBeTruthy();
    expect(collection.perPage).toBe(perPage);
    const sshKeys = collection.items;
    expect(isArray(sshKeys)).toBeTruthy();
    expect(collection.items.length).toBeLessThanOrEqual(perPage);
    sshKeys.forEach((sshKey) => expect(isSSHKey(sshKey)).toBeTruthy());
    sshKeyToTest = sshKeys[Math.floor(Math.random() * sshKeys.length)];
  };
  const onError = (err) => {
    expect(err instanceof Error).toBeTruthy();
    expect(typeof err.message).toBe('string');
  };
  describe('List SSHKeys', () => {
    it('`list` should exists', () => expect(SSHKey.list).toBeDefined());
    it('`list` should be a function', () => expect(typeof SSHKey.list).toBe('function'));
    it('`list` should return SSHKey\'s collecion', (done) => {
      SSHKey.list(0, perPage)
        .pipe(finalize(done))
        .subscribe(onSSHKeys, onError);
    }, digitalOcean.timeout);
    it('`list` should return Error', (done) => {
      // tslint:disable-next-line
      SSHKey.list('a' as any, perPage)
        .pipe(finalize(done))
        .subscribe(onSSHKeys, onError);
    }, digitalOcean.timeout);
  });

  describe('Get SSHKey', () => {
    it('`Get` should exists', () => expect(SSHKey.get).toBeDefined());
    it('`Get` should be a function', () => expect(typeof SSHKey.get).toBe('function'));
    it('`sshKeyToTest` should exists', () => expect(sshKeyToTest).toBeDefined());
    it('`sshKeyToTest.id` should exists', () => expect(sshKeyToTest.id).toBeDefined());
    it('`Get` should return SSHKey object', (done) => {
      const onSSHKey = (sshKey) => {
        expect(sshKey).toBeDefined();
        expect(isSSHKey(sshKey)).toBeTruthy();
        expect(sshKey.id).toBe(sshKeyToTest.id);
      };
      SSHKey.get(sshKeyToTest.id)
        .pipe(finalize(done))
        .subscribe(onSSHKey, onError);
    }, digitalOcean.timeout);
  });
}
