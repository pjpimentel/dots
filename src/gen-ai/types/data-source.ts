export interface IGenAiDataSourceSpec {
  bucket_name?: string;
  bucket_region?: string;
  seed_url?: string;
  crawl_scope?: 'seed_only' | 'path' | 'domain' | 'subdomains';
  item_path?: string;
  object_path?: string;
  crawl_depth?: number;
  embed_media?: boolean;
  recursive?: boolean;
}

export interface IGenAiDataSourceRequest {
  knowledge_base_uuid: string;
  spaces_data_source?: {
    bucket_name: string;
    region?: string;
    item_path?: string;
    object_path?: string;
    recursive?: boolean;
  };
  web_crawler_data_source?: {
    base_url?: string;
    url?: string;
    urls?: string[];
    crawling_option?: string;
    crawl_depth?: number;
    embed_media?: boolean;
  };
  file_upload_data_source?: {
    file_uuid: string;
    file_name?: string;
  };
}

export interface IGenAiDataSource {
  uuid: string;
  bucket_name?: string;
  region?: string;
  item_path?: string;
  object_path?: string;
  crawl_depth?: number;
  embed_media?: boolean;
  recursive?: boolean;
  status?: string;
}

export interface IGenAiIndexedDataSource {
  data_source_uuid: string;
  status?: string;
} 