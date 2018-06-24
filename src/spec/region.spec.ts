import { finalize } from 'rxjs/operators';
import { isArray } from 'util';
import { IRegion } from '../lib/common/interfaces';
import { isCollection, isRegion } from '../lib/common/type.guards';
import { DigitalOcean } from '../lib/digitalOcean';

export function RegionTests(digitalOcean: DigitalOcean) {
  const Region = digitalOcean.Region;
  describe('List Regions', () => {
    const perPage = 10;
    const onRegions = (collection) => {
      expect(collection).toBeDefined();
      expect(isCollection<IRegion>(collection, isRegion)).toBeTruthy();
      expect(collection.perPage).toBe(perPage);
      const regions = collection.items;
      expect(isArray(regions)).toBeTruthy();
      expect(collection.items.length).toBeLessThanOrEqual(perPage);
      regions.forEach((action) => expect(isRegion(action)).toBeTruthy());
    };
    const onError = (err) => {
      expect(err instanceof Error).toBeTruthy();
      expect(typeof err.message).toBe('string');
    };
    it('`list` should exists', () => expect(Region.list).toBeDefined());
    it('`list` should be a function', () => expect(typeof Region.list).toBe('function'));
    it('`list` should return Region\'s collecion', (done) => {
      Region.list(0, perPage)
        .pipe(finalize(done))
        .subscribe(onRegions, onError);
    }, digitalOcean.timeout);
    it('`list` should return Error', (done) => {
      Region.list('a' as any, -50)
        .pipe(finalize(done))
        .subscribe(onRegions, onError);
    }, digitalOcean.timeout);
  });
}
