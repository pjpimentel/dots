import { finalize } from 'rxjs/operators';
import { isArray } from 'util';
import { ICollection, ISSHKey, ISSHKeySpecs } from '../lib/common/interfaces';
import { isCollection, isSSHKey } from '../lib/common/type.guards';
import { DigitalOcean } from '../lib/digitalOcean';

import * as keygen from 'ssh-keygen';

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
  const onError = (err, shouldFail) => {
    expect(err instanceof Error).toBeTruthy();
    expect(typeof err.message).toBe('string');
    if (shouldFail) fail(err);
  };
  describe('List SSHKeys', () => {
    it('`list` should exists', () => expect(SSHKey.list).toBeDefined());
    it('`list` should be a function', () => expect(typeof SSHKey.list).toBe('function'));
    it('`list` should return SSHKey\'s collecion', (done) => {
      SSHKey.list(0, perPage)
        .pipe(finalize(done))
        .subscribe(onSSHKeys, (err) => onError(err, true));
    }, digitalOcean.timeout);
    it('`list` should return Error', (done) => {
      // tslint:disable-next-line
      SSHKey.list('a' as any, perPage)
        .pipe(finalize(done))
        .subscribe(onSSHKeys, (err) => onError(err, false));
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
        .subscribe(onSSHKey, (err) => onError(err, true));
    }, digitalOcean.timeout);
  });

  const keyOptions = {
    comment: 'dots@pimentel.co',
    read: true,
  };
  let createdKey: ISSHKey = {} as ISSHKey;
  let generatedName = '';
  describe('Create SSHKey', () => {
    it('`Create` should exists', () => expect(SSHKey.create).toBeDefined());
    it('`Create` should be a function', () => expect(typeof SSHKey.create).toBe('function'));
    it('`Create` should return SSHKey object', (done) => {
      const onSSHKey = (sshKey: ISSHKey) => {
        expect(sshKey).toBeDefined();
        expect(isSSHKey(sshKey)).toBeTruthy();
        expect(sshKey.name).toBe(generatedName);
        createdKey = sshKey;
      };
      const onLocalKeyCreated = (err, output) => {
        if (err) return onError(err, true);
        const publicKey = output.pubKey;
        generatedName = `test-${publicKey.substr(60, 25)}`;
        const keySpec: ISSHKeySpecs = {
          name: generatedName,
          public_key: publicKey,
        };
        SSHKey.create(keySpec)
          .pipe(finalize(done))
          .subscribe(onSSHKey, (error) => onError(error, true));
      };
      keygen(keyOptions, onLocalKeyCreated);
    }, digitalOcean.timeout);
  });
  describe('Update SSHKey', () => {
    it('`Update` should exists', () => expect(SSHKey.update).toBeDefined());
    it('`Update` should be a function', () => expect(typeof SSHKey.update).toBe('function'));
    it('`createdKey` should exists', () => expect(createdKey).toBeDefined());
    it('`createdKey.fingerprint` should exists', () => expect(createdKey.fingerprint).toBeDefined());
    it('`Update` should return SSHKey object', (done) => {
      const newName = generatedName.split('').reverse().join();
      const onSSHKeyUpdated = (sshKey: ISSHKey) => {
        expect(sshKey).toBeDefined();
        expect(isSSHKey(sshKey)).toBeTruthy();
        expect(sshKey.name).toBe(newName);
        createdKey = sshKey;
      };
      SSHKey.update(createdKey.fingerprint, { name: newName })
        .pipe(finalize(done))
        .subscribe(onSSHKeyUpdated, (error) => onError(error, true));
    }, digitalOcean.timeout);
  });
  describe('Delete SSHKey', () => {
    it('`Delete` should exists', () => expect(SSHKey.delete).toBeDefined());
    it('`Delete` should be a function', () => expect(typeof SSHKey.delete).toBe('function'));
    it('`createdKey` should exists', () => expect(createdKey).toBeDefined());
    it('`createdKey.fingerprint` should exists', () => expect(createdKey.fingerprint).toBeDefined());
    it('`Delete` should return success', (done) => {
      const onSSHKeyDeleted = () => true;
      SSHKey.delete(createdKey.fingerprint)
        .pipe(finalize(done))
        .subscribe(onSSHKeyDeleted, (error) => onError(error, true));
    }, digitalOcean.timeout);
    it('`Get` should not return success', (done) => {
      SSHKey.get(createdKey.fingerprint)
        .pipe(finalize(done))
        .subscribe(() => true, (error) => onError(error, false));
    }, digitalOcean.timeout);
  });

}
