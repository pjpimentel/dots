# gen-ai

## list-models
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_models)
```javascript
try {
  const input = { page: 1 };
  const { data:{ models } } = await dots.genAi.listModels(input);
  console.log(models);
} catch (error) {
  console.log(error);
}
```

## list-regions
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_datacenter_regions)
```javascript
try {
  const { data:{ regions } } = await dots.genAi.listRegions({ page: 1, per_page: 25 });
  console.log(regions);
} catch (error) {
  console.log(error);
}
```

## list-agents
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_agents)
```javascript
try {
  const input = { only_deployed: true };
  const { data:{ agents } } = await dots.genAi.listAgents(input);
  console.log(agents);
} catch (error) {
  console.log(error);
}
```

## create-agent
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_create_agent)
```javascript
try {
  const input = { name: 'my-agent', model_uuid: '', instruction: '', project_id: '', region: '' };
  const { data:{ agent } } = await dots.genAi.createAgent(input);
  console.log(agent);
} catch (error) {
  console.log(error);
}
```

## get-agent
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_get_agent)
```javascript
try {
  const { data:{ agent } } = await dots.genAi.getAgent({ agent_uuid: '' });
  console.log(agent);
} catch (error) {
  console.log(error);
}
```

## update-agent
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_update_agent)
```javascript
try {
  const input = { agent_uuid: '', name: 'new name' };
  const { data:{ agent } } = await dots.genAi.updateAgent(input);
  console.log(agent);
} catch (error) {
  console.log(error);
}
```

