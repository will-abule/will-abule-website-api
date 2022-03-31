// Original file: src/shared/protos/content.proto

import type { Content as _content_Content, Content__Output as _content_Content__Output } from '../content/Content';

export interface ContentResponse {
  'status'?: (number);
  'errorMessage'?: (string);
  'data'?: (_content_Content)[];
  'pageNumber'?: (number);
  'pageSize'?: (number);
  'totalPage'?: (number);
  'records'?: (number);
}

export interface ContentResponse__Output {
  'status': (number);
  'errorMessage': (string);
  'data': (_content_Content__Output)[];
  'pageNumber': (number);
  'pageSize': (number);
  'totalPage': (number);
  'records': (number);
}
