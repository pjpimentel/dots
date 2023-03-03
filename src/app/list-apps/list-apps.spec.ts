import {listApps} from './list-apps';
import * as MOCK from './list-apps.mock';

describe('app', () => {
  beforeEach(() => {
    MOCK.httpClient.get.mockClear();
  });
  describe('list-apps', () => {
    it('should be and return a  fn', () => {
      expect(typeof listApps).toBe('function');
      expect(typeof listApps(MOCK.context)).toBe('function');
    });

    it('should send page and per_page parameter', async () => {
      const _listApps = listApps(MOCK.context);

      await _listApps(MOCK.default_input);

      expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
        params: {
          page: MOCK.default_input.page,
          per_page: MOCK.default_input.per_page,
          with_projects: false,
        },
      });
    });

    it('should have default parameters', async () => {
      const _listApps = listApps(MOCK.context);

      await _listApps({});

      expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
        params: {
          page: 1,
          per_page: 25,
          with_projects: false,
        },
      });
    });

    it('should send `with_projects` as true', async () => {
      const _listApps = listApps(MOCK.context);

      await _listApps({
        ...MOCK.default_input,
        with_projects: true,
      });

      expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
        params: {
          page: MOCK.default_input.page,
          per_page: MOCK.default_input.per_page,
          with_projects: true,
        },
      });
    });
  });
});