## delete-agent
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_delete_agent)
```javascript
try {
  const { status } = await dots.genAi.deleteAgent({ agent_uuid: '' });
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## update-agent-visibility
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_update_agent_deployment_visibility)
```javascript
try {
  const input = { agent_uuid: '', visibility: 'VISIBILITY_PUBLIC' };
  const { data } = await dots.genAi.updateAgentVisibility(input);
  console.log(data.url || data.agent?.endpoint?.url);
} catch (error) {
  console.log(error);
}
```

## list-agent-keys
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_agent_api_keys)
```javascript
try {
  const { data:{ api_key_infos } } = await dots.genAi.listAgentKeys({ agent_uuid: '', page: 1, per_page: 25 });
  console.log(api_key_infos);
} catch (error) {
  console.log(error);
}
```

## create-agent-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_create_agent_api_key)
```javascript
try {
  const input = { agent_uuid: '', name: 'key' };
  const { data:{ api_key_info } } = await dots.genAi.createAgentKey(input);
  console.log(api_key_info);
} catch (error) {
  console.log(error);
}
```

## update-agent-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_update_agent_api_key)
```javascript
try {
  const input = { agent_uuid: '', api_key_uuid: '', name: 'new name' };
  const { data:{ api_key_info } } = await dots.genAi.updateAgentKey(input);
  console.log(api_key_info);
} catch (error) {
  console.log(error);
}
```

## delete-agent-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_delete_agent_api_key)
```javascript
try {
  await dots.genAi.deleteAgentKey({ agent_uuid: '', api_key_uuid: '' });
} catch (error) {
  console.log(error);
}
```

## regenerate-agent-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_regenerate_agent_api_key)
```javascript
try {
  const input = { agent_uuid: '', api_key_uuid: '' };
  const { data:{ api_key_info } } = await dots.genAi.regenerateAgentKey(input);
  console.log(api_key_info);
} catch (error) {
  console.log(error);
}
```

## list-agent-routes
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_get_agent_children)
```javascript
try {
  const { data:{ routes } } = await dots.genAi.listAgentRoutes({ agent_uuid: '', page: 1, per_page: 25 });
  console.log(routes);
} catch (error) {
  console.log(error);
}
```

## attach-agent-route
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_attach_agent)
```javascript
try {
  const input = { 
    parent_agent_uuid: '', 
    child_agent_uuid: '', 
    route: { route_name: 'finance', if_case: 'When discussing financial matters' } 
  };
  const { data:{ agent_route } } = await dots.genAi.attachAgentRoute(input);
  console.log(agent_route);
} catch (error) {
  console.log(error);
}
```

## update-agent-route
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_update_attached_agent)
```javascript
try {
  const input = { 
    parent_agent_uuid: '', 
    child_agent_uuid: '', 
    updates: { if_case: 'When discussing any financial topics' }
  };
  const { data:{ agent_route } } = await dots.genAi.updateAgentRoute(input);
  console.log(agent_route);
} catch (error) {
  console.log(error);
}
```

## detach-agent-route
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_detach_agent)
```javascript
try {
  await dots.genAi.detachAgentRoute({ parent_agent_uuid: '', child_agent_uuid: '' });
} catch (error) {
  console.log(error);
}
```

## attach-knowledge-base
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_attach_knowledge_base)
```javascript
try {
  const input = { agent_uuid: '', knowledge_base_uuid: '' };
  const { data:{ agent } } = await dots.genAi.attachKnowledgeBase(input);
  console.log(agent);
} catch (error) {
  console.log(error);
}
```

## detach-knowledge-base
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_detach_knowledge_base)
```javascript
try {
  await dots.genAi.detachKnowledgeBase({ agent_uuid: '', knowledge_base_uuid: '' });
} catch (error) {
  console.log(error);
}
```

## list-agent-versions
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_agent_versions)
```javascript
try {
  const { data:{ versions } } = await dots.genAi.listAgentVersions({ agent_uuid: '', page: 1, per_page: 25 });
  console.log(versions);
} catch (error) {
  console.log(error);
}
```

## rollback-agent-version
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_rollback_to_agent_version)
```javascript
try {
  const input = { agent_uuid: '', version_uuid: '' };
  const { data:{ agent } } = await dots.genAi.rollbackAgentVersion(input);
  console.log(agent);
} catch (error) {
  console.log(error);
}
```

## list-openai-keys
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_openai_api_keys)
```javascript
try {
  const { data:{ openai_keys } } = await dots.genAi.listOpenAIKeys({ page: 1, per_page: 25 });
  console.log(openai_keys);
} catch (error) {
  console.log(error);
}
```

## create-openai-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_create_openai_api_key)
```javascript
try {
  const input = { api_key: 'sk-...', name: 'My OpenAI Key' };
  const { data:{ openai_key } } = await dots.genAi.createOpenAIKey(input);
  console.log(openai_key);
} catch (error) {
  console.log(error);
}
```

## get-openai-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_get_openai_api_key)
```javascript
try {
  const { data:{ openai_key } } = await dots.genAi.getOpenAIKey({ key_uuid: '' });
  console.log(openai_key);
} catch (error) {
  console.log(error);
}
```

## update-openai-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_update_openai_api_key)
```javascript
try {
  const input = { key_uuid: '', updates: { name: 'Updated Key', enabled: true } };
  const { data:{ openai_key } } = await dots.genAi.updateOpenAIKey(input);
  console.log(openai_key);
} catch (error) {
  console.log(error);
}
```

## delete-openai-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_delete_openai_api_key)
```javascript
try {
  await dots.genAi.deleteOpenAIKey({ key_uuid: '' });
} catch (error) {
  console.log(error);
}
```

## list-anthropic-keys
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_anthropic_api_keys)
```javascript
try {
  const { data:{ anthropic_keys } } = await dots.genAi.listAnthropicKeys({ page: 1, per_page: 25 });
  console.log(anthropic_keys);
} catch (error) {
  console.log(error);
}
```

## list-knowledge-bases
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_knowledge_bases)
```javascript
try {
  const { data:{ knowledge_bases } } = await dots.genAi.listKnowledgeBases({ page: 1, per_page: 25 });
  console.log(knowledge_bases);
} catch (error) {
  console.log(error);
}
```

## create-knowledge-base
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_create_knowledge_base)
```javascript
try {
  const input = { name: 'kb', datasources: [] };
  const { data:{ knowledge_base } } = await dots.genAi.createKnowledgeBase(input);
  console.log(knowledge_base);
} catch (error) {
  console.log(error);
}
```

## get-knowledge-base
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_get_knowledge_base)
```javascript
try {
  const input = { knowledge_base_uuid: 'uuid' };
  const { data:{ knowledge_base } } = await dots.genAi.getKnowledgeBase(input);
  console.log(knowledge_base);
} catch (error) {
  console.log(error);
}
```

## update-knowledge-base
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_update_knowledge_base)
```javascript
try {
  const input = { knowledge_base_uuid: 'uuid', updates: { name: 'new' } };
  const { data:{ knowledge_base } } = await dots.genAi.updateKnowledgeBase(input);
  console.log(knowledge_base);
} catch (error) {
  console.log(error);
}
```

## delete-knowledge-base
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_delete_knowledge_base)
```javascript
try {
  const input = { knowledge_base_uuid: 'uuid' };
  const { status } = await dots.genAi.deleteKnowledgeBase(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## list-knowledge-base-data-sources
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_knowledge_base_data_sources)
```javascript
try {
  const input = { knowledge_base_uuid: 'uuid', page: 1, per_page: 25 };
  const { data:{ knowledge_base_data_sources } } = await dots.genAi.listKnowledgeBaseDataSources(input);
  console.log(knowledge_base_data_sources);
} catch (error) {
  console.log(error);
}
```

## add-knowledge-base-data-source
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_create_knowledge_base_data_source)
```javascript
try {
  // Example with Spaces data source
  const spacesInput = { 
    knowledge_base_uuid: 'uuid', 
    data: {
      knowledge_base_uuid: 'uuid',
      spaces_data_source: {
        bucket_name: 'my-bucket',
        region: 'nyc1',
        item_path: '/docs'
      }
    }
  };
  const { data:{ knowledge_base_data_source } } = await dots.genAi.addKnowledgeBaseDataSource(spacesInput);
  console.log(knowledge_base_data_source);

  // Example with Web Crawler data source
  const webCrawlerInput = { 
    knowledge_base_uuid: 'uuid', 
    data: {
      knowledge_base_uuid: 'uuid',
      web_crawler_data_source: {
        base_url: 'https://example.com',
        crawling_option: 'domain',
        embed_media: true
      }
    }
  };
  const { data:{ knowledge_base_data_source: webSource } } = await dots.genAi.addKnowledgeBaseDataSource(webCrawlerInput);
  console.log(webSource);
} catch (error) {
  console.log(error);
}
```

