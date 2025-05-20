export interface IGenAiDataSourceSpec {
  bucket_name?: string;
  bucket_region?: string;
  seed_url?: string;
  crawl_scope?: 'seed_only' | 'path' | 'domain' | 'subdomains';
  item_path?: string;
}

export interface IGenAiDataSourceRequest {
  knowledge_base_uuid: string;
  spaces_data_source?: {
    bucket_name: string;
    region?: string;
    item_path?: string;
  };
  web_crawler_data_source?: {
    base_url: string;
    crawling_option?: string;
    embed_media?: boolean;
  };
}

export interface IGenAiDataSource {
  uuid: string;
  bucket_name?: string;
  region?: string;
  item_path?: string;
  status?: string;
}

export interface IGenAiIndexedDataSource {
  data_source_uuid: string;
  status?: string;
} 