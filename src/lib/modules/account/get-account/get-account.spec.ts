import {getAccount} from './get-account';
import { createContext } from '../../../utils/create-context';

describe('account', () => {
  let context: IContext<AxiosInstance>;
  beforeAll(() => {
    context = createContext();
  });
  describe('get-account', () => {
    it('should be a fn', () => {
      expect(typeof getAccount).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getAccount(context)).toBe('function');
    });
    it('should return a Promise<IResponse<IGetAccountApiResponse>>', async () => {
      const _getAccount = getAccount(context);
      const response = await _getAccount();
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.status).toBe('number');
      expect(typeof response.statusText).toBe('string');
      /// validate data schema
      expect(response.data).toBeDefined();
      expect(response.data.account).toBeDefined();
      const {account} = response.data;
      expect(account.droplet_limit).toBeDefined();
      expect(account.email_verified).toBeDefined();
      expect(account.email).toBeDefined();
      expect(account.floating_ip_limit).toBeDefined();
      expect(account.status_message).toBeDefined();
      expect(account.status).toBeDefined();
      expect(account.uuid).toBeDefined();
    });
  });
});
