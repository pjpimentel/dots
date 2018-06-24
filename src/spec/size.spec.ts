import { finalize } from 'rxjs/operators';
import { isArray } from 'util';
import { ISize } from '../lib/common/interfaces';
import { isCollection, isSize } from '../lib/common/type.guards';
import { DigitalOcean } from '../lib/digitalOcean';

export function SizeTests(digitalOcean: DigitalOcean) {
  const Size = digitalOcean.Size;
  describe('List Sizes', () => {
    it('`list` should exists', () => expect(Size.list).toBeDefined());
    it('`list` should be a function', () => expect(typeof Size.list).toBe('function'));
    it('`list` should return Size\'s collecion', (done) => {
      const perPage = 10;
      const onSizes = (collection) => {
        expect(collection).toBeDefined();
        expect(isCollection<ISize>(collection, isSize)).toBeTruthy();
        expect(collection.perPage).toBe(perPage);
        const sizes = collection.items;
        expect(isArray(sizes)).toBeTruthy();
        expect(collection.items.length).toBeLessThanOrEqual(perPage);
        sizes.forEach((action) => expect(isSize(action)).toBeTruthy());
      };
      const onError = (err) => {
        expect(err instanceof Error).toBeTruthy();
        expect(typeof err.message).toBe('string');
        fail(err.message);
      };
      Size.list(0, perPage)
        .pipe(finalize(done))
        .subscribe(onSizes, onError);
    }, digitalOcean.timeout);
  });
}
