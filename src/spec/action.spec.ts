import { finalize } from 'rxjs/operators';
import { isArray } from 'util';
import { IAction } from '../lib/common/interfaces';
import { isAction, isCollection } from '../lib/common/type.guards';
import { DigitalOcean } from '../lib/digitalOcean';

export function ActionTests(digitalOcean: DigitalOcean) {
  const Action = digitalOcean.Action;
  let actionToTest: IAction = {} as IAction;
  const perPage = 10;
  const onActions = (collection) => {
    expect(collection).toBeDefined();
    expect(isCollection<IAction>(collection, isAction)).toBeTruthy();
    expect(collection.perPage).toBe(perPage);
    const actions = collection.items;
    expect(isArray(actions)).toBeTruthy();
    expect(collection.items.length).toBeLessThanOrEqual(perPage);
    actions.forEach((action) => expect(isAction(action)).toBeTruthy());
    actionToTest = actions[Math.floor(Math.random() * actions.length)];
  };
  const onError = (err, shouldFail) => {
    expect(err instanceof Error).toBeTruthy();
    expect(typeof err.message).toBe('string');
    if (shouldFail) fail(err);
  };
  describe('List Actions', () => {
    it('`list` should exists', () => expect(Action.list).toBeDefined());
    it('`list` should be a function', () => expect(typeof Action.list).toBe('function'));
    it('`list` should return Action\'s collecion', (done) => {
      Action.list(0, perPage)
        .pipe(finalize(done))
        .subscribe(onActions, (err) => onError(err, true));
    }, digitalOcean.timeout);
    it('`list` should return Error', (done) => {
      // tslint:disable-next-line
      Action.list('a' as any, perPage)
        .pipe(finalize(done))
        .subscribe(onActions, (err) => onError(err, false));
    }, digitalOcean.timeout);
  });

  describe('Get Action', () => {
    it('`Get` should exists', () => expect(Action.get).toBeDefined());
    it('`Get` should be a function', () => expect(typeof Action.get).toBe('function'));
    it('`actionToTest` should exists', () => expect(actionToTest).toBeDefined());
    it('`actionToTest.id` should exists', () => expect(actionToTest.id).toBeDefined());
    it('`Get` should return Action object', (done) => {
      const onAction = (action) => {
        expect(action).toBeDefined();
        expect(isAction(action)).toBeTruthy();
        expect(action.id).toBe(actionToTest.id);
      };
      Action.get(actionToTest.id)
        .pipe(finalize(done))
        .subscribe(onAction, (err) => onError(err, true));
    }, digitalOcean.timeout);
  });
}
