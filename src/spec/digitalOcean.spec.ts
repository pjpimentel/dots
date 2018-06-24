import { DigitalOcean } from '../lib/digitalOcean';
import { AccountTests } from './account.spec';
import { ActionTests } from './action.spec';
import { GuardTests } from './common/type.guards.spec';
import { RegionTests } from './region.spec';
import { SizeTests } from './size.spec';

const token = process.env.DO_READ_TOKEN || '';
const endpointsTestMap = {
  Account: AccountTests,
  Action: ActionTests,
  // Certificate: () => true,
  // Domain: () => true,
  // Droplet: () => true,
  // FloatingIP: () => true,
  // Image: () => true,
  // LoadBalancer: () => true,
  Region: RegionTests,
  Size: SizeTests,
  // Snapshot: () => true,
  // SshKey: () => true,
  // Tag: () => true,
  // Volume: () => true,
};
const requiredEndpoints = Object.keys(endpointsTestMap);

describe('DigitalOcean', () => {
  it('class should be a constructor', () =>
    expect(typeof DigitalOcean).toEqual('function'),
  );
  it('token should be string', () => expect(typeof token).toBe('string'));
  const digitalOcean = new DigitalOcean(token);
  it('instance should be instanceOf DigitalOcean', () =>
    expect(digitalOcean instanceof DigitalOcean).toBeTruthy(),
  );
  it('instance should be a object', () =>
    expect(typeof digitalOcean).toBe('object'),
  );
  // running guard tests
  GuardTests(digitalOcean);
  // TODO: check if token is accessible beforeAll
  const instanceKeys = Object.keys(digitalOcean);
  requiredEndpoints.forEach((requiredEndpoint) => {
    const endpoint = digitalOcean[requiredEndpoint];
    const tests = endpointsTestMap[requiredEndpoint];
    describe(`${requiredEndpoint} endpoint`, () => {
      it('should exists on instance', () => expect(endpoint).toBeDefined());
      it('should be a object', () => expect(typeof endpoint).toBe('object'));
      if (typeof tests === 'function') tests(digitalOcean);
    });
  });

});
