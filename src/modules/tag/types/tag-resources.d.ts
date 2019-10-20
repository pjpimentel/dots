type ITagResources = {
  [key in TagResource]: ITagResourceDetail;
} & ITagResourceDetail