## delete-knowledge-base-data-source
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_delete_knowledge_base_data_source)
```javascript
try {
  const input = { knowledge_base_uuid: 'uuid', data_source_uuid: 'uuid2' };
  const { status } = await dots.genAi.deleteKnowledgeBaseDataSource(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## list-indexing-jobs
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_indexing_jobs)
```javascript
try {
  const input = { knowledge_base_uuid: 'uuid', page: 1, per_page: 10 };
  const { data:{ indexing_jobs } } = await dots.genAi.listIndexingJobs(input);
  console.log(indexing_jobs);
} catch (error) {
  console.log(error);
}
```

## create-indexing-job
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_create_indexing_job)
```javascript
try {
  const input = { knowledge_base_uuid: 'uuid' };
  const { data:{ indexing_job } } = await dots.genAi.createIndexingJob(input);
  console.log(indexing_job);
} catch (error) {
  console.log(error);
}
```

## list-indexing-job-data-sources
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_indexing_job_data_sources)
```javascript
try {
  const input = { indexing_job_uuid: 'jobid' };
  const { data:{ indexed_data_sources } } = await dots.genAi.listIndexingJobDataSources(input);
  console.log(indexed_data_sources);
} catch (error) {
  console.log(error);
}
```

## get-indexing-job
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_get_indexing_job)
```javascript
try {
  const input = { knowledge_base_uuid: 'uuid', indexing_job_uuid: 'jobid' };
  const { data:{ indexing_job } } = await dots.genAi.getIndexingJob(input);
  console.log(indexing_job);
} catch (error) {
  console.log(error);
}
```

## cancel-indexing-job
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_cancel_indexing_job)
```javascript
try {
  const input = { knowledge_base_uuid: 'uuid', indexing_job_uuid: 'jobid' };
  const { status } = await dots.genAi.cancelIndexingJob(input);
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## attach-knowledge-bases
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_attach_knowledge_bases)
```javascript
try {
  const input = { 
    agent_uuid: '', 
    knowledge_base_uuids: ['kb-uuid-1', 'kb-uuid-2'] 
  };
  const { data:{ agent } } = await dots.genAi.attachKnowledgeBases(input);
  console.log(agent);
} catch (error) {
  console.log(error);
}
```

