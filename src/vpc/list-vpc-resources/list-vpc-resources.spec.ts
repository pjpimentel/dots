import { listVpcResources } from './list-vpc-resources';

describe('list-vpc-resources', () => {
  const default_input = {
    resource_type: require('crypto').randomBytes(2),
    vpc_id: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof listVpcResources).toBe('function');
    expect(typeof listVpcResources(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listVpcResources = listVpcResources(context);
    await _listVpcResources(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/vpcs/${default_input.vpc_id}/members`, {
      params: {
        page: 1,
        per_page: 25,
        resource_type: default_input.resource_type
      },
    });
  });

  it('should use `page`, `per_page` and `resource_type` input', async () => {
    const _listVpcResources = listVpcResources(context);
    const input = {
      ...default_input,
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    };
    await _listVpcResources(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/vpcs/${default_input.vpc_id}/members`, {
      params: {
        page: input.page,
        per_page: input.per_page,
        resource_type: input.resource_type
      },
    });
  });

  it('should output axios response', async () => {
    const _listVpcResources = listVpcResources(context);
    const output = await _listVpcResources(default_input);

    expect(output).toBe(default_output);
  });
});
