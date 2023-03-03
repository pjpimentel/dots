import {createApp} from './create-app';
import * as MOCK from './create-app.mock';

describe('app', () => {
  beforeEach(() => {
    MOCK.httpClient.post.mockClear();
  });
  describe('create-app', () => {
    it('should be and return a  fn', () => {
      expect(typeof createApp).toBe('function');
      expect(typeof createApp(MOCK.context)).toBe('function');
    });

    it('should send `spec` parameter', async () => {
      const _createApp = createApp(MOCK.context);

      await _createApp(MOCK.default_input);

      expect(MOCK.httpClient.post).toHaveBeenCalledWith(MOCK.endpoint, MOCK.default_input);
    });

    it('should send `project_id` parameter', async () => {
      const _createApp = createApp(MOCK.context);

      const project_id = `${Math.random()}`;
      await _createApp({
        ...MOCK.default_input,
        project_id,
      });

      expect(MOCK.httpClient.post).toHaveBeenCalledWith(MOCK.endpoint, {
        spec: MOCK.default_input.spec,
        project_id,
      });
    });
  });
});