## create-anthropic-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_create_anthropic_api_key)
```javascript
try {
  const input = { api_key: 'sk-ant-...', name: 'My Anthropic Key' };
  const { data:{ anthropic_key } } = await dots.genAi.createAnthropicKey(input);
  console.log(anthropic_key);
} catch (error) {
  console.log(error);
}
```

## get-anthropic-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_get_anthropic_api_key)
```javascript
try {
  const { data:{ anthropic_key } } = await dots.genAi.getAnthropicKey({ key_uuid: '' });
  console.log(anthropic_key);
} catch (error) {
  console.log(error);
}
```

## update-anthropic-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_update_anthropic_api_key)
```javascript
try {
  const input = { key_uuid: '', updates: { name: 'Updated Key', enabled: true } };
  const { data:{ anthropic_key } } = await dots.genAi.updateAnthropicKey(input);
  console.log(anthropic_key);
} catch (error) {
  console.log(error);
}
```

## delete-anthropic-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_delete_anthropic_api_key)
```javascript
try {
  await dots.genAi.deleteAnthropicKey({ key_uuid: '' });
} catch (error) {
  console.log(error);
}
```

## list-agents-by-openai-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_agents_by_openai_key)
```javascript
try {
  const { data:{ agents } } = await dots.genAi.listAgentsByOpenAIKey({ key_uuid: '', page: 1, per_page: 25 });
  console.log(agents);
} catch (error) {
  console.log(error);
}
```

## list-agents-by-anthropic-key
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_list_agents_by_anthropic_key)
```javascript
try {
  const { data:{ agents } } = await dots.genAi.listAgentsByAnthropicKey({ key_uuid: '', page: 1, per_page: 25 });
  console.log(agents);
} catch (error) {
  console.log(error);
}
```

## attach-function-route
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_attach_agent_function)
```javascript
try {
  const input = { 
    agent_uuid: '', 
    function_route: { 
      function_name: 'getWeather', 
      description: 'Get current weather', 
      faas_namespace: 'default',
      faas_name: 'weather-service' 
    } 
  };
  const { data:{ function_route } } = await dots.genAi.attachFunctionRoute(input);
  console.log(function_route);
} catch (error) {
  console.log(error);
}
```

## update-function-route
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_update_agent_function)
```javascript
try {
  const input = { 
    agent_uuid: '', 
    function_route_id: '', 
    updates: { 
      description: 'Get current weather and forecast',
      input_schema: { type: 'object', properties: { location: { type: 'string' } } } 
    } 
  };
  const { data:{ function_route } } = await dots.genAi.updateFunctionRoute(input);
  console.log(function_route);
} catch (error) {
  console.log(error);
}
```

## detach-function-route
[public docs](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GenAI-Platform-(Public-Preview)/operation/genai_detach_agent_function)
```javascript
try {
  await dots.genAi.detachFunctionRoute({ agent_uuid: '', function_route_id: '' });
} catch (error) {
  console.log(error);
}
```
