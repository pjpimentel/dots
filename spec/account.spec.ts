import { finalize } from 'rxjs/operators';
import { isAccount } from '../src/common/type.guards';
import { DigitalOcean } from '../src/digitalOcean';

export default function(digitalOcean: DigitalOcean) {
  const Account = digitalOcean.Account;
  describe('Get Account', () => {
    it('`Get` should exists', () => expect(Account.get).toBeDefined());
    it('`Get` should be a function', () => expect(typeof Account.get).toBe('function'));
    it('`Get` should return account object', (done) => {
      const onAccount = (account) => {
        expect(account).toBeDefined();
        expect(isAccount(account)).toBeTruthy();
      };
      const onError = (err) => {
        expect(err instanceof Error).toBeTruthy();
        expect(typeof err.message).toBe('string');
        fail(err.message);
      };
      Account.get()
        .pipe(
          finalize(done),
        )
        .subscribe(onAccount, onError);
    }, digitalOcean.timeout);
  });
}
