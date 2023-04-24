import {listDatabaseOptions} from './list-database-options';
import * as MOCK from './list-database-options.mock';

describe('database', () => {
  beforeEach(() => {
    MOCK.httpClient.get.mockClear();
  });

  describe('list-database-options', () => {
    it('should be and return a  fn', () => {
      expect(typeof listDatabaseOptions).toBe('function');
      expect(typeof listDatabaseOptions(MOCK.context)).toBe('function');
    });

    it('should call axios.get', async () => {
      const _listDatabaseOptions = listDatabaseOptions(MOCK.context);

      await _listDatabaseOptions();

      expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint);
    });
  });
});
