# gen-ai

## list-models
[public docs](https://docs.digitalocean.com/reference/api/genai/)
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
[public docs](https://docs.digitalocean.com/reference/api/genai/)
```javascript
try {
  const { data:{ regions } } = await dots.genAi.listRegions();
  console.log(regions);
} catch (error) {
  console.log(error);
}
```

## list-agents
[public docs](https://docs.digitalocean.com/reference/api/genai/)
```javascript
try {
  const { data:{ agents } } = await dots.genAi.listAgents();
  console.log(agents);
} catch (error) {
  console.log(error);
}
```

## create-agent
[public docs](https://docs.digitalocean.com/reference/api/genai/)
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
[public docs](https://docs.digitalocean.com/reference/api/genai/)
```javascript
try {
  const { data:{ agent } } = await dots.genAi.getAgent({ agent_uuid: '' });
  console.log(agent);
} catch (error) {
  console.log(error);
}
```

## update-agent
[public docs](https://docs.digitalocean.com/reference/api/genai/)
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
[public docs](https://docs.digitalocean.com/reference/api/genai/)
```javascript
try {
  const { status } = await dots.genAi.deleteAgent({ agent_uuid: '' });
  console.log(status);
} catch (error) {
  console.log(error);
}
```

## list-agent-keys
[public docs](https://docs.digitalocean.com/reference/api/genai/)
```javascript
try {
  const { data:{ api_key_infos } } = await dots.genAi.listAgentKeys({ agent_uuid: '' });
  console.log(api_key_infos);
} catch (error) {
  console.log(error);
}
```

## create-agent-key
[public docs](https://docs.digitalocean.com/reference/api/genai/)
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
[public docs](https://docs.digitalocean.com/reference/api/genai/)
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
[public docs](https://docs.digitalocean.com/reference/api/genai/)
```javascript
try {
  await dots.genAi.deleteAgentKey({ agent_uuid: '', api_key_uuid: '' });
} catch (error) {
  console.log(error);
}
```
