// Original file: src/shared/protos/content.proto

import type { Content as _content_Content, Content__Output as _content_Content__Output } from '../content/Content';

export interface ContentUpdateRequest {
  'token'?: (string);
  '_id'?: (string);
  'data'?: (_content_Content);
}

export interface ContentUpdateRequest__Output {
  'token': (string);
  '_id': (string);
  'data'?: (_content_Content__Output);
}
