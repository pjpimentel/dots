import { ITagResourceDetail, TagResource } from '.';

export type ITagResources = {
  [key in TagResource]: ITagResourceDetail;
} & ITagResourceDetail
