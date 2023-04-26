import {getActiveDeploymentLogs} from './get-active-deployment-logs';
import * as MOCK from './get-active-deployment-logs.mock';

describe('app', () => {
  beforeEach(() => {
    MOCK.httpClient.get.mockClear();
  });

  describe('get-active-deployment-logs', () => {
    it('should be and return a fn', () => {
      expect(typeof getActiveDeploymentLogs).toBe('function');
      expect(typeof getActiveDeploymentLogs(MOCK.context)).toBe('function');
    });

    it('should call axios.get', async () => {
      const _getActiveDeploymentLogs = getActiveDeploymentLogs(MOCK.context);

      const input = {
        app_id: Math.random().toString(),
        component_name: Math.random().toString(),
      };

      await _getActiveDeploymentLogs(input);

      expect(MOCK.httpClient.get).toHaveBeenCalledWith(
        `${MOCK.endpoint}/${input.app_id}/components/${input.component_name}/logs`,
        {
          params: {}
        }
      );
    });

    it('should send query parameters', async () => {
      const _getActiveDeploymentLogs = getActiveDeploymentLogs(MOCK.context);

      const input = {
        app_id: Math.random().toString(),
        component_name: Math.random().toString(),
        follow: Math.random() as any as boolean,
        pod_connection_timeout: Math.random().toString(),
        type: Math.random().toString(),
      };

      await _getActiveDeploymentLogs(input);

      expect(MOCK.httpClient.get).toHaveBeenCalledWith(
        `${MOCK.endpoint}/${input.app_id}/components/${input.component_name}/logs`,
        {
          params: {
            follow: input.follow,
            pod_connection_timeout: input.pod_connection_timeout,
            type: input.type,
          }
        }
      );

    });
  });
});
