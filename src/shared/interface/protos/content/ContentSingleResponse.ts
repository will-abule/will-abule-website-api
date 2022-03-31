// Original file: src/shared/protos/content.proto

import type { Content as _content_Content, Content__Output as _content_Content__Output } from '../content/Content';

export interface ContentSingleResponse {
  'status'?: (number);
  'data'?: (_content_Content);
  'errorMessage'?: (string);
  'token'?: (string);
}

export interface ContentSingleResponse__Output {
  'status': (number);
  'data'?: (_content_Content__Output);
  'errorMessage': (string);
  'token': (string);
}
