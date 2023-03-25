import {listDroplets} from './list-droplets';
import * as MOCK from './list-droplets.mock';

describe('droplet', () => {

  beforeEach(() => {
    MOCK.httpClient.get.mockClear();
  });

  describe('list-droplets', () => {
    it('should be and return a fn', () => {
      expect(typeof listDroplets).toBe('function');
      expect(typeof listDroplets(MOCK.context)).toBe('function');
    });

    it('should send page and per_page parameter', async () => {
      const _listDroplets = listDroplets(MOCK.context);

      await _listDroplets(MOCK.default_input);

      expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
        params: {
          page: MOCK.default_input.page,
          per_page: MOCK.default_input.per_page,
          tag_name: undefined,
        },
      });
    });

    it('should have default parameters', async () => {
      const _listDroplets = listDroplets(MOCK.context);

      await _listDroplets({});

      expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
        params: {
          page: 1,
          per_page: 25,
          tag_name: undefined,
        },
      });
    });

    it('should send `tag_name` as query parameters', async () => {
      const _listDroplets = listDroplets(MOCK.context);

      const tag_name = `${Math.random()}`;

      await _listDroplets({
        ...MOCK.default_input,
        tag_name,
      });

      expect(MOCK.httpClient.get).toHaveBeenCalledWith(MOCK.endpoint, {
        params: {
          page: MOCK.default_input.page,
          per_page: MOCK.default_input.per_page,
          tag_name: tag_name,
        },
      });
    });

    it('should output expected type', async () => {
      const _listDroplets = listDroplets(MOCK.context);

      const output = await _listDroplets({});

      expect(output.data.droplets).toBeDefined();

      expect(output.data.links?.pages).toBeDefined();
      expect(output.data.links?.pages?.first).toBeDefined();
      expect(output.data.links?.pages?.last).toBeDefined();
      expect(output.data.links?.pages?.next).toBeDefined();
      expect(output.data.links?.pages?.prev).toBeDefined();

      expect(output.data.meta?.total).toBeDefined();
    });
  });
});
